import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "../components/PrintButton";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé and project experience for Angel Gonzalez in Los Angeles.",
  alternates: { canonical: "/resume" },
};

const builds = [
  { title: "Civic Mirror", slug: "civic-mirror", copy: "Claude extraction pipeline that turns ballot pamphlets into Zod-validated, cited drafts with human review before publishing; bilingual Next.js and Supabase app with row-level security." },
  { title: "Jump Trainer", slug: "jump-trainer", copy: "Python and MediaPipe engine that measures vertical jump from phone video using flight-time physics, confidence ranges, and clip rejection; Expo mobile app." },
  { title: "Raidio", slug: "raidio", copy: "Next.js and Supabase radio network with AI-generated music and voice hosts; synchronized wall-clock playback and failure-tolerant generation." },
  { title: "Co-Lab", slug: "co-lab", copy: "Idea network that routes posts with an LLM and links them with embeddings and vector search." },
];

const experience = [
  {
    title: "Co-founder · AI automation, web development & digital systems", company: "ADGO Studios",
    dates: "2026 – present",
    bullets: ["Configured the Luna AI phone receptionist, CRM lead management, forms, scheduling, and automated follow-up in GoHighLevel.", "Built and deployed responsive business websites and lead-capture experiences for local clients.", "Launched paid social campaigns in Meta Ads Manager and produced short-form advertising with Higgsfield, ElevenLabs, and HyperFrames.", "Managed client discovery, technical troubleshooting, testing, and implementation in English and Spanish."]
  },
  {
    title: "Co-founder & full-stack engineer · Two-person team", company: "Applied-AI products",
    dates: "2026 – present",
    bullets: ["Design and build AI products end to end with a partner, working across product decisions, UX, backend, AI integration, and deployment.", "Ship LLM extraction with schema validation and human review, computer-vision measurement, generative audio, and embeddings-based search.", "Build with AI coding tools while owning architecture, testing, and product decisions."]
  },
  {
    title: "Hardware Sales Associate", company: "The Home Depot", dates: "May 2025 – present",
    bullets: ["Help customers troubleshoot hardware, plumbing, and electrical product questions.", "Communicate technical options and product guidance in English and Spanish."]
  },
  {
    title: "Manufacturing Technician", company: "Chatsworth Products Incorporated", dates: "Nov 2024 – May 2025",
    bullets: ["Assembled cabinets for computer and networking hardware; measured, drilled, pressed, finished, and fitted metal components.", "Inspected products, repaired defects, and followed quality and safety procedures."]
  }
];
const earlierExperience = [
  { company: "Mosquito Squad", title: "Pest Control Technician", dates: "May 2023 – Oct 2024", note: "Residential field service; trained new hires." },
  { company: "Green Power Network", title: "Solar Sales Canvasser", dates: "Feb 2023 – Apr 2023", note: "Door-to-door outreach and appointment setting." },
  { company: "City Private Security", title: "Security Guard", dates: "Oct 2018 – Dec 2022", note: "Commercial property patrol and incident reports." },
  { company: "Food4Less", title: "Customer Clerk", dates: "Oct 2017 – Apr 2020", note: "Customer service, inventory, and training new employees." },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-hero section-shell">
        <div>
          <Link href="/" className="back-link"> Portfolio</Link>
          <p className="eyebrow">Résumé</p>
          <h1>Angel Gonzalez</h1>
          <p className="resume-title">Applied AI Development · Full-Stack Engineering · AI Automation</p>
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
        <p>Applied AI developer who designs and ships full-stack AI products: an LLM extraction pipeline with schema validation and human review, a computer-vision measurement engine, and a generative-audio platform. Also sets up AI phone reception, CRM automation, and websites for local businesses through ADGO Studios. Builds with Next.js, TypeScript, Python, Supabase, and the Claude and OpenAI APIs. Bilingual in English and Spanish.</p>
      </section>

      <section className="resume-block section-shell">
        <h2>AI projects</h2>
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

      <section className="resume-block section-shell">
        <h2>Earlier experience</h2>
        <div className="earlier-grid">
          {earlierExperience.map((entry) => (
            <article key={entry.company}><h3>{entry.company}</h3><p>{entry.title} · {entry.note}</p><span>{entry.dates}</span></article>
          ))}
        </div>
      </section>
      <section className="resume-block resume-skills section-shell">
        <h2>Technical skills</h2>
        <div>
          <article><h3>Applied AI</h3><p>Claude API · OpenAI API · Structured output and schema validation (Zod) · Embeddings and vector search · MediaPipe · NumPy · ElevenLabs · Voice AI</p></article>
          <article><h3>Development</h3><p>TypeScript · JavaScript · Python · React · Next.js · Expo / React Native · FastAPI · Astro · GitHub · APIs</p></article>
          <article><h3>Data and hosting</h3><p>Supabase · PostgreSQL · Row-level security · Authentication · Vercel · Cloudflare · GitHub Actions</p></article>
          <article><h3>Business technology</h3><p>CRM implementation (GoHighLevel) · Lead management · Workflow automation · Meta Ads Manager · Search Console · Higgsfield · HyperFrames</p></article>
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
