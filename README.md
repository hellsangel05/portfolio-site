# Angel Gonzalez — AI Product Builder

Portfolio for Angel Gonzalez: an AI product builder who turns ambitious ideas into
functional, deployed applications across AI, media, community, sports, and creative
technology.

## Featured work

- **Raidio** — shared-listening AI radio network and station studio
- **Snapdex** — photo trading-card economy with packs, trading, burning, and arena play
- **Apogee** — mobile vertical-jump measurement and coaching product
- **Co-Lab** — anonymous collaborative idea graph with AI routing and evolution
- **SkateView** — privacy-aware community map for street skate spots
- **Living Window** — persistent ambient village and digital art experience

Each project has a concise, evidence-based case study covering the product opportunity,
what was built, the main product or technical challenge, current functionality, important
decisions, and honest next steps.

## Portfolio architecture

- Next.js App Router with static generation
- Project content stored in `app/data/portfolio.ts`
- Responsive, accessible editorial layout
- Local product captures optimized by `next/image`
- Static project routes under `/work/[slug]`
- Structured resume at `/resume` with print-to-PDF styling
- Open Graph metadata, JSON-LD, sitemap, robots, and favicon
- No runtime dependency on GitHub, Supabase, or a CMS

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
