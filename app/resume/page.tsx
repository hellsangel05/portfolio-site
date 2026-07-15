import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "../components/PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for Angel Gonzalez, AI Product Builder and co-founder of ADGO Ventures and ADGO Studios.",
  alternates: { canonical: "/resume" },
};

const roles = [
  {
    company: "ADGO Ventures",
    title: "Co-Founder / AI Product Builder",
    date: "Ongoing",
    bullets: [
      "Co-founded a product venture studio developing a portfolio of pre-launch software products across AI media, creator tools, sports analysis, community platforms, and creative technology.",
      "Translate product concepts into user flows, technical plans, full-stack applications, and deployment-ready builds using AI-assisted and agentic development workflows.",
      "Design product systems including shared media playback, creator economies, semantic idea graphs, video-analysis pipelines, mapping privacy, moderation, and progression loops.",
      "Build primarily with TypeScript, React, Next.js, Expo, Python, Supabase, PostgreSQL, and Vercel.",
    ],
  },
  {
    company: "ADGO Studios",
    title: "Co-Founder / AI Creative & Automation Builder",
    date: "Ongoing",
    bullets: [
      "Develop AI-powered creative workflows for image generation, video generation, advertising, social content, lead capture, CRM operations, and automation.",
      "Prototype websites, internal systems, and content pipelines that connect creative production with practical business operations.",
    ],
  },
  {
    company: "The Home Depot",
    title: "Hardware Sales Associate",
    date: "May 2025 — Present",
    bullets: [
      "Guide customers through product selection, troubleshooting, and project planning across hardware and adjacent departments.",
      "Maintain inventory accuracy, merchandising standards, and day-to-day operational flow while training and supporting other associates.",
      "Bring firsthand customer-service and retail-operations perspective into product decisions.",
    ],
  },
];

const selectedProducts = [
  ["Raidio", "AI radio network with shared playback, station studios, generated music, voice hosts, and resilient publishing workflows."],
  ["Snapdex", "Photo trading-card economy with rarity, packs, trades, listings, creator royalties, supply burns, and arena battles."],
  ["Jump Trainer", "Expo and Python product that measures vertical jump from video, reports confidence, and generates a training plan."],
  ["Co-Lab", "Anonymous collaborative idea graph using classification, embeddings, AI replies, discovery, rooms, and scheduled evolution."],
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-hero section-shell">
        <div>
          <Link href="/" className="back-link">← Portfolio</Link>
          <p className="eyebrow">Resume</p>
          <h1>Angel Gonzalez</h1>
          <p className="resume-title">AI Product Builder</p>
        </div>
        <div className="resume-contact">
          <p>Los Angeles, California</p>
          <a href="mailto:adgpublishings@gmail.com">adgpublishings@gmail.com</a>
          <a href="https://github.com/hellsangel05" target="_blank" rel="noreferrer">github.com/hellsangel05 ↗</a>
          <PrintButton />
        </div>
      </header>

      <section className="resume-summary section-shell">
        <div className="resume-section-label">Profile</div>
        <p>
          Product-minded developer and co-founder who uses AI-assisted development to turn ambitious
          ideas into functional applications. Experienced across product strategy, interaction design,
          full-stack implementation, Supabase-backed systems, mobile prototypes, AI integrations,
          automation, and Vercel deployment. Seeking an AI product, prototyping, product engineering,
          or creative-technology role with room to contribute and grow.
        </p>
      </section>

      <section className="resume-block section-shell">
        <h2>Experience</h2>
        {roles.map((role) => (
          <article className="resume-role" key={role.company}>
            <div>
              <h3>{role.company}</h3>
              <p>{role.title}</p>
              <span>{role.date}</span>
            </div>
            <ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </article>
        ))}
      </section>

      <section className="resume-block section-shell">
        <h2>Selected product experience</h2>
        <div className="resume-products">
          {selectedProducts.map(([name, description]) => (
            <article key={name}><h3>{name}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="resume-block resume-skills section-shell">
        <h2>Skills</h2>
        <div>
          <article><h3>Product + development</h3><p>Product ideation · Rapid prototyping · Full-stack development · Responsive interfaces · Authentication · Database-backed applications · API integrations · Deployment · Debugging · Product iteration</p></article>
          <article><h3>AI-assisted development</h3><p>Agentic coding workflows · Prompt engineering · LLM integration · AI-native product building · Image generation · Video generation · Workflow automation</p></article>
          <article><h3>Technology</h3><p>TypeScript · JavaScript · React · Next.js · Expo · React Native · Python · Tailwind CSS · Supabase · PostgreSQL · Vercel · GitHub · OpenAI APIs</p></article>
        </div>
      </section>

      <section className="resume-block section-shell">
        <h2>Earlier experience + education</h2>
        <div className="earlier-grid">
          <article><h3>Manufacturing Technician</h3><p>Chatsworth Products Incorporated</p><span>Nov 2024 — May 2025</span></article>
          <article><h3>Pest Control Technician</h3><p>Mosquito Squad</p><span>May 2023 — Oct 2024</span></article>
          <article><h3>Customer-facing operations</h3><p>Retail and security roles</p><span>2017 — 2023</span></article>
          <article><h3>Granada Hills Charter High School</h3><p>High school diploma</p><span>2016</span></article>
        </div>
      </section>
    </main>
  );
}
