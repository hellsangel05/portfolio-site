export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  status: string;
  positioning: string;
  summary: string;
  problem: string;
  built: string;
  challenge: string;
  working: string[];
  decisions: string[];
  next: string[];
  role: string;
  tech: string[];
  image?: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  live?: string;
  github?: string;
  demoNote?: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "raidio",
    name: "Raidio",
    category: "AI media platform",
    status: "Pre-launch · Active development",
    positioning: "A shared-listening radio network where AI makes the music and hosts the show.",
    summary: "Raidio combines generative music with programmed stations. Every listener joins the same wall-clock playhead while station owners shape the sound, host, and live rundown.",
    problem: "Most generative-music experiences end at the generated track. Raidio explores the product layer that makes music feel like a broadcast: continuity, programming, hosts, discovery, and a moment listeners can share.",
    built: "A Next.js radio network and station studio with generated music and lyrics, voice hosts, catalog management, published rundowns, libraries, credits, and production billing seams.",
    challenge: "The central technical problem is continuity. Owners need to publish a new rundown without interrupting the song already on air, and every listener needs to resolve the same station, track, and offset from wall-clock time.",
    working: [
      "Station creation with a defined sound, artwork, and host",
      "Independent song generation so one failed track does not erase a station",
      "Drag-and-drop rundown editing with private drafts and published revisions",
      "Synchronized playback, host breaks, previews, likes, and libraries",
    ],
    decisions: [
      "Save the station shell before generating the opening set, making the workflow resilient to partial failures.",
      "Keep the playhead deterministic and let tuned-in clients adopt catalog revisions automatically.",
      "Support local and hosted music providers so development cost and production deployment can be managed separately.",
    ],
    next: [
      "Deepen personalization without losing the feeling of a shared broadcast.",
      "Explore call-ins, community stations, and in-car listening concepts.",
      "Continue refining music-generation cost controls and station-owner workflows.",
    ],
    role: "Co-founder · Product direction, experience design, full-stack build, AI workflow integration",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "AI music", "ElevenLabs", "Stripe", "Vercel"],
    image: { src: "/projects/raidio-home.png", alt: "Raidio browse experience with a large station-creation hero and station artwork" },
    gallery: [
      { src: "/projects/raidio-station.png", alt: "Raidio Night Drive FM live station player and recently played list" },
    ],
    live: "https://raidio-ten.vercel.app",
  },
  {
    slug: "snapdex",
    name: "Snapdex",
    category: "Creator economy + game",
    status: "Pre-launch · Functional prototype",
    positioning: "A photo trading-card economy built around scarcity, collecting, and play.",
    summary: "Users turn their own photos into cards, roll rarity, release copies into packs, trade or sell them, burn supply to promote a tier, and field three-card decks in an arena.",
    problem: "Photo platforms are built around posts and attention. Snapdex asks what happens when a photo becomes a scarce object with supply, ownership, creator royalties, and game mechanics.",
    built: "A full-stack Next.js application with authentication, uploads, 12 rarity tiers, capped supplies, packs, collections, trades, a gem marketplace, burn mechanics, creator royalties, and a deterministic 3v3 arena.",
    challenge: "One physical card copy can participate in several high-stakes flows. The difficult part was maintaining copy-state integrity across listings, offers, burns, packs, and arena enlistment without allowing conflicting ownership states.",
    working: [
      "Photo upload, rarity roll, rerolls, publishing, and collections",
      "Daily and paid pack logic with tier guarantees",
      "Multi-copy listings, trading, price history, fees, and royalties",
      "Burn-to-promote supply mechanics and deterministic arena battles",
    ],
    decisions: [
      "Put ownership-changing actions behind atomic database functions instead of multi-step client writes.",
      "Keep real-money purchase plumbing dormant while the gem economy and product loop are still being tuned.",
      "Make card and profile pages public so the product has a share loop beyond authenticated users.",
    ],
    next: [
      "Add image moderation before opening user uploads broadly.",
      "Playtest the economy and tune pack, burn, and listing incentives.",
      "Refine the arena into a clear repeatable competition loop.",
    ],
    role: "Co-founder · Product systems, UX, full-stack build, economy design",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Storage", "Stripe", "Vercel"],
    image: { src: "/projects/snapdex-feed.png", alt: "Snapdex mobile prototype showing burn events, rarity tiers, cards, and navigation" },
    gallery: [
      { src: "/projects/snapdex-prototype.png", alt: "Snapdex mobile onboarding prototype" },
    ],
    live: "https://trading-card-app-two.vercel.app",
  },
  {
    slug: "jump-trainer",
    name: "Jump Trainer",
    category: "AI coaching + computer vision",
    status: "Functional prototype · Validation phase",
    positioning: "A mobile vertical-jump coach that turns ordinary phone video into an honest measurement and training plan.",
    summary: "Jump Trainer measures takeoff and landing from video, calculates jump height from flight-time physics, scores confidence, identifies the largest technique limiter, and produces a four-week plan.",
    problem: "Athletes can film themselves easily, but credible jump measurement usually requires specialized equipment or a trained coach. Low-quality video can also create a precise-looking number that is simply wrong.",
    built: "An Expo mobile application, a Python analysis engine and service, a rule-based training-plan engine, a Supabase-backed analysis queue, progress tracking, and a validation harness for event timing and measurement quality.",
    challenge: "The product needs reliable event times, not impressive-looking pose overlays. The engine detects per-foot takeoff and landing, checks whether the hip path is physically plausible, reports uncertainty, and rejects clips it cannot measure responsibly.",
    working: [
      "Demo analysis flow from onboarding through result and training plan",
      "Flight-time measurement, event refinement, confidence, and measurement ranges",
      "Synthetic evaluation coverage for jump types, frame rates, and distractor clips",
      "Workout logging, progress, personal records, and cloud-ready job infrastructure",
    ],
    decisions: [
      "Use flight-time physics so the core height measurement does not need a calibration object.",
      "Return unknown instead of guessing, and attach confidence and a range to every height result.",
      "Version measurement algorithms so history is never silently rewritten after an engine update.",
    ],
    next: [
      "Run the documented field-validation protocol on a diverse real-world video corpus.",
      "Deploy and harden the video-analysis worker for live mobile testing.",
      "Iterate on coaching language after observing athletes use the full loop unaided.",
    ],
    role: "Co-founder · Product strategy, mobile UX, analysis-system design, full-stack build",
    tech: ["Expo", "React Native", "TypeScript", "Python", "NumPy", "MediaPipe", "FastAPI", "Supabase"],
    image: { src: "/projects/jump-trainer-result.png", alt: "Jump Trainer result showing measured height, confidence, technique scores, and coaching feedback" },
    gallery: [
      { src: "/projects/jump-trainer-analyze.png", alt: "Jump Trainer recording setup and sample analysis options" },
    ],
  },
  {
    slug: "edit-battle",
    name: "Edit Battle",
    category: "Creator community",
    status: "Pre-launch · Functional build",
    positioning: "An asynchronous competition platform where editors answer challenges, earn votes, and compete for the crown.",
    summary: "Editors respond to song-and-source challenges with YouTube or TikTok edits. The community votes, a reigning winner holds the crown, and profiles track each editor’s work and wins.",
    problem: "Editing communities already create challenges and standout work, but the activity is scattered across feeds, comments, and short-lived posts. There is no durable place to organize demand, compare entries, or recognize the current champion.",
    built: "A Next.js community platform with challenge feeds, daily battles, link-out submissions, voting, crown history, editor profiles, rankings, search, tag catalogs, moderation, and dynamic social cards.",
    challenge: "The platform has to organize external media without becoming a video host. YouTube and TikTok submissions need durable metadata, safe lifecycle states, reliable vote counts, and a crown system that preserves the history of every reign.",
    working: [
      "Challenge creation, ranked feeds, submissions, voting, and king-of-the-hill crowns",
      "Daily Battle rotation, editor leaderboard, profiles, search, and topic catalogs",
      "YouTube and TikTok embed normalization with graceful link-card fallbacks",
      "Admin moderation, reporting, optimistic voting, and shareable Open Graph cards",
    ],
    decisions: [
      "Keep videos on their original platforms and make Edit Battle the challenge, voting, and ranking layer.",
      "Model crowns as a reign history and route crowning through one atomic database function.",
      "Leave monetization feature-flagged and dormant until the community loop is validated.",
    ],
    next: [
      "Run a controlled launch with a small group of editors and challenge hosts.",
      "Tune moderation and anti-brigading rules around real voting behavior.",
      "Measure whether Daily Battle and crown progression create a repeatable return loop.",
    ],
    role: "Co-founder · Product systems, community UX, full-stack build, competition design",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Row Level Security", "Vercel"],
    gallery: [],
  },
  {
    slug: "civic-mirror",
    name: "Civic Mirror",
    category: "Civic technology",
    status: "Functional prototype · Active development",
    positioning: "A bilingual LA County ballot guide that connects voter priorities to plain-language measure explanations.",
    summary: "A short priorities quiz organizes local measures around what a voter cares about, then explains the likely alignment, tradeoffs, and source-backed reasoning in English or Spanish.",
    problem: "Local ballot measures are consequential but difficult to compare. Dense legal language, long pamphlets, and scattered arguments make it hard for voters to understand what a yes or no vote would actually do.",
    built: "A bilingual Next.js voter experience with a priorities quiz, ballot overview, measure pages, shareable summaries, and an admin review surface, plus a separate Claude ingestion pipeline that produces structured, cited drafts from pamphlet text.",
    challenge: "The difficult part is using model-generated extraction without presenting uncertain information as fact. English and Spanish need equal treatment, every material claim needs source support, and alignment scores need to explain their reasoning without telling someone how to vote.",
    working: [
      "English and Spanish voter routes, priority selection, ballot views, and measure detail pages",
      "Confidence-weighted alignment scoring with the strongest contributing topics exposed",
      "Schema-validated ingestion for summaries, fiscal impact, arguments, funding, and citations",
      "Admin review and Supabase upsert flows for structured measure content",
    ],
    decisions: [
      "Treat model output as a reviewable structured draft and require source citations for published claims.",
      "Exclude vague supporter or opponent labels and preserve uncertainty in approximate funding figures.",
      "Show qualitative alignment with an explanation instead of exposing a raw score as a recommendation.",
    ],
    next: [
      "Validate extraction against verbatim LA County Registrar pamphlet content.",
      "Complete native-speaker review and accessibility testing for both languages.",
      "Tune alignment thresholds with real measures before preparing a public ballot dataset.",
    ],
    role: "Co-founder · Product strategy, civic UX, full-stack build, information-design system",
    tech: ["Next.js", "React", "TypeScript", "next-intl", "Supabase", "PostgreSQL", "Claude", "Zod", "Vercel"],
    gallery: [],
    github: "https://github.com/hellsangel05/civic-mirror",
  },
  {
    slug: "co-lab",
    name: "Co-Lab",
    category: "AI collaboration network",
    status: "Pre-launch · Functional build",
    positioning: "An anonymous idea network where AI routes, connects, and helps promising thoughts evolve.",
    summary: "A user drops one sharp thought. Co-Lab routes it to the right lab, embeds it into a semantic graph, opens a live thread, and lets people or the network’s AI Muse build on it.",
    problem: "Good ideas are often posted into feeds that reward immediacy, then disappear. Co-Lab is designed around relationships and evolution: what an idea connects to, how others extend it, and when it should resurface.",
    built: "A Next.js PWA with anonymous contribution, nine labs, semantic discovery, a living idea graph, replies, votes, project rooms, visit summaries, scoring, and a scheduled AI evolution cycle.",
    challenge: "The AI layer has to improve the network without flooding it. Classification, embeddings, relationship labels, Muse replies, resurfacing, and quiet-lab seeding all need quality controls and explicit cost limits.",
    working: [
      "Anonymous thought routing into nine topic labs",
      "Embeddings and typed nearest-neighbor relationships",
      "Discover, graph, node, room, profile, and contribution flows",
      "Scheduled evolution, Muse replies, streaks, and Spark scoring",
    ],
    decisions: [
      "Batch relationship classification into one completion per node instead of one call per edge.",
      "Separate trigger cadence from the real evolution interval so scheduled checks do not become the cost driver.",
      "Keep monetization dormant until the contribution and retention loops are worth paying for.",
    ],
    next: [
      "Run a small controlled beta focused on idea quality and network behavior.",
      "Tune moderation, ranking, and Muse intervention thresholds.",
      "Prepare the database-backed experience for a controlled beta.",
    ],
    role: "Co-founder · Product strategy, interaction design, full-stack build, AI system design",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "OpenAI", "Vector search", "React Flow"],
    image: { src: "/projects/colab-home.png", alt: "Co-Lab homepage with anonymous idea input, routing explanation, and live lab navigation" },
    gallery: [],
  },
  {
    slug: "skateview",
    name: "SkateView",
    category: "Community mapping",
    status: "Functional prototype · Mock demo",
    positioning: "A privacy-aware street-spot map built around current conditions, risk, and freshness.",
    summary: "SkateView lets skaters scout a city, submit spots with photos, report security or surface changes, build a session line, and protect low-key locations with approximate public coordinates.",
    problem: "A skate spot can change overnight. Traditional maps do not capture whether a place still rolls, how risky it is, or whether sharing an exact pin could damage the spot.",
    built: "A mobile-first map with viewport-bounded spot loading, filters, submission and photo compression, moderation, freshness confirmations, reports, saved spots, local progression, missions, and share cards.",
    challenge: "The privacy model matters as much as the map. Low-key spots need useful public placement without sending exact coordinates to the client, while moderation and freshness signals have to stay understandable.",
    working: [
      "End-to-end mock loop for browsing, submission, moderation, and freshness",
      "Status and risk pins, filters, spot deck, and three-stop session lines",
      "Deterministically shifted public pins for low-key locations",
      "Local XP, levels, streaks, missions, saves, and submission history",
    ],
    decisions: [
      "Use a repository interface so mock mode and Supabase mode share the same product surface.",
      "Keep exact low-key coordinates server-side and expose only deterministic approximate pins.",
      "Compress photos on-device and cap quantity and size before storage costs begin.",
    ],
    next: [
      "Choose a production-ready map tile provider.",
      "Exercise the Supabase write path against a live project before launch.",
      "Test contribution and moderation incentives with a small local skate community.",
    ],
    role: "Co-founder · Product design, map UX, full-stack build, privacy model",
    tech: ["Next.js", "React", "TypeScript", "Leaflet", "OpenStreetMap", "Supabase", "Vitest", "Playwright"],
    image: { src: "/projects/skateview.png", alt: "SkateView map of Los Angeles with condition pins, filters, and a scout line of skate spots" },
    gallery: [],
  },
  {
    slug: "living-window",
    name: "Living Window",
    category: "Creative technology",
    status: "Functional prototype · Active development",
    positioning: "A persistent ambient village that grows with room time, sound, and repeated visits.",
    summary: "Living Window turns a spare screen into slow digital art. A seeded village follows local light, responds to the room, remembers visits, and can unfold in real time or accelerated story modes.",
    problem: "Most screen experiences demand attention. Living Window explores the opposite: software that creates calm presence, rewards return visits, and can eventually live as a dedicated physical object.",
    built: "A deterministic world simulation with two interchangeable art engines, local persistence, sound-reactive signals, seasonal atmosphere, multiple time scales, gallery mode, recovery-safe saves, and curator tools.",
    challenge: "The saved village has to remain recognizable when the renderer changes. Simulation, scene projection, and art engines are separated so a WebGL renderer and a Canvas fallback can share one world state.",
    working: [
      "PixiJS Lantern Theatre and Canvas2D Classic Village renderers",
      "Still, Room, Story, and Dream time scales",
      "Optional microphone input reduced to loudness and acoustic events",
      "Persistent world, sound memory, settings, gallery mode, and curator tools",
    ],
    decisions: [
      "Keep world simulation engine-neutral so visual direction can evolve without resetting history.",
      "Process room audio locally without speech recognition, recording, storage, or transmission.",
      "Pause accelerated clocks when the tab is hidden so unseen time is never skipped.",
    ],
    next: [
      "Deepen village behavior, seasonal change, and long-term memory.",
      "Explore a dedicated always-on physical display.",
      "Continue performance and accessibility work across both renderers.",
    ],
    role: "Co-founder · Product concept, interaction design, simulation architecture, full-stack build",
    tech: ["Next.js", "React", "TypeScript", "PixiJS", "Canvas2D", "Web Audio", "Local storage", "Vitest"],
    image: { src: "/projects/living-window-scene.png", alt: "Living Window paper-theatre village scene at dusk with villagers and animated atmosphere" },
    gallery: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
