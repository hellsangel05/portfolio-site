export type Film = {
  title: string;
  /** Short format label, e.g. "Product film" or "Vertical social spot". */
  format: string;
  runtime?: string;
  description: string;
  orientation: "portrait" | "landscape";
  src?: string;
  poster?: string;
  /** YouTube video ID, embedded with the privacy-enhanced player instead of `src`. */
  youtube?: string;
};

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  status: string;
  /** Accent color used for this project's case study and cover. */
  accent: string;
  featured?: boolean;
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
  image: { src: string; alt: string };
  film: Film;
  films?: Film[];
  live?: string;
  github?: string;
};

const CDN = "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/";

export const projects: PortfolioProject[] = [
  {
    slug: "aurora-pool-spa",
    name: "Aurora Pool & Spa",
    category: "Client website · ADGO Studios",
    status: "Client review",
    accent: "#7fd3df",
    featured: true,
    positioning: "A service website for a Los Angeles pool company, built to make information and quote requests easier to find.",
    summary: "A custom website for a Los Angeles pool service company, with service-specific pages, local coverage information, optimized photography, and clear ways to request a quote.",
    problem: "A pool service company needs to clearly explain its services, service area, and contact options without relying only on referrals and social media.",
    built: "An Astro-based website with responsive service pages, real client photography, location coverage, optimized media, on-page SEO, and CRM form integration.",
    challenge: "Organizing detailed services, service areas, photography, and contact options into a clear, fast-loading site for residential customers.",
    working: [
      "Mobile-friendly pages for services and contact",
      "Optimized media, descriptive metadata, and internal links",
      "Call and text links with a contact workflow",
      "CRM form integration and scheduling",
      "Short-form video built from the client's own job photography",
    ],
    decisions: [
      "Used Astro and static hosting to keep running costs down.",
      "Built service copy around verified business details and approved photography.",
      "Separated website content from CRM setup to make future updates easier.",
    ],
    next: [
      "Complete client review and final content updates.",
      "Verify the live contact workflow and production domain.",
      "Set up search indexing and analytics after launch.",
    ],
    role: "ADGO Studios client work · Discovery, responsive website, content integration, video, local SEO structure, CRM integration, and deployment",
    tech: ["Astro", "TypeScript", "CSS", "Cloudflare", "GoHighLevel", "SEO"],
    image: { src: "/projects/covers/aurora-pool-spa.jpg", alt: "Aurora Pool & Spa homepage on desktop and mobile" },
    film: {
      title: "Website walkthrough",
      format: "Product film",
      runtime: "0:44",
      description: "A narrated tour of the redesigned site: service pages, coverage areas, before-and-after photography, and the quote request.",
      orientation: "landscape",
      src: CDN + "153a8f69-0a3c-488f-80a9-8ad9253fa944.mp4",
      poster: CDN + "54885559-b979-42a3-b2a0-7fdee04c71c2.jpg",
    },
    films: [
      {
        title: "Aurora's own work",
        format: "Brand film",
        runtime: "0:36",
        description: "Cut entirely from the company's own job-site photos and before-and-after shots, with no stock imagery.",
        orientation: "landscape",
        src: CDN + "a71f956e-56d9-4008-a9a9-2e96a44e1f69.mp4",
        poster: CDN + "1068c2e3-1554-44ae-802e-12ab5ff43ea1.jpg",
      },
    ],
    live: "https://aurora-pool-spa.adgostudios.workers.dev",
  },
  {
    slug: "adgo-studios",
    name: "ADGO Studios",
    category: "Websites and automation",
    status: "Active studio",
    accent: "#6f9bff",
    featured: true,
    positioning: "Web design and connected customer-inquiry workflows for local businesses.",
    summary: "Co-founded ADGO Studios and built its website, CRM workflows, Luna AI phone receptionist, paid Meta advertising, and short-form video creative.",
    problem: "A small business can have a website, phone number, ads, and a CRM without having a clear path from the first inquiry to the next step.",
    built: "A public studio website, CRM lead workflows, appointment booking, Luna AI voice reception, Meta Ads campaign setup, and creative production with Higgsfield, ElevenLabs, and HyperFrames.",
    challenge: "Getting the pieces to work together in ways that are practical for business owners, from an inquiry form to a booked call or human follow-up.",
    working: [
      "Public business website and service pages",
      "CRM account configuration and lead intake workflows",
      "AI voice receptionist that responds to questions and helps book calls",
      "Business outreach and client discovery in English and Spanish",
    ],
    decisions: [
      "Structured digital services around lead capture, response time, and clear customer actions.",
      "Configured CRM automation and Voice AI around practical lead intake and appointment scheduling requirements.",
      "Designed human follow-up options alongside automated response and scheduling.",
    ],
    next: [
      "Keep refining the contact and follow-up experience.",
      "Document results from client deployments.",
      "Develop clearer onboarding and maintenance processes.",
    ],
    role: "Co-founder · Website development, CRM and AI automation, paid advertising, creative production, client discovery, and testing",
    tech: ["Next.js", "Vercel", "Cloudflare", "GoHighLevel", "Voice AI", "Web forms", "Automation", "Meta Ads Manager", "Higgsfield", "ElevenLabs"],
    image: { src: "/projects/covers/adgo-studios.jpg", alt: "ADGO Studios homepage on desktop and mobile" },
    film: {
      title: "Studio showreel",
      format: "Brand film",
      runtime: "0:56",
      description: "Websites, short-form content, AI phone reception, and paid ads: the full ADGO offer in under a minute.",
      orientation: "landscape",
      src: CDN + "845ec165-f8f1-411d-a48f-00754ac963f6.mp4",
      poster: "/media/posters/adgo-showreel.jpg",
    },
    films: [
      {
        title: "Not just another website",
        format: "Vertical brand spot",
        runtime: "0:38",
        description: "A mobile-first spot built around a real client launch, from the custom site to lead capture and follow-up.",
        orientation: "portrait",
        src: CDN + "44e2fbd0-c697-4b88-9fc4-d5e4c2ea0f68.mp4",
        poster: CDN + "1795e8d3-ae7e-4e5a-9c87-fd89ae520761.jpg",
      },
    ],
    live: "https://adgostudios.com/",
  },
  {
    slug: "psych-open-source",
    name: "PSYCH! Open Source",
    category: "Original sci-fi universe · Interactive publishing",
    status: "Ongoing series & platform",
    accent: "#eb8b80",
    featured: true,
    positioning: "An original science-fiction universe told through episodes, animation, character dossiers, and a spoiler-aware reading platform.",
    summary: "Created the PSYCH! original sci-fi universe, its animated first episode, and a custom platform for reading episodes, exploring character dossiers, and following the story's chronology.",
    problem: "An interconnected story becomes difficult to follow when the episodes, historical references, and timeline are scattered across documents.",
    built: "A narrative universe with character-led episodes, an animated first episode, and a Next.js publishing site: episode routes, concept art, historical-reference archive, chronology, reading progress, and spoiler-aware content backed by local state and Supabase.",
    challenge: "Designing a system that can expose useful context without accidentally revealing later story developments, while clearly separating fiction from real historical sources.",
    working: [
      "Episode and season reading pages",
      "Concept art collections, reference archive, and timeline",
      "Reader progress and spoiler-aware display",
      "Supabase content tables and access rules",
    ],
    decisions: [
      "Organized episodes and reference material as a consistent content structure.",
      "Separated story canon from documented historical details.",
      "Linked spoiler visibility to each reader's episode progress.",
    ],
    next: [
      "Expand reader features as the story grows.",
      "Improve publishing and contributor workflows.",
      "Continue testing the reader experience.",
    ],
    role: "Creator · Original writing, worldbuilding, creative direction, AI-assisted animation, product design, full-stack implementation, and testing",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Content systems", "Creative direction", "AI video production"],
    image: { src: "/projects/covers/psych-open-source.jpg", alt: "PSYCH! concept art archive showing character collections" },
    film: {
      title: "Episode 1: Eternity",
      format: "Animated episode",
      description: "The first animated episode of the series, released on the PSYCH! YouTube and TikTok channels.",
      orientation: "landscape",
      youtube: "vXAPT-oGbkA",
    },
    films: [
      {
        title: "The experiment",
        format: "Story trailer",
        runtime: "0:52",
        description: "1947: a classified experiment, a blast, and the people who come out of it changed. An introduction to the cast and their abilities.",
        orientation: "landscape",
        src: CDN + "87cbdaf4-668f-431a-b65b-d8cbd2354154.mp4",
        poster: CDN + "c49d989e-11ce-4a51-9f68-4f6737234177.jpg",
      },
      {
        title: "Platform tour",
        format: "Product film",
        runtime: "0:58",
        description: "The reading site: files read in order, a reference archive, a chronology, and spoiler protection tied to reader progress.",
        orientation: "landscape",
        src: CDN + "cc2ba568-2f37-418d-93b9-000b9de2063f.mp4",
        poster: CDN + "68130f13-4bbc-4d0a-9b27-6fd876001905.jpg",
      },
    ],
    live: "https://psych-open-source.vercel.app",
  },
  {
    slug: "raidio",
    name: "Raidio",
    category: "AI media platform",
    status: "Built · Pre-launch",
    accent: "#ff8a5c",
    featured: true,
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
    image: { src: "/projects/covers/raidio.jpg", alt: "Raidio station page for California Drive Time on desktop and mobile" },
    film: {
      title: "Product walkthrough",
      format: "Product film",
      runtime: "1:00",
      description: "Browse live stations, tune in mid-song from two browsers at once, then build a new station from a prompt.",
      orientation: "landscape",
      src: CDN + "d7047a0a-53e8-4a2b-b1bc-1a92d537ad3b.mp4",
      poster: "/media/posters/raidio-walkthrough.jpg",
    },
    films: [
      {
        title: "Own the Airwaves",
        format: "Brand film",
        runtime: "0:36",
        description: "A pitch to station owners: give it a sound, take the mic or pick an AI host, and broadcast to everyone at once.",
        orientation: "landscape",
        src: CDN + "b218557c-34cc-46ec-bc93-4e2589438ffb.mp4",
        poster: CDN + "5f451506-cc24-4d46-9413-2395f10b624a.jpg",
      },
      {
        title: "Don't Press Play",
        format: "Vertical social spot",
        runtime: "0:38",
        description: "Built around the core idea that the station is already playing: you tune in instead of starting it.",
        orientation: "portrait",
        src: CDN + "7b8ccfb0-67f7-40dd-8c07-6be9d6996b2e.mp4",
        poster: CDN + "eecf6442-0e52-4a67-8c8d-f471aff9a6f4.jpg",
      },
    ],
    live: "https://raidio-ten.vercel.app",
  },
  {
    slug: "snapdex",
    name: "Snapdex",
    category: "Creator economy · Game",
    status: "Built · Pre-launch",
    accent: "#c79bff",
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
    image: { src: "/projects/covers/snapdex.jpg", alt: "Snapdex home, explore, and market screens on mobile" },
    film: {
      title: "Collect the unexpected",
      format: "Product film",
      runtime: "0:32",
      description: "Upload a photo, open a pack, and watch the rarity reveal: the core loop from photo to card.",
      orientation: "landscape",
      src: CDN + "27de29d6-c6c4-4b6c-b4f4-0be779d5e067.mp4",
      poster: CDN + "394acc17-eb01-4ba6-a2d5-c20d66cfec98.jpg",
    },
    films: [
      {
        title: "Burn your way up",
        format: "Vertical explainer",
        runtime: "0:43",
        description: "How capped supply and burn-to-promote work: every copy burned moves the remaining cards closer to the next tier.",
        orientation: "portrait",
        src: CDN + "8530d1f8-8771-4a10-97d2-7651ab4b727d.mp4",
        poster: CDN + "c48d25c9-5a77-4031-94d7-b535c0e826b8.jpg",
      },
    ],
    live: "https://trading-card-app-two.vercel.app",
  },
  {
    slug: "jump-trainer",
    name: "Jump Trainer",
    category: "Computer vision · Sports",
    status: "Built · Pre-launch",
    accent: "#6fe3a6",
    positioning: "A vertical-jump coach that turns ordinary phone video into an honest measurement and training plan.",
    summary: "Jump Trainer measures takeoff and landing from video, calculates jump height from flight-time physics, scores confidence, and identifies the biggest technique limiter, all on the user's phone.",
    problem: "Athletes can film themselves easily, but credible jump measurement usually requires specialized equipment or a trained coach. Low-quality video can also create a precise-looking number that is simply wrong.",
    built: "A mobile-first web app that analyzes jump video entirely on the device: MediaPipe pose tracking plus the original Python physics engine, now running in the browser through Pyodide and WebAssembly. The project began as an Expo app backed by a Python analysis service; the on-device build removes the upload, the server, and the per-jump cost.",
    challenge: "The product needs reliable event times, not impressive-looking pose overlays. The engine detects per-foot takeoff and landing, checks whether the hip path is physically plausible, reports uncertainty, and rejects clips it cannot measure responsibly.",
    working: [
      "On-device analysis with MediaPipe BlazePose and a Python engine compiled to WebAssembly",
      "Flight-time measurement, event refinement, confidence, and measurement ranges",
      "Takeoff, peak, and landing frames with a coaching breakdown",
      "Synthetic evaluation coverage for jump types, frame rates, and distractor clips",
    ],
    decisions: [
      "Move analysis onto the phone so video never leaves the device and each jump costs nothing to analyze.",
      "Use flight-time physics so the core height measurement does not need a calibration object.",
      "Return unknown instead of guessing, and attach confidence and a range to every height result.",
    ],
    next: [
      "Run the documented field-validation protocol on a diverse real-world video corpus.",
      "Test on-device performance across older phones and browsers.",
      "Iterate on coaching language after observing athletes use the full loop unaided.",
    ],
    role: "Co-founder · Product strategy, mobile UX, analysis-system design, full-stack build",
    tech: ["TypeScript", "Python", "NumPy", "MediaPipe", "Pyodide", "WebAssembly", "Expo", "FastAPI"],
    image: { src: "/projects/covers/jump-trainer.jpg", alt: "Jump Trainer recording, results, and on-device analysis screens" },
    film: {
      title: "How it measures",
      format: "Product film",
      runtime: "0:54",
      description: "From phone video to jump height: pose tracking, takeoff and landing detection, and why the engine moved from a server onto the phone.",
      orientation: "landscape",
      src: CDN + "e3cb784f-1be2-4ad7-b934-091b19cfbb3b.mp4",
      poster: CDN + "17819708-91ce-49c4-9ac4-ee7c057128ee.jpg",
    },
    films: [
      {
        title: "One jump",
        format: "Product promo",
        runtime: "0:32",
        description: "Prop up the phone, film one jump, and get a height, a slow-motion replay, and what to fix.",
        orientation: "landscape",
        src: CDN + "c6f8ecd0-f22a-4cff-87c9-71783a188b12.mp4",
        poster: CDN + "20d90cfc-6a85-4d61-9459-3d7d54e74260.jpg",
      },
      {
        title: "Prove it",
        format: "Vertical social spot",
        runtime: "0:26",
        description: "A short challenge spot: hang time to the millisecond, free, and private.",
        orientation: "portrait",
        src: CDN + "c8d95a86-0efc-4244-940e-9015b39099d4.mp4",
        poster: "/media/posters/jump-trainer-vertical.jpg",
      },
    ],
    live: "https://apogee-web-three.vercel.app",
  },
  {
    slug: "edit-battle",
    name: "Edit Battle",
    category: "Creator community",
    status: "Built · Pre-launch",
    accent: "#ff5c9d",
    positioning: "An asynchronous competition platform where editors answer challenges, earn votes, and compete for the crown.",
    summary: "Editors respond to song-and-source challenges with YouTube or TikTok edits. The community votes, a reigning winner holds the crown, and profiles track each editor's work and wins.",
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
    image: { src: "/projects/covers/edit-battle.jpg", alt: "Edit Battle arena, voting, and daily battle screens on mobile" },
    film: {
      title: "Make the best edit",
      format: "Vertical product film",
      runtime: "0:30",
      description: "Pick a battle, drop an edit from TikTok or YouTube, let the community vote, and take the crown.",
      orientation: "portrait",
      src: CDN + "ab50a380-916c-480b-8674-13383296c45e.mp4",
      poster: "/media/posters/edit-battle-film.jpg",
    },
    films: [
      {
        title: "The feed",
        format: "Platform film",
        runtime: "0:24",
        description: "Scrolling the product itself: top edits, open challenges, search, and the rankings.",
        orientation: "landscape",
        src: CDN + "f2d12618-b53d-4fbe-8cb8-b14b5d0a0fbd.mp4",
        poster: CDN + "cf525874-0f7e-4e26-a495-611672737e48.jpg",
      },
    ],
    live: "https://edit-battle.vercel.app",
  },
  {
    slug: "civic-mirror",
    name: "Civic Mirror",
    category: "Civic technology",
    status: "Built · Pre-launch",
    accent: "#5fe0cf",
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
    image: { src: "/projects/covers/civic-mirror.jpg", alt: "Civic Mirror quiz and ballot screens in English and Spanish" },
    film: {
      title: "The ballot is complex",
      format: "Concept film",
      runtime: "0:34",
      description: "Why Civic Mirror exists: start with what matters to you, then see the tradeoffs and sources in English or Spanish, with no endorsements.",
      orientation: "landscape",
      src: CDN + "85a865a0-cc4d-403b-a28c-f7c9a9576ca3.mp4",
      poster: CDN + "86cf1ee9-d365-48e2-8fe8-f01fe4e5d30b.jpg",
    },
    films: [
      {
        title: "Know what you're voting for",
        format: "Vertical walkthrough",
        runtime: "0:37",
        description: "The live guide on a phone: the ten-question quiz, measures sorted by your answers, funding on both sides, and full Spanish support.",
        orientation: "portrait",
        src: CDN + "5e2e421c-9dfb-446e-ad8f-488a17bd6f42.mp4",
        poster: CDN + "022c62a2-768c-4d5e-8a7a-c3a7b10fc762.jpg",
      },
    ],
    live: "https://web-tau-drab-10.vercel.app",
    github: "https://github.com/hellsangel05/civic-mirror",
  },
  {
    slug: "co-lab",
    name: "Co-Lab",
    category: "AI collaboration network",
    status: "Built · Pre-launch",
    accent: "#a993ff",
    positioning: "An anonymous idea network where AI routes, connects, and helps promising thoughts evolve.",
    summary: "A user drops one sharp thought. Co-Lab routes it to the right lab, embeds it into a semantic graph, opens a live thread, and lets people or the network's AI Muse build on it.",
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
    image: { src: "/projects/covers/co-lab.jpg", alt: "Co-Lab idea constellation graph linking thoughts across labs" },
    film: {
      title: "Platform walkthrough",
      format: "Product film",
      runtime: "1:09",
      description: "A thought goes in, an AI classifier routes it to one of nine labs, its embedding is stored in Postgres with pgvector, and it joins the idea graph.",
      orientation: "landscape",
      src: CDN + "a6ee6c7a-ed24-4496-b5a5-d5b98708789d.mp4",
      poster: CDN + "05e04a42-7390-40aa-9352-c6b820139e70.jpg",
    },
    films: [
      {
        title: "Where ideas go",
        format: "Vertical social spot",
        runtime: "0:27",
        description: "Drop a thought, watch it connect to more than 1,600 others, and open a room around it.",
        orientation: "portrait",
        src: CDN + "d64380bd-d549-41d7-9bbe-47b6779d345a.mp4",
        poster: "/media/posters/co-lab-vertical.jpg",
      },
    ],
    live: "https://colab-orpin.vercel.app",
  },
  {
    slug: "skateview",
    name: "SkateView",
    category: "Community mapping",
    status: "Built · Pre-launch",
    accent: "#d8f25a",
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
    image: { src: "/projects/covers/skateview.jpg", alt: "SkateView spot map of Los Angeles on desktop and mobile" },
    film: {
      title: "Field film",
      format: "Brand film",
      runtime: "0:31",
      description: "Real skate footage cut with the spot map: discover spots, check conditions, and plan a line.",
      orientation: "landscape",
      src: CDN + "1ef05fe3-977c-473f-a5c1-f83eaa30622f.mp4",
      poster: CDN + "c3e9d18d-b70b-451e-aa56-63e43aa9fee9.webp",
    },
    films: [
      {
        title: "Scout before you roll",
        format: "Product story",
        runtime: "0:30",
        description: "You show up and the spot is busted. Checking freshness and conditions first, then planning a three-stop run, avoids the wasted trip.",
        orientation: "landscape",
        src: CDN + "34f4c13c-2b89-4aa3-b61a-313da21a7367.mp4",
        poster: CDN + "57fb1c80-dc87-44ca-97ab-01412f2f624e.webp",
      },
      {
        title: "Put your city on the map",
        format: "Vertical walkthrough",
        runtime: "0:34",
        description: "The phone experience: filters, spot details with the best time to skate, freshness check-ins, pin drops, and XP.",
        orientation: "portrait",
        src: CDN + "658e2fcd-3106-467e-91d7-a746913160d2.mp4",
        poster: CDN + "c52f7960-38be-4a45-86b6-6195cc4f19bb.webp",
      },
    ],
    live: "https://skateview-app.vercel.app",
  },
  {
    slug: "living-window",
    name: "Living Window",
    category: "Creative technology",
    status: "Built · Pre-launch",
    accent: "#f2c77c",
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
    image: { src: "/projects/covers/living-window.jpg", alt: "Living Window village at night with lit cottages" },
    film: {
      title: "A world that grows with your room",
      format: "Product film",
      runtime: "0:48",
      description: "A pixel village on a spare screen that follows the light, reacts to sound in the room, and remembers your visits.",
      orientation: "landscape",
      src: "/media/living-window/living-window-promo.mp4",
      poster: "/media/posters/living-window-promo.jpg",
    },
    films: [
      {
        title: "Inside the window",
        format: "Interface film",
        runtime: "0:37",
        description: "The controls behind the scene: room pulse, art direction, time scales from still to dream, and the village chronicle.",
        orientation: "landscape",
        src: "/media/living-window/living-window-smooth.mp4",
        poster: "/media/posters/living-window-smooth.jpg",
      },
    ],
    live: "https://living-window-app-orcin.vercel.app",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}

export const featuredProjects = projects.filter((project) => project.featured);
export const moreProjects = projects.filter((project) => !project.featured);
