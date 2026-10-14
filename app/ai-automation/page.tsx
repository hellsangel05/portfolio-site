import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI & Automation | Web, CRM, Paid Media",
  description: "Hands-on work by Angel Gonzalez across Meta Ads Manager, GoHighLevel CRM, voice AI, AI-assisted development and business workflow automation.",
  alternates: { canonical: "/ai-automation" },
};

const systems = [
  { number: "01", area: "Paid media", title: "Meta Ads Manager & campaign execution", detail: "At ADGO Studios, my cousin and I launched a paid, bilingual Facebook and Instagram campaign aimed at businesses in the San Fernando Valley. We worked with creative, messaging, audience selection and the path from an ad to a service inquiry.", evidence: ["Meta Ads Manager", "Facebook & Instagram advertising", "Bilingual English / Spanish creative", "Audience targeting", "Campaign setup & delivery"], note: "This is experience running our studio's own paid ads, not a claim of client campaign ROAS or an established agency track record." },
  { number: "02", area: "CRM and intake", title: "GoHighLevel, forms & customer handoffs", detail: "We use GoHighLevel to connect website inquiries with contact records, consultation calendars and automated responses. I have worked through the business details behind those handoffs: which information to ask for, who gets notified and how a customer reaches a person.", evidence: ["GoHighLevel (GHL)", "CRM configuration", "Lead capture forms", "Calendar / appointment booking", "Automated acknowledgments", "Client intake"], note: "A real ADGO form has received an inquiry and sent an automated acknowledgment. Some client-specific integrations still require production verification." },
  { number: "03", area: "Conversational AI", title: "Luna: an AI phone receptionist", detail: "Our studio's AI receptionist uses a configured knowledge base and appointment calendar to answer common questions and offer a booking. I worked on how the assistant should handle incoming calls, the information it gathers and the options callers need when a call is not their preferred next step.", evidence: ["GoHighLevel Voice AI", "AI agent configuration", "Knowledge bases", "Call routing", "Appointment scheduling", "Conversation testing"], note: "This is receptionist setup and testing, not a claim that it has independently closed sales or replaced staff." },
  { number: "04", area: "Web and delivery", title: "Websites connected to business tools", detail: "From the ADGO Studios site to the Aurora Pool & Spa client website, I have worked on responsive pages, service information, lead forms, hosting decisions, and technical SEO. The Aurora build uses Astro with Cloudflare Workers; my independent applications use Next.js, TypeScript and Supabase.", evidence: ["Next.js & Astro", "TypeScript / React", "Cloudflare Workers & Vercel", "Supabase / PostgreSQL", "Meta Pixel", "Search Console & SEO"], note: "I distinguish site setup and tracking configuration from verified attribution or measured revenue growth." },
];

const toolkit = [
  ["Campaigns & tracking", "Meta Ads Manager · Meta Business Portfolio · Meta Pixel · Facebook Ads · Instagram Ads · audience targeting · ad creative"],
  ["Customer systems", "GoHighLevel · CRM · lead forms · contact pipelines · appointment calendars · Voice AI · notifications"],
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
        <p className="practice-lead">I build and connect websites, advertising, AI tools and customer workflows. The work isn't just prompting a model. It's understanding the process, setting up the tools and checking what happens when people actually use them.</p>
        <div className="practice-hero-links">
          <a href="https://adgostudios.com/" target="_blank" rel="noopener noreferrer">ADGO Studios website</a>
          <Link href="/work/aurora-pool-spa">Aurora client site case study</Link>
          <Link href="/creative-ai">Creative AI work</Link>
        </div>
      </div>

      <section className="practice-proof section-shell" aria-label="Areas of hands-on experience">
        <div><strong>Meta</strong><span>Paid campaigns</span></div>
        <div><strong>GHL</strong><span>CRM &amp; intake</span></div>
        <div><strong>Voice AI</strong><span>Phone automation</span></div>
        <div><strong>Web</strong><span>Development &amp; hosting</span></div>
      </section>

      <section className="practice-section section-shell">
        <header className="practice-section-header"><p>Selected systems</p><h2>What I've worked on</h2></header>
        <div className="practice-case-list">
          {systems.map((item) => (
            <article className="practice-case" key={item.number}>
              <div className="practice-case-index"><span>{item.number}</span><small>{item.area}</small></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <ul className="practice-chips">{item.evidence.map((tech)=><li key={tech}>{tech}</li>)}</ul>
                <p className="practice-note">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="practice-contrast">
        <div className="section-shell practice-contrast-grid">
          <div><p className="practice-kicker">A practical example</p><h2>From a campaign to a conversation.</h2></div>
          <div>
            <p>A business needs more than an ad or a website by itself. I think about the handoff between systems and the customer experience at each step.</p>
            <ol className="practice-steps">
              <li><strong>1. Reach someone.</strong><span>Build the message and creative in Meta Ads Manager, with a clear offer and relevant audience.</span></li>
              <li><strong>2. Give them somewhere to go.</strong><span>A mobile-friendly landing page explains the service and presents a straightforward action.</span></li>
              <li><strong>3. Capture the request.</strong><span>A GoHighLevel form collects useful information for the next step.</span></li>
              <li><strong>4. Respond and schedule.</strong><span>Use CRM workflows, a booking calendar or the AI receptionist to help route an inquiry.</span></li>
              <li><strong>5. Check the handoff.</strong><span>Test the experience, review tracking configuration and fix where customers get stuck.</span></li>
            </ol>
            <p className="practice-note">This is the architecture I've built and worked toward across ADGO projects, not a claim that every step is live for every client or has generated measured results.</p>
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
        <h2>Need someone who can build and learn fast?</h2>
        <div><a className="button button-primary" href="mailto:gonzalezangel0510@yahoo.com">Email me</a><Link className="button button-secondary" href="/resume">Résumé</Link></div>
      </section>
    </main>
  );
}
