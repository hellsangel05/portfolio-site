# Portfolio recording #2 — Aurora Pool & Spa

**After Raidio:** Aurora is the next walkthrough in the agreed portfolio-demo sequence. This is a real client-site implementation, not an AI radio app. Do not reactivate a second Supabase project for it: Aurora uses Astro on Cloudflare rather than Supabase.

## Source of truth

- Live site: https://aurora-pool-spa.adgostudios.workers.dev/
- Codebase: `ADGOstudios/aurora-pool-spa` (private; don't copy client source into the public portfolio)
- Portfolio case study: `/work/aurora-pool-spa`
- Shot capture: `scripts/record_aurora_demo.py` in this portfolio repository

## Recording direction

**Target:** 45–65 seconds, landscape 16:9, authentic browser interactions, silent clean base video for optional separate narration/music.

1. **0–6s / First impression:** home hero, ocean-facing pool image, headline, quote CTA.
2. **6–13s / Service architecture:** scroll to cleaning, repairs, calcium removal, system programming and individual service routes.
3. **13–25s / Real client evidence:** scroll to before/after; actively adjust the comparison slider. Do not claim a specific treatment or timeline not confirmed by the owner.
4. **25–34s / Actual field footage:** show two on-site cleaning videos as they play in the site.
5. **34–42s / Local coverage:** service-area map/chips and the owner-approved local geography.
6. **42–52s / Photo journal:** case studies and original pool photography.
7. **52–60s / Conversion:** actual contact/quote page, call/text options and GHL form if embedded. **Do not submit a test lead** or book a calendar appointment.

**Portfolio caption draft:** “Designed and delivered a responsive, SEO-oriented pool-service site for a real Los Angeles-area client using Astro and Cloudflare, with service pages, owner-provided before/after imagery, field footage, location coverage and a quote/contact journey.”

Avoid fabricated rankings, lead outcomes, reviews or owner claims. Distinguish demonstrated features from unverified live third-party integrations.

## Run the capture

From a machine with network access to the live site and a current Python environment:

```sh
python -m pip install playwright
python -m playwright install chromium
python scripts/record_aurora_demo.py
```

For a different verified deployed hostname:

```sh
AURORA_RECORDING_URL=https://YOUR-VERIFIED-DOMAIN python scripts/record_aurora_demo.py
```

Playwright records a real browser session to `recordings/aurora/aurora-real-site-walkthrough.webm`; FFmpeg, if installed, also produces `recordings/aurora/aurora-real-site-walkthrough.mp4`.

## Before publishing

- [ ] Open the live Aurora site and confirm home, services, projects, media playback and contact page work.
- [ ] Confirm embedded form display (if enabled), **without** submitting customer information.
- [ ] Review the recorded footage for image loading, website errors, spoilers/private information and awkward scene durations.
- [ ] Embed the **actual recorded demo** in the Aurora portfolio case study with a descriptive poster and caption; preserve the existing client's site and DNS.
- [ ] After Aurora, pick the next complex app to restore in the now-free Supabase slot and record an actual functional demo.

This checklist intentionally changes no Aurora deployment, CRM, analytics, GitHub permissions, or production code.
