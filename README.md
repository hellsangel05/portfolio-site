# Angel Gonzalez — websites, applications & AI workflows

[**Portfolio**](https://portfolio-site-green-xi.vercel.app) · [**AI & Automation**](https://portfolio-site-green-xi.vercel.app/ai-automation) · [**Creative AI**](https://portfolio-site-green-xi.vercel.app/creative-ai) · [**Résumé**](https://portfolio-site-green-xi.vercel.app/resume) · [**Contact**](mailto:gonzalezangel0510@yahoo.com)

I'm a Los Angeles–area builder working across web development, AI-assisted software, automation, and creative tools. I co-founded ADGO Studios to build websites and practical digital workflows for businesses, alongside independent apps and an original publishing platform.

## Specialized experience

- **Paid media:** Launched a Facebook and Instagram advertising campaign in Meta Ads Manager for ADGO Studios, including targeting, ad creative, and campaign setup.
- **Marketing automation:** GoHighLevel CRM, website forms, automated acknowledgments, calendar bookings, AI receptionist Luna, Meta Pixel setup and landing pages.
- **Creative AI:** Automated Higgsfield ad production workflow for ADGO, AI creative concepting, ad variations, ElevenLabs and Suno experiments, short-form videos and the PSYCH! project.
- **Technical work:** Next.js, Astro, TypeScript, React, Cloudflare, Vercel, Supabase, GitHub, client-site delivery and debugging.

## PSYCH! animated episode

The Creative AI portfolio features **PSYCH! Episode 1 — Eternity**, an original animated episode released on the creator's [YouTube](https://www.youtube.com/@thepsychuniverse/videos) and [TikTok](https://www.tiktok.com/@thepsychuniverse) channels. Its source text is also available on the [PSYCH! reading platform](https://psych-open-source.vercel.app/read/season-1/eternity). The Creative AI portfolio embeds the [official Episode 1 animation](https://www.youtube.com/watch?v=vXAPT-oGbkA) using YouTube's privacy-enhanced player and provides a direct video fallback.

## Featured creative examples

The [Creative AI page](https://portfolio-site-green-xi.vercel.app/creative-ai) includes our public ADGO showreel and four October 2026 ADGO commercial concepts: The Build (motion graphics), Handmade Clay (clay animation), Mijo Chat (text-message comedy), and The Infomercial (retro commercial featuring the Luna AI receptionist). Portfolio-ready H.264/AAC exports and posters are hosted under `public/media/adgo/`, with native HTML video controls and direct MP4 links. Original high-resolution masters remain in the ADGO Google Drive. The commercials feature fictional businesses.

[**Complete project directory**](PROJECTS.md) · [**Automated demo recording guide**](docs/demo-capture.md)

## Selected projects

| Project | Live site | Case study | Notes |
| --- | --- | --- | --- |
| Aurora Pool & Spa | [Client site](https://aurora-pool-spa.adgostudios.workers.dev) | [View](https://portfolio-site-green-xi.vercel.app/work/aurora-pool-spa) | One example of our ADGO Studios client work; source is in the private ADGO Studios organization repo |
| ADGO Studios | [Website](https://adgostudios.com) | [View](https://portfolio-site-green-xi.vercel.app/work/adgo-studios) | Web, CRM and voice-agent projects; code is held across collaborator repositories |
| PSYCH! Open Source | [Website](https://psych-open-source.vercel.app) | [View](https://portfolio-site-green-xi.vercel.app/work/psych-open-source) | Original fiction world and spoiler-aware reading platform |
| Raidio | [Website](https://raidio-ten.vercel.app) | [View](https://portfolio-site-green-xi.vercel.app/work/raidio) | AI-powered audio and shared playback |
| Snapdex | [Website](https://trading-card-app-two.vercel.app) | [View](https://portfolio-site-green-xi.vercel.app/work/snapdex) | Photo trading-card application |
| Jump Trainer | [Website](https://apogee-web-three.vercel.app) | [View](https://portfolio-site-green-xi.vercel.app/work/jump-trainer) | Video analysis and training |
| Edit Battle | [Website](https://edit-battle.vercel.app) | [View](https://portfolio-site-green-xi.vercel.app/work/edit-battle) | Creative editing competitions |
| Civic Mirror | [Website](https://web-tau-drab-10.vercel.app) | [View](https://portfolio-site-green-xi.vercel.app/work/civic-mirror) | [Public repository](https://github.com/hellsangel05/civic-mirror) |
| Co-Lab | [Website](https://colab-orpin.vercel.app) | [View](https://portfolio-site-green-xi.vercel.app/work/co-lab) | Collaborative idea network |
| SkateView | [Website](https://skateview-app.vercel.app) | [View](https://portfolio-site-green-xi.vercel.app/work/skateview) | Community skate spot mapping |
| Living Window | [Website](https://living-window-app-orcin.vercel.app) | [View](https://portfolio-site-green-xi.vercel.app/work/living-window) | Persistent generative art |

**About the code:** Most app repositories already exist under my GitHub account, but they are private. Aurora is held in the ADGO Studios account, and some business work is in collaborator repositories. I don't publish client source code, unreleased IP, or credentials without review and permission. A website link is not a guarantee that its optional database-backed features are available at every moment.

## This portfolio's source code

This repository is public. It is a Next.js App Router project with static project routes, typed case-study content, responsive styling, metadata, a résumé page and a downloadable PDF.

- [Homepage](app/page.tsx)
- [Case studies and project data](app/data/portfolio.ts)
- [Case-study page](app/work/%5Bslug%5D/page.tsx)
- [Site styles](app/globals.css)
- [Résumé generator](scripts/generate_resume_pdf.py)

### Run locally

```bash
npm install
npm run dev
```

For a production check, run `npm run build` and `npm run lint`.

This repository intentionally contains no private API keys or client credentials. Project descriptions distinguish what was built from traction or results; they do not invent user counts, revenue, or testimonials.
