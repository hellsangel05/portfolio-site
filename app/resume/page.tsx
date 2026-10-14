import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "../components/PrintButton";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé and project experience for Angel Gonzalez in Los Angeles.",
  alternates: { canonical: "/resume" },
};

const builds = [
  { title: "Aurora Pool & Spa", slug: "aurora-pool-spa", copy: "Client website using Astro: service pages, mobile layouts, optimized photos, contact options, and CRM integration points." },
  { title: "ADGO Studios", slug: "adgo-studios", copy: "Business website, paid Meta advertising, Higgsfield video production, CRM automation, and Luna AI phone receptionist." },
  { title: "PSYCH! Open Source", slug: "psych-open-source", copy: "Original science-fiction universe with a published animated Episode 1 and a Next.js story platform, timeline, archives, and spoiler controls." },
  { title: "Raidio", slug: "raidio", copy: "Full-stack radio application using Next.js and Supabase, including shared-playhead playback, station scheduling, and AI-generated audio workflows." },
];

const experience = [
  {
    title: "Co-founder · Web and automation projects",
    company: "ADGO Studios",
    dates: "2026 – present",
    bullets: [
      "Design, develop, and deploy websites and digital workflows for local businesses, from requirements through launch.",
      "Configured CRM lead capture, contact records, appointment scheduling, automated follow-up, and Luna AI phone reception using GoHighLevel.",
      "Launched Facebook and Instagram ads in Meta Ads Manager; produced short-form commercials using Higgsfield, ElevenLabs, and HyperFrames.",
      "Handle client conversations, technical problem solving, testing, and follow-up in English and Spanish.",
    ],
  },
  {
    title: "Hardware Sales Associate",
    company: "The Home Depot",
    dates: "2025 – present",
    bullets: [
      "Help customers identify products and troubleshoot practical hardware, plumbing, and electrical questions.",
      "Work across departments and explain unfamiliar product systems clearly in English and Spanish.",
    ],
  },
  {
    title: "Field Technician",
    company: "Mosquito Squad",
    dates: "Previous experience",
    bullets: ["Delivered field services, followed treatment and equipment procedures, and communicated with customers at job sites."],
  },
  {
    title: "Delivery Associate",
    company: "Amazon Delivery Service Partner",
    dates: "Previous experience",
    bullets: ["Handled time-sensitive delivery routes, logistics, and customer service responsibilities."],
  },
  {
    title: "Construction / HVAC Helper",
    company: "Construction and HVAC",
    dates: "Previous experience",
    bullets: ["Supported installations and jobsite work with tools, materials, and coordination across tasks."],
  },
  {
    title: "Production / Manufacturing",
    company: "Manufacturing",
    dates: "Previous experience",
    bullets: ["Worked with production processes, equipment, and workplace safety procedures."],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-hero section-shell">
        <div>
          <Link href="/" className="back-link"> Portfolio</Link>
          <p className="eyebrow">Résumé</p>
          <h1>Angel Gonzalez</h1>
          <p className="resume-title">Web Development · CRM &amp; AI Automation · Creative Technology</p>
        </div>
        <div className="resume-contact">
          <p>San Fernando Valley · Los Angeles, CA</p>
          <a href="mailto:gonzalezangel0510@yahoo.com">gonzalezangel0510@yahoo.com</a>
          <a href="https://portfolio-site-green-xi.vercel.app" target="_blank" rel="noreferrer">Portfolio </a>
          <a href="https://github.com/hellsangel05" target="_blank" rel="noreferrer">GitHub </a>
          <div className="resume-downloads">
            <a className="button button-primary" href="/angel-gonzalez-resume.pdf" download>Download PDF</a>
            <PrintButton />
          </div>
        </div>
      </header>

      <section className="resume-summary section-shell">
        <div className="resume-section-label">Summary</div>
        <p>Web developer and creative technologist experienced in full-stack applications, client websites, CRM automation, Meta Ads Manager, Voice AI, and Higgsfield-powered commercials. Build and deploy digital products using Next.js, Astro, Supabase, Vercel, and Cloudflare.</p>
      </section>

      <section className="resume-block section-shell">
        <h2>Relevant projects</h2>
        <div className="resume-products">
          {builds.map((project) => (
            <article key={project.slug}>
              <h3><Link href={"/work/" + project.slug}>{project.title}</Link></h3>
              <p>{project.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-block section-shell">
        <h2>Specialized work</h2>
        <p><Link href="/ai-automation">AI &amp; Automation</Link> — Meta campaigns, GoHighLevel CRM, lead capture, voice AI and technical implementation.</p>
        <p><Link href="/creative-ai">Creative AI</Link> — Higgsfield commercials, ElevenLabs audio, short-form ad production, and published PSYCH! animation.</p>
      </section>

      <section className="resume-block section-shell">
        <h2>Experience</h2>
        {experience.map((entry) => (
          <article className="resume-role" key={entry.company}>
            <div><h3>{entry.company}</h3><p>{entry.title}</p><span>{entry.dates}</span></div>
            <ul>{entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </article>
        ))}
      </section>

      <section className="resume-block resume-skills section-shell">
        <h2>Technical skills</h2>
        <div>
          <article><h3>Development</h3><p>JavaScript · TypeScript · React · Next.js · Astro · Python · GitHub · APIs · Responsive design</p></article>
          <article><h3>Data and hosting</h3><p>Supabase · PostgreSQL · Authentication · Vercel · Cloudflare · Deployment and debugging</p></article>
          <article><h3>Business technology</h3><p>CRM setup & lead management (GoHighLevel) · Meta Ads Manager · Meta Pixel · Google Search Console · Voice AI · Higgsfield · ElevenLabs · HyperFrames · Campaign creative</p></article>
        </div>
      </section>

      <section className="resume-block section-shell">
        <h2>Education</h2>
        <div className="earlier-grid">
          <article><h3>Granada Hills Charter High School</h3><p>High school diploma</p><span>2016</span></article>
        </div>
      </section>
    </main>
  );
}
