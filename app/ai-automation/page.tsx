import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI & Automation | Web, CRM, Paid Media",
  description: "Hands-on work by Angel Gonzalez across Meta Ads Manager, CRM implementation, Voice AI, web development and customer workflow automation.",
  alternates: { canonical: "/ai-automation" },
};

type SystemLink = { text: string; href: string };

const systems: {
  area: string;
  title: string;
  detail: string;
  evidence: string[];
  image: { src: string; alt: string; caption: string };
  links: SystemLink[];
}[] = [
  {
    area: "Conversational AI",
    title: "Luna: an AI phone receptionist",
    detail: "Configured Luna, ADGO Studios' AI receptionist, with a business knowledge base and appointment calendar. Developed call-handling logic for service questions, lead qualification, booking options, and live follow-up, then tested conversations and responses. AI chat assistants on adgostudios.com and the Aurora Pool & Spa site handle the same first response over website chat.",
    evidence: ["Voice AI (GoHighLevel)", "AI agent configuration", "Knowledge bases", "Call routing", "Appointment scheduling", "Conversation testing"],
    image: {
      src: "/media/automation/luna.jpg",
      alt: "Website chat assistants on adgostudios.com and the Aurora Pool & Spa site, with the Luna phone number from an ADGO ad",
      caption: "Website chat on adgostudios.com and the Aurora site, and Luna's line as it appears in ADGO's ads.",
    },
    links: [
      { text: "Call Luna: (818) 418-8794", href: "tel:+18184188794" },
      { text: "Chat on adgostudios.com", href: "https://adgostudios.com/" },
    ],
  },
  {
    area: "CRM and intake",
    title: "CRM implementation, lead capture & scheduling",
    detail: "Configured GoHighLevel to capture website inquiries, organize contact records, send follow-up notifications, and connect consultation calendars. Designed the intake experience around the information a business needs to respond efficiently, including the separate SMS consent required for text follow-up.",
    evidence: ["CRM configuration (GoHighLevel)", "Contact & lead management", "Lead capture forms", "SMS consent & opt-in", "Calendar / appointment booking", "Automated acknowledgments"],
    image: {
      src: "/media/automation/crm-intake.jpg",
      alt: "ADGO Studios quote form on desktop and Aurora Pool & Spa quote form on mobile, both with SMS consent options",
      caption: "Quote forms on adgostudios.com and the Aurora site, each feeding the CRM with separate transactional and marketing SMS consent.",
    },
    links: [
      { text: "ADGO quote form", href: "https://adgostudios.com/estimate.html" },
      { text: "Aurora quote form", href: "https://aurora-pool-spa.adgostudios.workers.dev/contact/" },
    ],
  },
  {
    area: "Paid media",
    title: "Paid social advertising & campaign execution",
    detail: "Launched paid Facebook and Instagram advertising for ADGO Studios targeting businesses in the San Fernando Valley. Developed ad messaging and creatives, configured audience targeting, set up the campaign in Meta Ads Manager, and reviewed delivery. Each ad closes on one clear action, like requesting a quote or calling Luna.",
    evidence: ["Meta Ads Manager", "Facebook & Instagram advertising", "Ad creative development", "Audience targeting", "Campaign setup & delivery"],
    image: {
      src: "/media/automation/paid-social.jpg",
      alt: "Closing frames of three vertical ADGO Studios ads, each ending on a call to action",
      caption: "Closing frames from three vertical ADGO ads.",
    },
    links: [{ text: "Watch the ads", href: "/creative-ai" }],
  },
  {
    area: "Web and delivery",
    title: "Websites connected to business tools",
    detail: "Developed responsive websites and lead-capture experiences for ADGO Studios and Aurora Pool & Spa. Worked with Astro, Next.js, TypeScript, Cloudflare Workers, Vercel, form integration, technical SEO, Meta Pixel, and Google Search Console.",
    evidence: ["Next.js & Astro", "TypeScript / React", "Cloudflare Workers & Vercel", "Supabase / PostgreSQL", "Meta Pixel", "Search Console & SEO"],
    image: {
      src: "/media/automation/web-delivery.jpg",
      alt: "Aurora Pool & Spa photo journal on desktop and homepage on mobile",
      caption: "Aurora Pool & Spa: before-and-after project pages and the mobile homepage.",
    },
    links: [
      { text: "Aurora case study", href: "/work/aurora-pool-spa" },
      { text: "ADGO Studios case study", href: "/work/adgo-studios" },
    ],
  },
];

const steps = [
  ["Reach someone.", "Build the message and creative in Meta Ads Manager, with a clear offer and relevant audience."],
  ["Give them somewhere to go.", "A mobile-friendly landing page explains the service and presents a straightforward action."],
  ["Capture the request.", "A GoHighLevel form collects useful information for the next step."],
  ["Respond and schedule.", "CRM workflows, a booking calendar, or the AI receptionist route the inquiry."],
  ["Check the handoff.", "Test the experience, review tracking, and fix where customers get stuck."],
];

const toolkit = [
  ["Campaigns & tracking", "Paid social advertising · Meta Ads Manager · Meta Pixel · audience targeting · campaign setup · ad creative"],
  ["Customer systems", "CRM implementation · lead forms · contact pipelines · appointment calendars · workflow automation · GoHighLevel"],
  ["AI & development", "Claude · ChatGPT · AI-assisted coding · prompt development · API integrations · JavaScript · TypeScript · Python"],
  ["Web & deployment", "Next.js · React · Astro · Supabase · PostgreSQL · Vercel · Cloudflare Workers · GitHub · technical SEO"],
];

function SystemLinkItem({ link }: { link: SystemLink }) {
  if (link.href.startsWith("/")) return <Link href={link.href}>{link.text}</Link>;
  if (link.href.startsWith("tel:")) return <a href={link.href}>{link.text}</a>;
  return <a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>;
}

export default function AutomationPage() {
  return (
    <main className="practice-page">
      <div className="section-shell practice-hero">
        <Link className="practice-back" href="/">Portfolio</Link>
        <p className="practice-kicker">AI & Automation</p>
        <h1>Business problems.<br/><span>Working systems.</span></h1>
        <p className="practice-lead">I develop websites, launch digital campaigns, and connect CRM and AI tools into customer-facing workflows. My work covers the details from first inquiry to follow-up, booking, and technical delivery.</p>
        <div className="practice-hero-links">
          <a href="https://adgostudios.com/" target="_blank" rel="noopener noreferrer">ADGO Studios website</a>
          <a href="tel:+18184188794">Call Luna, the AI receptionist</a>
          <Link href="/creative-ai">Creative AI work</Link>
        </div>
      </div>

      <figure className="automation-hero-media section-shell">
        <div className="automation-media">
          <Image src="/media/automation/journey.jpg" alt="adgostudios.com with the AI chat assistant open, beside the GoHighLevel booking calendar on mobile" fill priority sizes="(max-width: 1600px) 100vw, 1600px" />
        </div>
        <figcaption>adgostudios.com with its AI chat assistant, and the GoHighLevel booking calendar it hands off to.</figcaption>
      </figure>

      <section className="practice-section section-shell" aria-labelledby="systems-title">
        <header className="practice-section-header"><p>Selected systems</p><h2 id="systems-title">What I&apos;ve worked on</h2></header>
        <div className="automation-systems">
          {systems.map((item) => (
            <article className="automation-system" key={item.title}>
              <figure>
                <div className="automation-media">
                  <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 900px) 100vw, 55vw" />
                </div>
                <figcaption>{item.image.caption}</figcaption>
              </figure>
              <div className="automation-system-copy">
                <p className="automation-area">{item.area}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <ul className="practice-chips">{item.evidence.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                <div className="practice-inline-links">{item.links.map((link) => <SystemLinkItem key={link.href} link={link} />)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="practice-contrast">
        <div className="section-shell practice-contrast-grid">
          <div><p className="practice-kicker">How it fits together</p><h2>From a campaign to a conversation.</h2></div>
          <div>
            <p>I design the full customer journey: targeted creative, a clear landing page, lead capture, responsive follow-up, and conversion tracking.</p>
            <ol className="practice-steps">
              {steps.map(([title, body]) => <li key={title}><strong>{title}</strong><span>{body}</span></li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="practice-section section-shell">
        <header className="practice-section-header"><p>Hands-on tools</p><h2>Technologies & platforms</h2></header>
        <div className="practice-tool-grid">{toolkit.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="practice-contact section-shell">
        <p>Web development / AI implementation / technical operations</p>
        <h2>Let&apos;s build something useful.</h2>
        <div><a className="button button-primary" href="mailto:gonzalezangel0510@yahoo.com">Email me</a><Link className="button button-secondary" href="/resume">Résumé</Link></div>
      </section>
    </main>
  );
}
