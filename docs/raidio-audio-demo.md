# Raidio authenticated-audio-free visitor demo

A public visitor journey was recorded using real Chromium and a PulseAudio monitor on a GitHub Actions runner, without credentials, fabricated audio, purchases, or production changes.

## Verified run

- Recording run: https://github.com/hellsangel05/portfolio-site/actions/runs/39516494294
- Browser opened Raidio, browsed Night Drive FM and activated **Tune in live**.
- Music played from Raidio's actual Supabase public audio storage and was captured through the browser's audio output.
- Output was an H.264 MP4 with stereo AAC audio; audio presence was checked with FFmpeg volume analysis.
- Two independent Chromium contexts were tuned to the same track. Observed audio positions at the same check were **43.27 seconds** and **43.91 seconds**, a difference of **0.64 seconds**. This is an observation from one run, not a general timing guarantee.
- This workflow can rerun using the open-source script `scripts/record-radio-audio.mjs` and workflow `.github/workflows/record-radio-audio.yml`.

## Portfolio publishing

The finished, reviewed video was prepared as a local artifact. **Do not add a reference to a video in the portfolio until that MP4 has been uploaded to a stable path.** For example, put the reviewed MP4 at `public/demos/raidio-showcase.mp4` and the thumbnail at `public/demos/raidio-showcase-poster.png`, then add to the Raidio project in `app/data/portfolio.ts`:

```tsx
demoVideo: {
  src: "/demos/raidio-showcase.mp4",
  poster: "/demos/raidio-showcase-poster.png",
  orientation: "landscape",
  caption: "Real browser and real station audio demonstration; sync checked in two browser sessions.",
},
```

Review music and media usage rights before publishing publicly. Production portfolio was not modified for this recording experiment.
