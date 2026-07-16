# Angel Gonzalez — AI Product Builder

Portfolio for Angel Gonzalez, an AI product builder working across media, creator tools,
sports technology, community platforms, and automation.

## Selected work

- **Raidio** — shared-listening AI radio network and station studio
- **Snapdex** — photo trading-card economy with packs, trading, burning, and arena play
- **Jump Trainer** — mobile vertical-jump measurement and coaching product
- **Co-Lab** — anonymous collaborative idea graph with AI routing and evolution
- **SkateView** — privacy-aware community map for street skate spots
- **Living Window** — persistent ambient village and digital art experience

Each project has a concise, evidence-based case study covering the product opportunity,
what was built, the main product or technical challenge, current functionality, important
decisions, and honest next steps.

## Portfolio architecture

- Next.js App Router with static generation
- Project content stored in `app/data/portfolio.ts`
- Scroll-scene media configuration stored in `app/data/scroll-scenes.ts`
- Fixed, section-aware background stage in `app/components/ScrollSceneStage.tsx`
- Responsive, accessible editorial layout
- Local product captures optimized by `next/image`
- Static project routes under `/work/[slug]`
- Structured resume at `/resume` with print-to-PDF styling
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

## Content principles

The portfolio intentionally avoids invented traction, users, revenue, testimonials,
funding, or performance claims. Product status and unavailable demos are labeled directly.

## Deployment

The site is deployed through the existing Vercel project connected to this repository.
