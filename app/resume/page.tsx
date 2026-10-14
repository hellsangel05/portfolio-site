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
    title: "Co-founder · Web development & digital systems",
    company: "ADGO Studios",
    dates: "2026 – present",
    bullets: [
      "Build and deploy responsive business websites and lead-capture experiences for local clients.",
      "Configure CRM lead management, forms, scheduling, automated follow-up, and Luna AI phone reception using GoHighLevel.",
      "Launch paid social campaigns in Meta Ads Manager and produce short-form advertising with Higgsfield, ElevenLabs, and HyperFrames.",
      "Manage client discovery, technical troubleshooting, testing, and implementation."
    ]
  },
  {
    title: "Hardware Sales Associate",
    company: "The Home Depot",
    dates: "May 2025 – present",
    bullets: [
      "Help customers identify products and troubleshoot practical hardware, plumbing, and electrical questions.",
      "Communicate technical options and product guidance in English and Spanish."
    ]
  },
  {
    title: "Manufacturing Technician",
    company: "Chatsworth Products Incorporated",
    dates: "Nov 2024 – May 2025",
    bullets: [
      "Assembled cabinets for computer and networking hardware; measured, drilled, pressed, finished, and fitted metal components.",
      "Inspected products, repaired defects, and followed quality and safety procedures."
    ]
  },
  {
    title: "Pest Control Technician",
    company: "Mosquito Squad",
    dates: "May 2023 – October 2024",
    bullets: [
      "Delivered residential field services, maintained equipment and records, supported customers, and explained additional services.",
      "Trained new hires on job procedures and customer service practices."
    ]
  },
  {
    title: "Retail Sales Associate",
    company: "Bouncing Fun Land",
    dates: "February 2023 – April 2023",
    bullets: ["Supervised indoor-play equipment, assisted visitors, handled transactions, and communicated promotions."]
  },
  {
    title: "Security Guard",
    company: "City Private Security",
    dates: "October 2018 – December 2022",
    bullets: ["Patrolled commercial property, monitored activity, addressed store concerns, and prepared incident observations."]
  },
  {
    title: "Customer Clerk",
    company: "Food4Less",
    dates: "October 2017 – April 2020",
    bullets: ["Supported customer service, store operations, inventory organization, and training of new employees."]
  }
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
        <p><Link href="/ai-automation">AI &amp; Automation</Link> — Paid social advertising, CRM administration, lead capture, voice AI and technical implementation.</p>
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
          <article><h3>Business technology</h3><p>CRM implementation (GoHighLevel) · Lead management · Workflow automation · Paid social advertising (Meta Ads Manager) · Search Console · Voice AI · Higgsfield · ElevenLabs · HyperFrames</p></article>
        </div>
      </section>

      <section className="resume-block section-shell">
        <h2>Community experience</h2>
        <p><strong>Sylmar Recreation Center</strong> · Volunteer · June 2013 – May 2016</p>
        <p>Supported community events, park cleanups, and crowd coordination.</p>
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
