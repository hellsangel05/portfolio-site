# Portfolio project demo capture

This branch includes a real browser capture script, plus a manually triggered GitHub Actions workflow as a Raidio pilot.

## Capture using GitHub without buying recording software

1. Once this branch is merged, open the portfolio-site repository on GitHub.
2. Select Actions, then Capture Raidio demo, then Run workflow.
3. GitHub Actions installs Playwright and records a real Chromium browser session. FFmpeg converts the recording to MP4.
4. Download and review the raidio-demo Actions artifact. It includes an MP4 and screenshot.
5. Only publish the demo if it represents a genuinely working feature, not a paused or empty database.

To embed a reviewed video, upload the MP4 under public/demos/raidio.mp4. The portfolio already renders the demoVideo property for each project in app/work/[slug]/page.tsx. Add the property in app/data/portfolio.ts:

~~~tsx
demoVideo: {
  src: "/demos/raidio.mp4",
  orientation: "landscape",
  caption: "Real browser walkthrough of the Raidio interface.",
},
~~~

The script can also be run for the other project slugs using the command below, after Playwright and Chromium are installed locally:

~~~sh
node scripts/record-demo.mjs aurora-pool-spa
node scripts/record-demo.mjs adgo-studios
node scripts/record-demo.mjs psych-open-source
node scripts/record-demo.mjs snapdex
node scripts/record-demo.mjs jump-trainer
node scripts/record-demo.mjs edit-battle
node scripts/record-demo.mjs civic-mirror
node scripts/record-demo.mjs co-lab
node scripts/record-demo.mjs skateview
node scripts/record-demo.mjs living-window
~~~

These are starter interaction sequences, not verified test suites. Adapt each scenario to demonstrate a meaningful path, review the results, then optionally add a concise voiceover and captions. The automation never signs in, submits customer data, purchases products or creates false demo content. Avoid recording credentials, clients or user private information.

For hiring purposes, a polished 30–60 second product journey beats a long sales video.
