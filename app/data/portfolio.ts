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
  featured?: boolean;
  demoAvailable?: boolean;
  demoVideo?: {
    src: string;
    poster?: string;
    captions?: string;
    caption?: string;
    orientation?: "portrait" | "landscape";
  };
  showcaseVideos?: {
    title: string;
    label: string;
    runtime: string;
    description: string;
    src: string;
    poster?: string;
    orientation: "portrait" | "landscape";
  }[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "aurora-pool-spa",
    demoVideo: {
      src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/153a8f69-0a3c-488f-80a9-8ad9253fa944.mp4",
      poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/54885559-b979-42a3-b2a0-7fdee04c71c2.jpg",
      orientation: "landscape",
      caption: "Website redesign in motion · 0:44. A narrated walkthrough of Aurora's service experience, visual presentation, and path from discovery to requesting a quote.",
    },
    showcaseVideos: [
      {
        title: "The real work behind the brand",
        label: "Client footage & photography",
        runtime: "0:36",
        description: "Aurora's own pool-service photos and on-site visuals take center stage. The film puts real work and the people behind the business in front of prospective customers, instead of relying on generic contractor imagery.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/a71f956e-56d9-4008-a9a9-2e96a44e1f69.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/1068c2e3-1554-44ae-802e-12ab5ff43ea1.jpg",
        orientation: "landscape",
      },
      {
        title: "Beyond the website",
        label: "Services, CRM & local search",
        runtime: "0:46",
        description: "The broader ADGO Studios service story: clear service pages, quote-request forms, a connected CRM, and search-friendly structure. The video explains the work around the website without claiming guaranteed search rankings or lead results.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/08a5a408-eb93-4d89-a9d7-af97abb73323.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/87723c70-d54e-406a-8c6a-a82d9d50e5c9.jpg",
        orientation: "landscape",
      },
    ],
    image: { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/54885559-b979-42a3-b2a0-7fdee04c71c2.jpg", alt: "Actual frame from Aurora website promo showing the redesigned pool-service website" },
    name: "Aurora Pool & Spa",
    category: "Client website · ADGO Studios",
    status: "Client review",
    featured: true,
    positioning: "A service website for a Los Angeles pool company, built to make information and quote requests easier to find.",
    summary: "A custom website for a Los Angeles pool service company, with service-specific pages, local coverage information, optimized photography, and clear ways to request a quote.",
    problem: "A pool service company needs to clearly explain its services, service area, and contact options without relying only on referrals and social media.",
    built: "An Astro-based website with responsive service pages, real client photography, location coverage, optimized media, on-page SEO, and CRM form integration, supported by three short videos that explain the website, showcase the business, and communicate the broader service workflow.",
    challenge: "Organizing detailed services, service areas, photography, and contact options into a clear, fast-loading site for residential customers.",
    working: [
      "Mobile-friendly pages for services and contact",
      "Optimized media, descriptive metadata, and internal links",
      "Call and text links with a contact workflow",
      "CRM form integration and scheduling",
      "Three short client-showcase and service explainer videos"
    ],
    decisions: [
      "Used Astro and static hosting to keep running costs down.",
      "Built service copy around verified business details and approved photography.",
      "Separated website content from CRM setup to make future updates easier."
    ],
    next: [
      "Complete client review and final content updates.",
      "Verify the live contact workflow and production domain.",
      "Set up search indexing and analytics after launch."
    ],
    role: "ADGO Studios client work · Discovery, responsive website, real-asset content integration, video creative, local SEO structure, CRM integration, and deployment",
    tech: [
      "Astro",
      "TypeScript",
      "CSS",
      "Cloudflare",
      "GoHighLevel",
      "SEO"
    ],
    gallery: [
      { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/1068c2e3-1554-44ae-802e-12ab5ff43ea1.jpg", alt: "Still from Aurora's real client footage promo with authentic pool-service media" },
      { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/87723c70-d54e-406a-8c6a-a82d9d50e5c9.jpg", alt: "Still from Aurora services promo highlighting quote requests and business workflows" },
    ],
    live: "https://aurora-pool-spa.adgostudios.workers.dev",
    demoAvailable: true,
    demoNote: "Client website in review; final launch and form verification are coordinated with the business.",
  },
  {
    slug: "adgo-studios",
    demoAvailable: true,
    demoVideo: {
      src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/845ec165-f8f1-411d-a48f-00754ac963f6.mp4",
      poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/bf9e873e-d99a-460f-a895-6739f1f36143.jpg",
      orientation: "landscape",
      caption: "ADGO Studios widescreen showreel · 0:56. A studio overview of web design, digital creative, and customer-facing business workflows.",
    },
    showcaseVideos: [
      {
        title: "Built for businesses that want to grow",
        label: "Widescreen studio film",
        runtime: "0:39",
        description: "A polished overview of ADGO Studios, from showcasing real website and client work to presenting lead capture and digital marketing services.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/0ae20c39-e1dd-4a33-b4d2-0e1183016dd6.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/bcaed9d9-c6d8-4f60-971a-1175c70af935.jpg",
        orientation: "landscape",
      },
      {
        title: "ADGO in your feed",
        label: "Vertical studio showreel",
        runtime: "0:56",
        description: "The mobile-first edit of the studio showreel, combining business storytelling, website projects, and service demonstrations for a social audience.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/bdf4c731-d550-49ad-8fbf-c62e16f9d0a7.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/26a9a5bb-eab5-40c7-a094-aaff9b878b84.jpg",
        orientation: "portrait",
      },
      {
        title: "Your work, front and center",
        label: "Vertical studio film",
        runtime: "0:38",
        description: "A portrait-format ADGO brand spot covering real client visuals, website presentation, and ways customers can reach a local business.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/44e2fbd0-c697-4b88-9fc4-d5e4c2ea0f68.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/1795e8d3-ae7e-4e5a-9c87-fd89ae520761.jpg",
        orientation: "portrait",
      },
    ],
    name: "ADGO Studios",
    category: "Websites and automation",
    status: "Active studio",
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
      "Business outreach and client discovery in English and Spanish"
    ],
    decisions: [
      "Structured digital services around lead capture, response time, and clear customer actions.",
      "Configured CRM automation and Voice AI around practical lead intake and appointment scheduling requirements.",
      "Designed human follow-up options alongside automated response and scheduling."
    ],
    next: [
      "Keep refining the contact and follow-up experience.",
      "Document results from client deployments.",
      "Develop clearer onboarding and maintenance processes."
    ],
    role: "Co-founder · Website development, CRM and AI automation, paid advertising, creative production, client discovery, and testing",
    tech: [
      "Next.js",
      "Vercel",
      "Cloudflare",
      "GoHighLevel",
      "Voice AI",
      "Web forms",
      "Automation",
      "Meta Ads Manager",
      "Higgsfield",
      "ElevenLabs"
    ],
    image: { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/bf9e873e-d99a-460f-a895-6739f1f36143.jpg", alt: "Frame from the ADGO Studios widescreen showreel featuring a real client website project" },
    gallery: [],
    live: "https://adgostudios.com/",
  },
  {
    slug: "psych-open-source",
    name: "PSYCH! Open Source",
    category: "Original sci-fi universe · Interactive publishing",
    status: "Ongoing series & platform",
    featured: true,
    positioning: "An original science-fiction universe told through episodes, animated trailers, character dossiers, and a spoiler-aware reading platform.",
    summary: "Created the PSYCH! original sci-fi universe, its animated promotional films, and a custom platform for reading episodes, exploring character dossiers, and following the story's chronology.",
    demoAvailable: true,
    demoVideo: {
      src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/ed8d35ca-573c-4fb1-b46d-b9112c738bf7.mp4",
      poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/70b53396-9581-46f5-bffb-6587159d11cd.jpg",
      orientation: "landscape",
      caption: "PSYCH! cinematic trailer · 0:51. An introduction to the experiment, the unsettling world, and the mystery at the center of the story.",
    },
    showcaseVideos: [
      {
        title: "The experiment changed everything.",
        label: "Story & character promo",
        runtime: "0:52",
        description: "Set in 1947, this story-focused film teases the experiment, the blast, and the people who emerge changed. The montage introduces the characters and their psychological powers without asking viewers to read the full backstory first.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/87cbdaf4-668f-431a-b65b-d8cbd2354154.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/c49d989e-11ce-4a51-9f68-4f6737234177.jpg",
        orientation: "landscape",
      },
      {
        title: "The universe is open.",
        label: "Publishing platform tour",
        runtime: "0:58",
        description: "A guided introduction to the PSYCH! website: read the original episodes, explore character files, track historical events on the timeline, and use spoiler-aware reading tools. This is the product and engineering side of the same creative universe.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/cc2ba568-2f37-418d-93b9-000b9de2063f.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/68130f13-4bbc-4d0a-9b27-6fd876001905.jpg",
        orientation: "landscape",
      },
      {
        title: "The files are open.",
        label: "PSYCH! world and archive teaser",
        runtime: "0:37",
        description: "A fast-paced introduction to the original PSYCH! universe and its digital home. Comic-style character artwork, classified case files, and a tour of the reading platform connect the story to the interactive archive.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/2f9bc068-62f3-41df-8dbd-c7cbcddb98db.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/75563109-489e-4847-bed8-9047cc166ecc.jpg",
        orientation: "landscape",
      },
    ],
    image: { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/70b53396-9581-46f5-bffb-6587159d11cd.jpg", alt: "Actual film frame from PSYCH! cinematic trailer showing the original story artwork" },
    problem: "An interconnected story becomes difficult to follow when the episodes, historical references, and timeline are scattered across documents.",
    built: "A narrative universe with character-led episodes, cinematic promotional videos, and a Next.js publishing site: episode routes, concept art, historical-reference archive, chronology, reading progress, and spoiler-aware content backed by local state and Supabase.",
    challenge: "Designing a system that can expose useful context without accidentally revealing later story developments—and clearly separating fiction from real historical sources.",
    working: [
      "Episode and season reading pages",
      "Reference archive and timeline",
      "Reader progress and spoiler-aware display",
      "Supabase content tables and access rules",
      "Original story and campaign films with cinematic visuals"
    ],
    decisions: [
      "Organized episodes and reference material as a consistent content structure.",
      "Separated story canon from documented historical details.",
      "Linked spoiler visibility to each reader's episode progress."
    ],
    next: [
      "Expand reader features as the story grows.",
      "Improve publishing and contributor workflows.",
      "Continue testing the reader experience."
    ],
    role: "Creator · Original writing, worldbuilding, cinematic creative direction, AI-assisted video production, product design, full-stack implementation, and testing",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Content systems",
      "Creative direction",
      "AI video production"
    ],
    gallery: [],
    live: "https://psych-open-source.vercel.app",
  },
  {
    slug: "raidio",
    demoAvailable: true,
    showcaseVideos: [
      {
        title: "A radio station, built your way",
        label: "Product promo",
        runtime: "0:42",
        description: "A screen-led tour from browsing live stations to naming a station, shaping the opening set, choosing a host, and sharing a link. The side-by-side listeners show the central idea: one live broadcast, shared by everyone tuned in.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/0d4e27e0-f164-40dc-a68f-30c774fd883f.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/f050d264-88b3-4352-aa69-2e64a2cc7222.jpg",
        orientation: "landscape",
      },
      {
        title: "Own the Airwaves",
        label: "Creator-focused brand film",
        runtime: "0:36",
        description: "A visual pitch for station ownership: give your station an identity, make AI-assisted music, and take the mic yourself or choose an AI host. It closes on the difference between a personal playlist and a station everyone can join.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/b218557c-34cc-46ec-bc93-4e2589438ffb.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/5f451506-cc24-4d46-9413-2395f10b624a.jpg",
        orientation: "landscape",
      },
      {
        title: "Don't Press Play. Tune In.",
        label: "Vertical social campaign",
        runtime: "0:38",
        description: "A mobile-first spot built around Raidio's always-on idea. The message is deliberately different from on-demand music: the station is already playing. Find your frequency, join the broadcast, and listen together without restarting it.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/7b8ccfb0-67f7-40dd-8c07-6be9d6996b2e.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/eecf6442-0e52-4a67-8c8d-f471aff9a6f4.jpg",
        orientation: "portrait",
      },
    ],
    demoVideo: {
      src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/d7047a0a-53e8-4a2b-b1bc-1a92d537ad3b.mp4",
      poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/85e3c3f3-f62f-4de3-b02f-56269ea3499b.jpg",
      orientation: "landscape",
      caption: "The complete product walkthrough: explore stations, join a live broadcast, compare synchronized listeners, and build a station from scratch.",
    },
    name: "Raidio",
    category: "AI media platform",
    status: "Built · Pre-launch",
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
    image: { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/85e3c3f3-f62f-4de3-b02f-56269ea3499b.jpg", alt: "Raidio live browse page showing its station art and tune-in cards" },
    gallery: [
      { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/6cb5c896-f716-4d09-bee2-dde1a08176a6.jpg", alt: "Raidio California Drive Time live station player and track list from the product walkthrough" },
      { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/486cfb43-cd2e-4737-be50-7253853b539b.jpg", alt: "Raidio station creation screen showing the opening set builder" },
    ],
    live: "https://raidio-ten.vercel.app",
  },
  {
    slug: "snapdex",
    demoAvailable: true,
    demoVideo: {
      src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/39444373-7341-45c0-8dce-4a2f368daae0.mp4",
      poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/c2c86e56-22d2-4b7d-9cf5-378b572e4a43.jpg",
      orientation: "landscape",
      caption: "Authentic Collection Showcase · 0:34. A walkthrough of real Snapdex cards, community collections, and the product experience.",
    },
    showcaseVideos: [
      {
        title: "Collect the unexpected.",
        label: "Product story film",
        runtime: "0:32",
        description: "From uploading a photo to rolling rarity and discovering what a card can become. A widescreen introduction to the creative and collecting experience.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/27de29d6-c6c4-4b6c-b4f4-0be779d5e067.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/394acc17-eb01-4ba6-a2d5-c20d66cfec98.jpg",
        orientation: "landscape",
      },
      {
        title: "Burn your way up.",
        label: "Rarity & burn mechanics · Vertical film",
        runtime: "0:43",
        description: "A vertical breakdown of rarity, limited supply, and Snapdex's burn-to-promote mechanic, showing how the scarcity system shapes collecting.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/8530d1f8-8771-4a10-97d2-7651ab4b727d.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/c48d25c9-5a77-4031-94d7-b535c0e826b8.jpg",
        orientation: "portrait",
      },
      {
        title: "Every photo becomes a card.",
        label: "Social campaign · Vertical film",
        runtime: "0:30",
        description: "A fast, mobile-first look at turning photos into collectible cards, exploring creator collections, and discovering unexpected pulls.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/55b27081-a4e5-4407-9059-dd087d482ee7.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/cae87202-2060-4170-8e8b-66b8630b097c.jpg",
        orientation: "portrait",
      },
    ],
    name: "Snapdex",
    category: "Creator economy + game",
    status: "Built · Pre-launch",
    featured: false,
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
    image: { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/c2c86e56-22d2-4b7d-9cf5-378b572e4a43.jpg", alt: "Actual frame from Snapdex Authentic Collection Showcase showing the live community card collection" },
    gallery: [
      { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/394acc17-eb01-4ba6-a2d5-c20d66cfec98.jpg", alt: "Actual film frame showing Snapdex photo upload and rarity discovery" },
      { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/c48d25c9-5a77-4031-94d7-b535c0e826b8.jpg", alt: "Actual Snapdex social film frame showing rarity tiers and limited card supply" },
    ],
    live: "https://trading-card-app-two.vercel.app",
  },
  {
    slug: "jump-trainer",
    demoAvailable: true,
    demoVideo: {
      src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/378c9b76-f596-4a91-9961-99aa5e830af3.mp4",
      poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/7f9cd807-6bfc-48c5-a6a7-dff25dc3ec75.jpg",
      orientation: "landscape",
      caption: "Jump Trainer product showcase · 0:54. Real athlete footage, motion analysis, jump measurement, and the app experience.",
    },
    showcaseVideos: [
      {
        title: "One jump. A smarter way to train.",
        label: "Product promo",
        runtime: "0:32",
        description: "A concise introduction to Jump Trainer: set up your phone, record a jump, and turn the footage into measurement and coaching feedback.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/c6f8ecd0-f22a-4cff-87c9-71783a188b12.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/20d90cfc-6a85-4d61-9459-3d7d54e74260.jpg",
        orientation: "landscape",
      },
      {
        title: "Behind the measurement.",
        label: "Motion-analysis showcase",
        runtime: "0:54",
        description: "An alternate product showcase focused on the movement-analysis visuals and feedback experience, with pose tracking and flight-time graphics.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/e3cb784f-1be2-4ad7-b934-091b19cfbb3b.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/17819708-91ce-49c4-9ac4-ee7c057128ee.jpg",
        orientation: "landscape",
      },
      {
        title: "Think you can jump? Prove it.",
        label: "Vertical TikTok promo",
        runtime: "0:26",
        description: "A short vertical campaign designed for social feeds, introducing the challenge of measuring and improving your vertical jump.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/c8d95a86-0efc-4244-940e-9015b39099d4.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/9f5755a0-3537-4022-90ea-85bca821ee4c.jpg",
        orientation: "portrait",
      },
    ],
    name: "Jump Trainer",
    category: "AI coaching + computer vision",
    status: "Built · Pre-launch",
    featured: false,
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
    live: "https://apogee-web-three.vercel.app",
  },
  {
    slug: "edit-battle",
    demoAvailable: true,
    demoVideo: {
      src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/ccce456f-9d7a-45a3-aa4c-2029e6d5b6fe.mp4",
      poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/e7cd0bed-52c7-4a35-9b4e-d8f128bca031.jpg",
      orientation: "landscape",
      caption: "Edit Battle product film · 0:37. A smooth, cinematic tour of the editing challenge platform.",
    },
    showcaseVideos: [
      {
        title: "Make the cut. Take the crown.",
        label: "Challenge promo",
        runtime: "0:30",
        description: "A vertical campaign introducing the Edit Battle concept: create an edit, enter a challenge, earn votes, and compete for the crown.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/ab50a380-916c-480b-8674-13383296c45e.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/6ca79e74-e61b-4d19-82b8-41c1ceedd710.jpg",
        orientation: "portrait",
      },
      {
        title: "Join. Create. Climb.",
        label: "Short-form social teaser",
        runtime: "0:15",
        description: "A fast-cut vertical call to action built around the platform's editor challenges and king-of-the-hill crown.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/046a0bfe-7368-4be6-8425-197d3ed31450.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/3d4a7cdc-335c-426f-b06e-1437a7a78383.jpg",
        orientation: "portrait",
      },
      {
        title: "The competition comes to life.",
        label: "Platform showcase",
        runtime: "0:24",
        description: "A landscape brand film highlighting Edit Battle's creative competitions, interface, and community-driven experience.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/f2d12618-b53d-4fbe-8cb8-b14b5d0a0fbd.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/cf525874-0f7e-4e26-a495-611672737e48.jpg",
        orientation: "landscape",
      },
    ],
    image: {
      src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/e7cd0bed-52c7-4a35-9b4e-d8f128bca031.jpg",
      alt: "Actual frame from Edit Battle platform video showing the challenge interface",
    },
    name: "Edit Battle",
    category: "Creator community",
    status: "Built · Pre-launch",
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
    live: "https://edit-battle.vercel.app",
  },
  {
    slug: "civic-mirror",
    demoAvailable: true,
    demoVideo: {
      src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/85a865a0-cc4d-403b-a28c-f7c9a9576ca3.mp4",
      poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/86cf1ee9-d365-48e2-8fe8-f01fe4e5d30b.jpg",
      orientation: "landscape",
      caption: "Civic Mirror concept film · 0:34. An introduction to the bilingual ballot guide and its goal of making complicated measures easier to understand.",
    },
    showcaseVideos: [
      {
        title: "Voting made understandable",
        label: "Plain-language explainer",
        runtime: "0:36",
        description: "A vertical explainer of Civic Mirror's core idea: start with what matters to you, then explore complex ballot measures in plain language with supporting context.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/b73f245b-19ab-4b83-8ad0-e76720a91fc9.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/43160f9c-ccf8-4663-9aea-74668855c0f1.jpg",
        orientation: "portrait",
      },
      {
        title: "Your vote. Your priorities.",
        label: "TikTok social film",
        runtime: "0:37",
        description: "A fast, mobile-first introduction to Civic Mirror and the idea of seeing ballot measures through the issues and tradeoffs that matter most to each voter.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/5e2e421c-9dfb-446e-ad8f-488a17bd6f42.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/022c62a2-768c-4d5e-8a7a-c3a7b10fc762.jpg",
        orientation: "portrait",
      },
    ],
    image: { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/86cf1ee9-d365-48e2-8fe8-f01fe4e5d30b.jpg", alt: "Frame from the Civic Mirror concept film introducing the bilingual ballot explainer" },
    name: "Civic Mirror",
    category: "Civic technology",
    status: "Built · Pre-launch",
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
    live: "https://web-tau-drab-10.vercel.app",
    github: "https://github.com/hellsangel05/civic-mirror",
  },
  {
    slug: "co-lab",
    demoAvailable: true,
    demoVideo: {
      src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/43ed9f26-a1c4-4a37-9faa-7c28dc5dbc98.mp4",
      poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/8eb8c705-595d-4c18-ab5a-4fc7bc83b451.jpg",
      orientation: "landscape",
      caption: "Co-Lab product promo · 0:51. A look at the idea network, nine labs, and the connections that help thoughts grow.",
    },
    showcaseVideos: [
      {
        title: "Ideas become a network",
        label: "Platform showcase",
        runtime: "1:09",
        description: "A closer walkthrough of Co-Lab's actual interface: submit an unfinished thought, let the AI classifier route it to a lab, explore related ideas, and follow activity as the network evolves.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/a6ee6c7a-ed24-4496-b5a5-d5b98708789d.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/05e04a42-7390-40aa-9352-c6b820139e70.jpg",
        orientation: "landscape",
      },
      {
        title: "Your ideas deserve somewhere to grow",
        label: "Vertical TikTok promo",
        runtime: "0:27",
        description: "A short-form introduction to the problem Co-Lab solves: ideas disappear in notes apps. Co-Lab gives them a place to be found, connected, and developed with other people.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/d64380bd-d549-41d7-9bbe-47b6779d345a.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/61f5f2d4-6742-46bd-ac46-761aa0bbc69e.jpg",
        orientation: "portrait",
      },
      {
        title: "Co-Lab in motion",
        label: "Smooth platform film",
        runtime: "0:36",
        description: "A flowing, screen-led tour of Co-Lab's core idea: drop a thought, discover linked concepts, and see your contribution become part of a wider network.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/5c957dea-d2f5-4ef5-9f1f-3d8430122af9.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/a13e3495-8564-44b0-ba09-e62e0969ba34.jpg",
        orientation: "landscape",
      },
      {
        title: "Every idea starts with a spark",
        label: "First Co-Lab promo",
        runtime: "0:29",
        description: "An early Co-Lab introduction about why unfinished ideas deserve somewhere to go. The film introduces the labs, AI-assisted discovery, and a community built around developing thoughts together.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/aeaeadc4-78b8-489d-8f52-4a751ac10129.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/e5b4cc15-133e-4725-98db-0980233dcf61.jpg",
        orientation: "landscape",
      },
    ],
    name: "Co-Lab",
    category: "AI collaboration network",
    status: "Built · Pre-launch",
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
    live: "https://colab-orpin.vercel.app",
  },
  {
    slug: "skateview",
    demoAvailable: true,
    demoVideo: {
      src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/1ef05fe3-977c-473f-a5c1-f83eaa30622f.mp4",
      poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/c3e9d18d-b70b-451e-aa56-63e43aa9fee9.webp",
      orientation: "landscape",
      caption: "SkateView field film · 0:31. Real skate footage meets the spot-finding experience: discover the scene, check conditions, and get out skating.",
    },
    showcaseVideos: [
      {
        title: "Scout before you roll.",
        label: "Session story",
        runtime: "0:30",
        description: "The session-focused story of arriving at a spot, finding out the conditions have changed, and using SkateView to scout what still works.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/34f4c13c-2b89-4aa3-b61a-313da21a7367.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/57fb1c80-dc87-44ca-97ab-01412f2f624e.webp",
        orientation: "landscape",
      },
      {
        title: "Every city has a line.",
        label: "Platform film",
        runtime: "0:32",
        description: "A map-led SkateView walkthrough showing skate spots, features, spot details, condition scores, and the tools for building a session line.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/a2b18ddd-f03d-4ad8-a88d-405ce74491ba.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/c48e3f7f-73ee-4889-bce2-c4eb62734522.webp",
        orientation: "landscape",
      },
      {
        title: "Find your next spot.",
        label: "Vertical TikTok promo",
        runtime: "0:34",
        description: "A phone-first social cut demonstrating the spot map, ledge and rail filters, condition information, and community submissions.",
        src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/658e2fcd-3106-467e-91d7-a746913160d2.mp4",
        poster: "https://d2ol7oe51mr4n9.cloudfront.net/user_3AsbGPQTONXkPUOluZU5lDNtAUz/c52f7960-38be-4a45-86b6-6195cc4f19bb.webp",
        orientation: "portrait",
      },
    ],
    name: "SkateView",
    category: "Community mapping",
    status: "Built · Pre-launch",
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
    live: "https://skateview-app.vercel.app",
  },
  {
    slug: "living-window",
    demoAvailable: true,
    demoVideo: {
      src: "/media/living-window/living-window-v5.mp4",
      poster: "/media/living-window/living-window-v5.jpg",
      orientation: "landscape",
      caption: "Living Window · V5 cinematic film (0:34). A look at the persistent, evolving ambient village.",
    },
    showcaseVideos: [
      {
        title: "A calmer world in motion",
        label: "Smooth cinematic remake",
        runtime: "0:37",
        description: "A second cinematic interpretation of Living Window, emphasizing its atmospheric village setting and the ambient-screen experience.",
        src: "/media/living-window/living-window-smooth.mp4",
        poster: "/media/living-window/living-window-smooth.jpg",
        orientation: "landscape",
      },
      {
        title: "The alternate cut",
        label: "Cinematic variation",
        runtime: "0:27",
        description: "A shorter alternative edit exploring how Living Window can be presented through motion and sound.",
        src: "/media/living-window/living-window-alternate.mp4",
        poster: "/media/living-window/living-window-alternate.jpg",
        orientation: "landscape",
      },
      {
        title: "Living Window, an ambient escape",
        label: "Project promo",
        runtime: "0:48",
        description: "The longer promotional film introducing the idea of a digital window: a persistent, evolving world built to feel at home on an everyday screen.",
        src: "/media/living-window/living-window-promo.mp4",
        poster: "/media/living-window/living-window-promo.jpg",
        orientation: "landscape",
      },
    ],
    name: "Living Window",
    category: "Creative technology",
    status: "Built · Pre-launch",
    positioning: "A persistent ambient village that grows with room time, sound, and repeated visits.",
    summary: "Living Window turns a spare screen into slow digital art. A seeded village follows local light, responds to the room, remembers visits, and can unfold in real time or accelerated story modes.",
    problem: "Most screen experiences demand attention. Living Window explores the opposite: software that creates calm presence, rewards return visits, and can eventually live as a dedicated physical object.",
    built: "A deterministic world simulation with two interchangeable art engines, local persistence, sound-reactive signals, seasonal atmosphere, multiple time scales, gallery mode, recovery-safe saves, and curator tools. Four short cinematic and promotional films showcase the concept.",
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
    image: { src: "/media/living-window/living-window-v5.jpg", alt: "Real frame captured from the Living Window V5 cinematic showcase video" },
    gallery: [{ src: "/projects/living-window-scene.png", alt: "Living Window village interface showing its paper-theatre atmosphere" }],
    live: "https://living-window-app-orcin.vercel.app",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
export const moreProjects = projects.filter((project) => !project.featured);
