import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI & Automation | Web, CRM, Paid Media",
  description: "Hands-on work by Angel Gonzalez across Meta Ads Manager, CRM implementation, Voice AI, web development and customer workflow automation.",
  alternates: { canonical: "/ai-automation" },
};

const systems = [
  { number: "01", area: "Paid media", title: "Paid social advertising & campaign execution", detail: "Launched paid Facebook and Instagram advertising for ADGO Studios targeting businesses in the San Fernando Valley. Developed ad messaging and creatives, configured audience targeting, set up the campaign in Meta Ads Manager, and reviewed delivery.", evidence: ["Meta Ads Manager", "Facebook & Instagram advertising", "Ad creative development", "Audience targeting", "Campaign setup & delivery"] },
  { number: "02", area: "CRM and intake", title: "CRM implementation, lead capture & scheduling", detail: "Configured GoHighLevel to capture website inquiries, organize contact records, send follow-up notifications, and connect consultation calendars. Designed the intake experience around the information a business needs to respond efficiently.", evidence: ["CRM configuration (GoHighLevel)", "Contact & lead management", "Lead capture forms", "Calendar / appointment booking", "Automated acknowledgments", "Client intake"] },
  { number: "03", area: "Conversational AI", title: "Luna: an AI phone receptionist", detail: "Configured Luna, ADGO Studios' AI phone receptionist, with a business knowledge base and appointment calendar. Developed call-handling logic for service questions, lead qualification, booking options, and live follow-up, then tested conversations and responses.", evidence: ["Voice AI (GoHighLevel)", "AI agent configuration", "Knowledge bases", "Call routing", "Appointment scheduling", "Conversation testing"] },
  { number: "04", area: "Web and delivery", title: "Websites connected to business tools", detail: "Developed responsive websites and lead-capture experiences for ADGO Studios and Aurora Pool & Spa. Worked with Astro, Next.js, TypeScript, Cloudflare Workers, Vercel, form integration, technical SEO, Meta Pixel, and Google Search Console.", evidence: ["Next.js & Astro", "TypeScript / React", "Cloudflare Workers & Vercel", "Supabase / PostgreSQL", "Meta Pixel", "Search Console & SEO"] },
];

const toolkit = [
  ["Campaigns & tracking", "Paid social advertising · Meta Ads Manager · Meta Pixel · audience targeting · campaign setup · ad creative"],
  ["Customer systems", "CRM implementation · lead forms · contact pipelines · appointment calendars · workflow automation · GoHighLevel"],
  ["AI & development", "Claude · ChatGPT · AI-assisted coding · prompt development · API integrations · JavaScript · TypeScript · Python"],
  ["Web & deployment", "Next.js · React · Astro · Supabase · PostgreSQL · Vercel · Cloudflare Workers · GitHub · technical SEO"],
];

export default function AutomationPage() {
  return (
    <main className="practice-page">
      <div className="section-shell practice-hero">
        <Link className="practice-back" href="/">Portfolio</Link>
        <p className="practice-kicker">01 / AI & Automation</p>
        <h1>Business problems.<br/><span>Working systems.</span></h1>
        <p className="practice-lead">I develop websites, launch digital campaigns, and connect CRM and AI tools into customer-facing workflows. My work covers the details from first inquiry to follow-up, booking, and technical delivery.</p>
        <div className="practice-hero-links">
          <a href="https://adgostudios.com/" target="_blank" rel="noopener noreferrer">ADGO Studios website</a>
          <Link href="/work/aurora-pool-spa">Aurora client site case study</Link>
          <Link href="/creative-ai">Creative AI work</Link>
        </div>
      </div>

      <section className="practice-proof section-shell" aria-label="Areas of hands-on experience">
        <div><strong>Paid social</strong><span>Campaign execution</span></div>
        <div><strong>GHL</strong><span>CRM &amp; intake</span></div>
        <div><strong>Voice AI</strong><span>Phone automation</span></div>
        <div><strong>Web</strong><span>Development &amp; hosting</span></div>
      </section>

      <section className="practice-section section-shell">
        <header className="practice-section-header"><p>Selected systems</p><h2>What I&apos;ve worked on</h2></header>
        <div className="practice-case-list">
          {systems.map((item) => (
            <article className="practice-case" key={item.number}>
              <div className="practice-case-index"><span>{item.number}</span><small>{item.area}</small></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <ul className="practice-chips">{item.evidence.map((tech)=><li key={tech}>{tech}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="practice-contrast">
        <div className="section-shell practice-contrast-grid">
          <div><p className="practice-kicker">A practical example</p><h2>From a campaign to a conversation.</h2></div>
          <div>
            <p>I design the full customer journey: targeted creative, a clear landing page, lead capture, responsive follow-up, and conversion tracking.</p>
            <ol className="practice-steps">
              <li><strong>1. Reach someone.</strong><span>Build the message and creative in Meta Ads Manager, with a clear offer and relevant audience.</span></li>
              <li><strong>2. Give them somewhere to go.</strong><span>A mobile-friendly landing page explains the service and presents a straightforward action.</span></li>
              <li><strong>3. Capture the request.</strong><span>A GoHighLevel form collects useful information for the next step.</span></li>
              <li><strong>4. Respond and schedule.</strong><span>Use CRM workflows, a booking calendar or the AI receptionist to help route an inquiry.</span></li>
              <li><strong>5. Check the handoff.</strong><span>Test the experience, review tracking configuration and fix where customers get stuck.</span></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="practice-section section-shell">
        <header className="practice-section-header"><p>Hands-on tools</p><h2>Technologies & platforms</h2></header>
        <div className="practice-tool-grid">{toolkit.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="practice-linked-work">
          <h3>Related work</h3>
          <div><Link href="/work/adgo-studios">ADGO Studios</Link><Link href="/work/aurora-pool-spa">Aurora Pool &amp; Spa</Link><Link href="/work/psych-open-source">PSYCH! content platform</Link></div>
        </div>
      </section>

      <section className="practice-contact section-shell">
        <p>Web development / AI implementation / technical operations</p>
        <h2>Let&apos;s build something useful.</h2>
        <div><a className="button button-primary" href="mailto:gonzalezangel0510@yahoo.com">Email me</a><Link className="button button-secondary" href="/resume">Résumé</Link></div>
      </section>
    </main>
  );
}
