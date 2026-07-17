import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "../components/PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for Angel Gonzalez, a product-minded full-stack developer and co-founder of ADGO Ventures and ADGO Studios.",
  alternates: { canonical: "/resume" },
};

const productRoles = [
  {
    company: "ADGO Ventures",
    title: "Co-Founder / Full-Stack Product Developer",
    date: "Present",
    bullets: [
      "Co-founded an independent product studio building pre-launch software across media, creator tools, sports analysis, civic technology, and community platforms.",
      "Translate product concepts into user flows, technical plans, responsive interfaces, database-backed applications, and deployed builds.",
      "Design and implement systems including shared media playback, creator economies, semantic idea graphs, video-analysis pipelines, privacy controls, moderation, and progression loops.",
      "Build primarily with TypeScript, React, Next.js, Expo, Python, Supabase, PostgreSQL, and Vercel.",
    ],
  },
  {
    company: "ADGO Studios",
    title: "Co-Founder / Creative & Automation Developer",
    date: "Present",
    bullets: [
      "Develop creative workflows for image and video generation, advertising assets, social content, lead capture, CRM operations, and automation.",
      "Prototype websites, internal systems, and content pipelines that connect creative production with practical business operations.",
    ],
  },
];

const selectedProducts = [
  {
    name: "Raidio",
    slug: "raidio",
    description: "AI radio network with synchronized playback, station studios, generated music, voice hosts, and resilient publishing workflows.",
  },
  {
    name: "Snapdex",
    slug: "snapdex",
    description: "Photo trading-card economy with rarity, packs, trades, listings, creator royalties, supply burns, and arena battles.",
  },
  {
    name: "Jump Trainer",
    slug: "jump-trainer",
    description: "Expo and Python product that measures vertical jump from video, reports confidence, and generates a training plan.",
  },
];

const additionalExperience = [
  ["Hardware Sales Associate", "The Home Depot", "May 2025 — Present"],
  ["Manufacturing Technician", "Chatsworth Products Incorporated", "Nov 2024 — May 2025"],
  ["Pest Control Technician", "Mosquito Squad", "May 2023 — Oct 2024"],
  ["Earlier roles", "Retail and security", "2017 — 2023"],
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-hero section-shell">
        <div>
          <Link href="/" className="back-link">← Portfolio</Link>
          <p className="eyebrow">Resume</p>
          <h1>Angel Gonzalez</h1>
          <p className="resume-title">Product-Minded Full-Stack Developer</p>
        </div>
        <div className="resume-contact">
          <p>Los Angeles, California</p>
          <a href="mailto:gonzalezangel0510@yahoo.com">gonzalezangel0510@yahoo.com</a>
          <a href="https://github.com/hellsangel05" target="_blank" rel="noreferrer">github.com/hellsangel05 ↗</a>
          <div className="resume-downloads">
            <a href="/angel-gonzalez-resume.pdf" download className="button button-primary">Download PDF</a>
            <PrintButton />
          </div>
        </div>
      </header>

      <section className="resume-summary section-shell">
        <div className="resume-section-label">Profile</div>
        <p>
          Product-minded full-stack developer and co-founder with hands-on experience taking web
          and mobile products from concept through interface design, implementation, database
          architecture, AI integration, and deployment. Seeking a junior product engineering,
          prototyping, or creative-technology role with room to contribute across disciplines.
        </p>
      </section>

      <section className="resume-block section-shell">
        <h2>Selected engineering projects</h2>
        <div className="resume-products">
          {selectedProducts.map((product) => (
            <article key={product.slug}>
              <h3><Link href={`/work/${product.slug}`}>{product.name}</Link></h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-block section-shell">
        <h2>Product-building experience</h2>
        {productRoles.map((role) => (
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

      <section className="resume-block resume-skills section-shell">
        <h2>Skills</h2>
        <div>
          <article><h3>Product + development</h3><p>Product ideation · Rapid prototyping · Full-stack development · Responsive interfaces · Authentication · Database-backed applications · API integrations · Deployment · Debugging · Product iteration</p></article>
          <article><h3>AI + automation</h3><p>LLM integration · Prompt design · Image generation · Video generation · Workflow automation · Computer vision workflows</p></article>
          <article><h3>Technology</h3><p>TypeScript · JavaScript · React · Next.js · Expo · React Native · Python · Supabase · PostgreSQL · Vercel · GitHub · APIs</p></article>
        </div>
      </section>

      <section className="resume-block section-shell">
        <h2>Additional experience + education</h2>
        <div className="earlier-grid">
          {additionalExperience.map(([title, company, date]) => (
            <article key={`${title}-${company}`}><h3>{title}</h3><p>{company}</p><span>{date}</span></article>
          ))}
          <article><h3>Granada Hills Charter High School</h3><p>High school diploma</p><span>2016</span></article>
        </div>
      </section>
    </main>
  );
}
