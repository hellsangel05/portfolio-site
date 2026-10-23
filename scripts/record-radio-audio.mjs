// Screen + system-audio demonstration of Raidio for a portfolio.
// Uses real publicly accessible features. No credentials or write operations.
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const output = resolve("demo-output/audio-v2");
mkdirSync(output, { recursive: true });
const site = "https://raidio-ten.vercel.app";
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const events = [];
const mark = (name, more = {}) => {
  const event = { event: name, t: Date.now(), ...more };
  events.push(event);
  console.log(JSON.stringify(event));
};
const observeAudio = () => {
  const OriginalAudio = window.Audio;
  class CapturedAudio extends OriginalAudio {
    constructor(...args) {
      super(...args);
      (window.__radioAudioElements ||= []).push(this);
    }
  }
  window.Audio = CapturedAudio;
};
const audioState = async (page) => page.evaluate(() => {
  const list = window.__radioAudioElements || [];
  return list.map((audio) => ({
    source: audio.currentSrc ? new URL(audio.currentSrc).pathname : "",
    currentTime: Number(audio.currentTime?.toFixed(2)),
    paused: audio.paused,
    readyState: audio.readyState,
    volume: audio.volume,
    muted: audio.muted,
  }));
});
const audio = spawn("ffmpeg", [
  "-nostdin", "-hide_banner", "-loglevel", "error",
  "-y", "-f", "pulse", "-i", "demo_sink.monitor",
  "-ac", "2", "-ar", "44100", "-c:a", "pcm_s16le",
  resolve(output, "browser-audio.wav"),
], { stdio: ["ignore", "ignore", "pipe"] });
let audioErrors = "";
audio.stderr.on("data", d => { audioErrors += d.toString(); });
mark("audio-capture-spawned", { pid: audio.pid });
const browser = await chromium.launch({
  headless: false,
  args: ["--autoplay-policy=no-user-gesture-required", "--no-sandbox", "--window-position=0,0"],
});
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 1,
  recordVideo: { dir: output, size: { width: 1280, height: 720 } },
});
await context.addInitScript(observeAudio);
const page = await context.newPage();
const video = page.video();
let secondaryContext = null;
let success = false;
try {
  await delay(900);
  const response = await page.goto(site, { waitUntil: "domcontentloaded", timeout: 55000 });
  if (!response || response.status() >= 400) throw Error("Site unavailable " + response?.status());
  await delay(4200);
  mark("home-loaded", { url: page.url() });
  await page.screenshot({ path: resolve(output, "home.png") });
  const browse = page.getByRole("link", { name: /browse/i }).first();
  if (await browse.count()) {
    await browse.click();
    mark("browse");
  }
  await delay(3600);
  const station = page.getByRole("link", { name: /night drive fm/i }).first();
  if (!(await station.count())) throw Error("Night Drive FM link not found");
  await station.click({ timeout: 8000 });
  await delay(3200);
  mark("station-opened", { url: page.url() });
  const stationUrl = page.url();
  const tune = page.getByRole("button", { name: /tune in live/i }).first();
  if (!(await tune.count())) throw Error("Tune in live button missing");
  await tune.click({ timeout: 8000 });
  mark("tuned-in", { url: page.url() });
  await delay(12000);
  const firstStatus = await audioState(page);
  mark("listener-one", { audio: firstStatus });
  await page.screenshot({ path: resolve(output, "listener-one.png") });

  // Independent browser context, same station. Mute its audio (not its playhead)
  // so the captured music is only from the primary listener.
  secondaryContext = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  await secondaryContext.addInitScript(observeAudio);
  const second = await secondaryContext.newPage();
  await second.goto(stationUrl, { waitUntil: "domcontentloaded", timeout: 50000 });
  // Mute only the comparison listener before tuning, so the recording contains
  // one authentic music stream and not two competing copies.
  await second.evaluate(() => (window.__radioAudioElements || []).forEach(a => { a.muted = true; }));
  await delay(2700);
  const tuneTwo = second.getByRole("button", { name: /tune in live/i }).first();
  if (await tuneTwo.count()) await tuneTwo.click();
  await delay(4000);
  const s1 = await audioState(page);
  const s2 = await audioState(second);
  const active = a => a.find(x => x.source && !x.paused && x.currentTime > 0);
  const x = active(s1), y = active(s2);
  const diff = x && y ? Math.abs(x.currentTime - y.currentTime) : null;
  mark("sync-check", { first: x, second: y, offsetDifferenceSeconds: diff });
  await second.screenshot({ path: resolve(output, "listener-two.png") });
  if (diff !== null && diff <= 2.5) mark("sync-demonstrated", { offsetDifferenceSeconds: diff });
  else mark("sync-not-established", { reason: diff === null ? "Playback unavailable in one browser" : "Offsets differ too much" });
  await delay(8000);
  await page.screenshot({ path: resolve(output, "end.png") });
  mark("recording-finished", { primary: await audioState(page) });
  success = true;
} finally {
  if (secondaryContext) await secondaryContext.close();
  await context.close();
  if (video) await video.saveAs(resolve(output, "radio-screen.webm"));
  await browser.close();
  audio.kill("SIGINT");
  await new Promise(resolveDone => { if (audio.exitCode !== null) resolveDone(); else audio.once("close", resolveDone); });
  writeFileSync(resolve(output, "capture-events.json"), JSON.stringify({ events, ffmpegError: audioErrors }, null, 2));
}
if (!success) process.exitCode = 1;
