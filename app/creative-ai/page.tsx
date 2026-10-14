import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative AI | Video, Advertising & Storytelling",
  description: "Angel Gonzalez's AI creative work with Higgsfield, Meta ad production, short-form content, voice and sound tools, and the PSYCH! storytelling platform.",
  alternates: { canonical: "/creative-ai" },
};

const creativeWork = [
  { num: "01", category: "AI advertising", title: "Higgsfield creative production for ADGO", copy: "At ADGO Studios, my partner and I have built an automated, repeatable approach to making ad creative with Higgsfield. We use AI to explore a concept, develop variations, create visual assets and refine output for social placements. This is a production workflow, not a claim that Higgsfield is running our paid media campaigns or that we've built its underlying video model.", tags: ["Higgsfield", "Generative video", "Creative automation", "Concept variations", "AI production"], links: [{text:"ADGO Studios",href:"https://adgostudios.com/"}] },
  { num: "02", category: "Paid social", title: "Bilingual Meta ad creative", copy: "ADGO ran a paid Facebook and Instagram campaign targeting the Los Angeles / San Fernando Valley area. We developed English and Spanish messaging and creative for a local-business audience and worked through the process of getting the ads approved and delivered in Meta Ads Manager.", tags: ["Meta Ads Manager", "Instagram", "Facebook", "Bilingual creative", "Ad copy", "Campaign execution"], links: [{text:"AI & automation details",href:"/ai-automation"}] },
  { num: "03", category: "Storytelling & digital publishing", title: "PSYCH! Open Source", copy: "I created an original science-fiction universe and developed it into a web publishing project, including episode writing, characters, timeline research, reader progress and spoiler-aware reference pages. The project also involves experimenting with AI-generated animation, visual sequences, soundtrack ideas and creative direction.", tags: ["Story development", "AI-assisted animation", "Worldbuilding", "Next.js", "Publishing", "Creative direction"], links: [{text:"Explore PSYCH!",href:"https://psych-open-source.vercel.app"},{text:"Technical case study",href:"/work/psych-open-source"}] },
  { num: "04", category: "Web & visual presentation", title: "Creative that connects to an actual website", copy: "I also work on where the creative lands: responsive site layouts, brand presentation, calls to action, and contact flows. The ADGO and Aurora projects connect visual decisions to practical usability rather than stopping at a standalone image or video.", tags: ["Landing pages", "Web design", "Astro", "Next.js", "Conversion paths", "Technical SEO"], links: [{text:"Aurora Pool & Spa",href:"https://aurora-pool-spa.adgostudios.workers.dev"},{text:"ADGO Studios",href:"https://adgostudios.com/"}] },
];

const abilities = [
  ["Concept and script","Finding a clear angle, drafting a hook or story idea, using ChatGPT and Claude to iterate on messaging and structure."],
  ["Visual generation","Higgsfield video and visual creation, reference-driven experiments, variations, consistency checks and selecting usable takes."],
  ["Audio and editing","Exploring ElevenLabs for voice, Suno for music, and editing / assembly tools to shape generated clips into a coherent piece."],
  ["Campaign-aware design","Thinking about placement, audience, call to action and the feedback loop between creative and Meta advertising."],
];

export default function CreativePage() {
  return (
    <main className="practice-page creative-practice">
      <div className="section-shell practice-hero">
        <Link className="practice-back" href="/">Portfolio</Link>
        <p className="practice-kicker">02 / Creative AI</p>
        <h1>Ideas are easy.<br/><span>Making them real is the work.</span></h1>
        <p className="practice-lead">I use generative AI to make ad creative, explore filmmaking ideas, and build the places where people experience that work. I like the overlap between storytelling, production tools, code and distribution.</p>
        <div className="practice-hero-links">
          <a href="https://adgostudios.com/" target="_blank" rel="noopener noreferrer">ADGO Studios website</a>
          <a href="https://psych-open-source.vercel.app" target="_blank" rel="noopener noreferrer">PSYCH! platform</a>
          <Link href="/ai-automation">AI &amp; automation work</Link>
        </div>
      </div>

      <section className="practice-proof section-shell" aria-label="Creative capabilities">
        <div><strong>Higgsfield</strong><span>Generative video</span></div>
        <div><strong>Meta</strong><span>Paid social creative</span></div>
        <div><strong>PSYCH!</strong><span>Original storytelling</span></div>
        <div><strong>AI tools</strong><span>Voice, music &amp; editing</span></div>
      </section>

      <section className="practice-section section-shell">
        <header className="practice-section-header"><p>Creative work</p><h2>Production, not just prompts</h2></header>
        <div className="practice-case-list">
          {creativeWork.map((item)=><article className="practice-case" key={item.num}>
            <div className="practice-case-index"><span>{item.num}</span><small>{item.category}</small></div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <ul className="practice-chips">{item.tags.map(t=><li key={t}>{t}</li>)}</ul>
              <div className="practice-inline-links">{item.links.map(link=>(link.href.startsWith("/")?<Link key={link.href} href={link.href}>{link.text}</Link>:<a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>))}</div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="practice-contrast">
        <div className="section-shell practice-contrast-grid">
          <div><p className="practice-kicker">Creative process</p><h2>From a brief to something people can watch.</h2></div>
          <div>
            <p>My process mixes human judgment with AI production tools. The point is to arrive at material that actually communicates, not simply generate more material.</p>
            <div className="practice-tool-grid practice-abilities">{abilities.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
            <p className="practice-note">Different projects use different tools. This is my creative toolkit and working approach, not a claim that every tool is integrated into one automated system.</p>
          </div>
        </div>
      </section>

      <section className="practice-section section-shell">
        <header className="practice-section-header"><p>Tools & applications</p><h2>Creative production meets software</h2></header>
        <div className="practice-tool-grid">
          <article><h3>AI generation</h3><p>Higgsfield · ChatGPT · Claude · ElevenLabs · Suno · image and video generation · prompt iteration</p></article>
          <article><h3>Creative workflow</h3><p>Creative briefs · short-form concepts · ad variations · bilingual copy · reference images · hooks &amp; pacing · editing and sound design</p></article>
          <article><h3>Publishing &amp; delivery</h3><p>Meta Ads Manager · Instagram · Facebook · Next.js · Astro · web design · landing pages · site deployment</p></article>
        </div>
        <div className="practice-linked-work"><h3>See the work</h3><div><Link href="/work/adgo-studios">ADGO Studios</Link><Link href="/work/psych-open-source">PSYCH! case study</Link><Link href="/work/aurora-pool-spa">Aurora website</Link></div></div>
      </section>
      <section className="practice-contact section-shell">
        <p>AI creative production / content / creative technology</p>
        <h2>Have a project that needs both ideas and execution?</h2>
        <div><a className="button button-primary" href="mailto:gonzalezangel0510@yahoo.com">Email me</a><Link className="button button-secondary" href="/resume">Résumé</Link></div>
      </section>
    </main>
  );
}
