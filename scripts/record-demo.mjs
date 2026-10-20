// Record a real public-site walkthrough without accounts, purchases or fake data.
// Usage: node scripts/record-demo.mjs raidio
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const projects = {
  "aurora-pool-spa": ["https://aurora-pool-spa.adgostudios.workers.dev", ["Services", "scroll", "Contact", "scroll"]],
  "adgo-studios": ["https://adgostudios.com", ["scroll", "Services", "scroll", "Contact"]],
  "psych-open-source": ["https://psych-open-source.vercel.app", ["scroll", "Archive", "scroll", "Timeline"]],
  raidio: ["https://raidio-ten.vercel.app", ["scroll", "Browse", "scroll", "Night Drive FM"]],
  snapdex: ["https://trading-card-app-two.vercel.app", ["scroll", "Start collecting", "scroll"]],
  "jump-trainer": ["https://apogee-web-three.vercel.app", ["scroll", "scroll"]],
  "edit-battle": ["https://edit-battle.vercel.app", ["Challenges", "scroll", "Ranks", "scroll"]],
  "civic-mirror": ["https://web-tau-drab-10.vercel.app", ["scroll", "scroll"]],
  "co-lab": ["https://colab-orpin.vercel.app", ["Explore", "scroll", "Graph", "scroll"]],
  skateview: ["https://skateview-app.vercel.app", ["scroll", "scroll"]],
  "living-window": ["https://living-window-app-orcin.vercel.app", ["scroll", "scroll"]],
};
const slug = process.argv[2];
if (!Object.hasOwn(projects, slug)) {
  console.error("Choose: " + Object.keys(projects).join(", "));
  process.exit(2);
}
const [url, steps] = projects[slug];
const outDir = resolve("demo-output");
mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 1,
  recordVideo: { dir: outDir, size: { width: 1280, height: 720 } },
});
const page = await context.newPage();
const video = page.video();
let ok = false;
try {
  const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
  if (!response || response.status() >= 400) throw new Error("Public page unavailable: " + (response?.status() ?? "no response"));
  await page.waitForTimeout(2500);
  for (const step of steps) {
    if (step === "scroll") {
      await page.evaluate(() => window.scrollBy({ top: 490, behavior: "smooth" }));
    } else {
      const pattern = new RegExp(step, "i");
      for (const kind of ["link", "button"]) {
        const link = page.getByRole(kind, { name: pattern }).first();
        if (!(await link.count()) || !(await link.isVisible())) continue;
        if (/checkout|purchase|subscribe|submit|delete|publish|upload|sign in|log in/i.test(step)) break;
        try {
          const rect = await link.boundingBox();
          if (rect) await page.mouse.move(rect.x + rect.width / 2, rect.y + rect.height / 2, { steps: 14 });
          await link.click({ timeout: 3500 });
        } catch (err) { console.log("Skip step " + step + ": " + String(err).slice(0, 90)); }
        break;
      }
    }
    await page.waitForTimeout(2400);
  }
  await page.waitForTimeout(1500);
  await page.screenshot({ path: resolve(outDir, slug + ".png") });
  console.log("Real browser walkthrough captured for " + slug + ": " + url);
  ok = true;
} finally {
  await context.close();
  if (video) await video.saveAs(resolve(outDir, slug + ".webm"));
  await browser.close();
}
if (!ok) process.exit(1);
