# Angel Gonzalez — Product-Minded Full-Stack Developer

Portfolio for Angel Gonzalez, a product-minded full-stack developer building AI-enabled
web and mobile products from concept through deployment.

## Selected work

- **Raidio** — shared-listening AI radio network and station studio
- **Snapdex** — photo trading-card economy with packs, trading, burning, and arena play
- **Jump Trainer** — mobile vertical-jump measurement and coaching product
- **Edit Battle** — asynchronous editing competitions, voting, rankings, and crowns
- **Civic Mirror** — bilingual ballot explanations and voter-priority alignment
- **Co-Lab** — anonymous collaborative idea graph with AI routing and evolution
- **SkateView** — privacy-aware community map for street skate spots
- **Living Window** — persistent ambient village and digital art experience

Each project has a concise, evidence-based case study covering the product opportunity,
what was built, the main product or technical challenge, current functionality, important
decisions, and honest next steps.

## Portfolio architecture

- Next.js App Router with static generation
- Project content stored in `app/data/portfolio.ts`
- Homepage hierarchy controlled by each project's `featured` flag
- Optional project demo-video fields stored alongside each project
- Scroll-scene media configuration stored in `app/data/scroll-scenes.ts`
- Fixed, section-aware background stage in `app/components/ScrollSceneStage.tsx`
- Lightweight streak-field fallback for the hero until motion footage is added
- Responsive, accessible editorial layout
- Local product captures optimized by `next/image`
- Static project routes under `/work/[slug]`
- Structured resume at `/resume` with a direct ATS-friendly PDF download
- Open Graph metadata, JSON-LD, sitemap, robots, and favicon
- No runtime dependency on GitHub, Supabase, or a CMS

## Adding Higgsfield motion

The homepage is ready for section-based motion backgrounds without a layout rewrite:

1. Export a lightweight WebM and MP4 fallback from Higgsfield, plus a still poster.
2. Place the files under `public/motion`.
3. Add their paths to the matching scene in `app/data/scroll-scenes.ts`.

The stage crossfades media as `data-scene` sections reach the reading position. It also
tracks overall scroll progress for depth effects, avoids loading video for reduced-motion
visitors, and keeps all text and product screenshots in the normal document flow.

ADGO Studios is linked from the Ventures section at `https://adgostudios.com/`.

## Adding product demo videos

Product videos are optional and do not create empty public sections. To add a future TikTok
or walkthrough clip:

1. Export a web-ready MP4 or WebM, an optional poster image, and an optional WebVTT caption file.
2. Place the files under `public/demos`.
3. Add a `demoVideo` object to the matching project in `app/data/portfolio.ts`:

```ts
demoVideo: {
  src: "/demos/raidio.mp4",
  poster: "/demos/raidio-poster.jpg",
  captions: "/demos/raidio-en.vtt",
  caption: "A short guided walkthrough of Raidio's station and playback flow.",
  orientation: "portrait",
},
```

The case-study page renders the video only when this data exists. Set `featured: true` on
the projects that should receive the large homepage treatment; the rest automatically remain
in the compact product library.

## Development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
npm run lint
```

Regenerate the downloadable resume after editing `scripts/generate_resume_pdf.py`:

```bash
python scripts/generate_resume_pdf.py public/angel-gonzalez-resume.pdf
```

The script uses ReportLab and keeps the PDF to one ATS-friendly letter-size page.

## Content principles

The portfolio intentionally avoids invented traction, users, revenue, testimonials,
funding, or performance claims. Product status and unavailable demos are labeled directly.

## Deployment

The site is deployed through the existing Vercel project connected to this repository.
