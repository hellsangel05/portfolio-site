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
  { title: "ADGO Studios", slug: "adgo-studios", copy: "Business website, GoHighLevel workflows, intake forms, and AI receptionist configuration for a small creative studio." },
  { title: "PSYCH! Open Source", slug: "psych-open-source", copy: "Next.js publishing site with reading routes, timeline, searchable reference material, and spoiler-aware progress." },
  { title: "Raidio", slug: "raidio", copy: "Full-stack radio prototype using Next.js and Supabase, including shared-playhead playback, station scheduling, and AI-generated audio workflows." },
];

const experience = [
  {
    title: "Co-founder · Web and automation projects",
    company: "ADGO Studios",
    dates: "2026 – present",
    bullets: [
      "Work with a partner to plan and build websites and digital services for local businesses.",
      "Build and configure contact forms, service pages, CRM workflows, AI reception, and hosting.",
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
    title: "Field and technical service roles",
    company: "Manufacturing, pest control, and construction support",
    dates: "Prior experience",
    bullets: [
      "Worked in hands-on roles requiring reliable service, following procedures, and solving problems on site.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-hero section-shell">
        <div>
          <Link href="/" className="back-link">← Portfolio</Link>
          <p className="eyebrow">Résumé</p>
          <h1>Angel Gonzalez</h1>
          <p className="resume-title">Web Development · Automation · Technical Support</p>
        </div>
        <div className="resume-contact">
          <p>San Fernando Valley · Los Angeles, CA</p>
          <a href="mailto:gonzalezangel0510@yahoo.com">gonzalezangel0510@yahoo.com</a>
          <a href="https://portfolio-site-green-xi.vercel.app" target="_blank" rel="noreferrer">Portfolio ↗</a>
          <a href="https://github.com/hellsangel05" target="_blank" rel="noreferrer">GitHub ↗</a>
          <div className="resume-downloads">
            <a className="button button-primary" href="/angel-gonzalez-resume.pdf" download>Download PDF</a>
            <PrintButton />
          </div>
        </div>
      </header>

      <section className="resume-summary section-shell">
        <div className="resume-section-label">Summary</div>
        <p>Hands-on experience building websites, full-stack prototypes, and business automations, combined with a background in customer service and practical troubleshooting. Looking for an opportunity to grow in web development, technical support, implementation, or technical operations.</p>
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
          <article><h3>Business technology</h3><p>GoHighLevel · CRM configuration · Website forms · Voice AI · Workflow automation · Bilingual customer support</p></article>
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
