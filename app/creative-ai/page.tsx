import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative AI | Video, Advertising & Storytelling",
  description: "Angel Gonzalez's AI creative work with Higgsfield, Meta ad production, short-form content, voice and sound tools, and the PSYCH! storytelling platform.",
  alternates: { canonical: "/creative-ai" },
};

const creativeWork = [
  { num: "01", category: "AI advertising", title: "Higgsfield video production for ADGO", copy: "Produced a series of short-form ADGO Studios commercials across cinematic, motion-graphics, animated, and comedy formats. Built repeatable workflows combining Higgsfield-generated visuals and motion, ElevenLabs voice and sound, and HyperFrames scene composition to deliver campaign-ready vertical videos.", tags: ["Higgsfield", "Kling image-to-video", "Generative video", "ElevenLabs", "HyperFrames", "Creative production"], links: [{text:"ADGO Studios",href:"https://adgostudios.com/"}] },
  { num: "02", category: "Paid social", title: "Bilingual Meta advertising", copy: "Developed English- and Spanish-language ad concepts and launched a paid Facebook and Instagram campaign for ADGO Studios in the Los Angeles and San Fernando Valley market. Worked across messaging, audience selection, creative assets, and Meta Ads Manager campaign setup.", tags: ["Meta Ads Manager", "Facebook & Instagram", "Bilingual copywriting", "Audience targeting", "Paid social"], links: [{text:"Campaign & automation experience",href:"/ai-automation"}] },
  { num: "03", category: "Animation & storytelling", title: "PSYCH! — original animated series", copy: "Created the PSYCH! science-fiction universe and released the animated first episode, Eternity, on YouTube. Developed the narrative world, characters, and episode scripts alongside a Next.js publishing platform with a reading archive, chronology, and spoiler-aware experience.", tags: ["Original writing", "AI-assisted animation", "Creative direction", "Worldbuilding", "Next.js", "Digital publishing"], links: [{text:"Watch Episode 1",href:"https://www.youtube.com/watch?v=vXAPT-oGbkA"},{text:"PSYCH! case study",href:"/work/psych-open-source"}] },
  { num: "04", category: "Web & brand experience", title: "Creative meets implementation", copy: "Designed responsive websites, brand presentations, landing pages, and inquiry flows for ADGO Studios and Aurora Pool & Spa. Connected creative direction to website performance, accessibility, search visibility, and customer contact paths.", tags: ["Landing pages", "Brand design", "Astro", "Next.js", "Conversion paths", "Technical SEO"], links: [{text:"Aurora Pool & Spa",href:"https://aurora-pool-spa.adgostudios.workers.dev"},{text:"ADGO Studios",href:"https://adgostudios.com/"}] },
];

const abilities = [
  ["Concept and script","Finding a clear angle, drafting a hook or story idea, using ChatGPT and Claude to iterate on messaging and structure."],
  ["Visual production","Higgsfield image and video generation, scene development, art direction, motion, and selecting the strongest takes."],
  ["Audio and editing","ElevenLabs voice, music and effects, HyperFrames scene composition, video assembly, sound design, and finishing."],
  ["Campaign creative","Short-form hooks, platform formats, audience targeting, bilingual messaging, and calls to action for Meta campaigns."],
];

export default function CreativePage() {
  return (
    <main className="practice-page creative-practice">
      <div className="section-shell practice-hero">
        <Link className="practice-back" href="/">Portfolio</Link>
        <p className="practice-kicker">02 / Creative AI</p>
        <h1>Creative ideas.<br/><span>Made for the screen.</span></h1>
        <p className="practice-lead">I produce AI-assisted commercials, animation, and short-form digital content, bringing together storytelling, design, audio, motion graphics, and web technology.</p>
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

      <section className="psych-film-feature section-shell" aria-labelledby="psych-film-title">
        <div className="psych-film-media">
          <div className="psych-film-player">
            <iframe
              src="https://www.youtube-nocookie.com/embed/vXAPT-oGbkA"
              title="PSYCH! — Episode 1: Eternity (animated film)"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="psych-film-media-label"><span>ORIGINAL ANIMATED EPISODE</span><span>SEASON 01 / ETERNITY</span></div>
        </div>
        <div className="psych-film-copy">
          <p className="practice-kicker">Featured original film / PSYCH! Universe</p>
          <h2 id="psych-film-title">Episode 1. Eternity.</h2>
          <p>Created the PSYCH! science-fiction universe, wrote its first episode, Eternity, and brought the story to screen through AI-assisted animation, visual storytelling, and creative direction.</p>
          <p>The project brings together original screen storytelling and a dedicated Next.js publishing experience, complete with episodes, story chronology, and a reader-friendly reference archive.</p>
          <div className="psych-film-links">
            <a href="https://www.youtube.com/watch?v=vXAPT-oGbkA" target="_blank" rel="noopener noreferrer">Watch Episode 1 on YouTube</a>
            <a href="https://www.tiktok.com/@thepsychuniverse" target="_blank" rel="noopener noreferrer">PSYCH! on TikTok</a>
            <Link href="/work/psych-open-source">Read the project case study</Link>
            <a href="https://psych-open-source.vercel.app/read/season-1/eternity" target="_blank" rel="noopener noreferrer">Read Episode 1</a>
          </div>
          <p className="psych-film-caption">Episode 1 is embedded from the official @thepsychuniverse YouTube upload. You can watch here or open the original video on YouTube.</p>
        </div>
      </section>

      <section className="creative-reel-section section-shell" aria-labelledby="creative-reel-title">
        <header className="creative-reel-heading">
          <div>
            <p className="practice-kicker">Selected video work / ADGO Studios</p>
            <h2 id="creative-reel-title">Selected commercial work.</h2>
          </div>
          <p>Short-form ADGO Studios commercials spanning motion graphics, animation, comedy, product storytelling, and social advertising.</p>
        </header>

        <div className="creative-showreel">
          <div className="creative-showreel-player">
            <video controls playsInline preload="metadata" poster="https://adgostudios.com/assets/posters/showreel.webp" aria-label="Play ADGO Studios video showreel">
              <source src="https://adgostudios.com/assets/videos/adgo-showreel.mp4" type="video/mp4" />
              Your browser does not support HTML video. <a href="https://adgostudios.com/#reel">Watch on ADGO Studios.</a>
            </video>
          </div>
          <div className="creative-showreel-copy">
            <p className="practice-kicker">Studio showreel</p>
            <h3>A quick look at ADGO.</h3>
            <p>A fast-paced look at ADGO Studios' video production, visual styles, and digital creative work.</p>
            <a className="practice-text-link" href="https://adgostudios.com/#reel" target="_blank" rel="noopener noreferrer">Watch on the ADGO website</a>
          </div>
        </div>

        <div className="creative-recent-heading">
          <div>
            <span>October 2026 / Website ad series</span>
            <h3>Four ideas. Four different executions.</h3>
          </div>
          <p>Eight original ADGO Studios ad concepts produced with Higgsfield image and video tools, ElevenLabs audio, and HyperFrames editing and compositing.</p>
        </div>
        <div className="creative-video-grid">
          {[
            { id:"1Y5FjdIn7plyqcm9LD65oNUgQ7Xa1dm0K",label:"Motion graphics",title:"The Build",description:"A florist website moves from brief to wireframe, code, animated layers and launch. A concise example of visualizing a development process." },
            { id:"1J_zu3LhzoQ2UNKNpqvV8yq_0bAGsIKZM",label:"Claymation",title:"Handmade Clay",description:"A dog groomer's storefront and booking experience are told through a tactile clay world. Strong visual direction and a distinct animation style." },
            { id:"1jkCzOCV6YEoXZ8joDbJAPqDTh9wGeu7F",label:"Social storytelling",title:"Mijo Chat",description:"A bilingual, text-message comedy about a bakery owner who needs a website. The narrative works through timing, on-screen copy and a simple punchline." },
            { id:"1aBTj-Pc4XLO3iXYIwXlm2LWULjGQQsTG",label:"Retro commercial",title:"The Infomercial",description:"A late-night infomercial parody featuring deliberately dated web design, voiceover and an appearance by our AI receptionist, Luna." },
          ].map((clip) => (
            <article className="creative-video-card" key={clip.id}>
              <div className="creative-video-player">
                <iframe
                  title={clip.title + " — ADGO Studios video"}
                  src={"https://drive.google.com/file/d/" + clip.id + "/preview"}
                  loading="lazy"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="creative-video-caption">
                <span>{clip.label}</span>
                <h4>{clip.title}</h4>
                <p>{clip.description}</p>
                <a href={"https://drive.google.com/file/d/" + clip.id + "/view"} target="_blank" rel="noopener noreferrer">Open video in Google Drive</a>
              </div>
            </article>
          ))}
        </div>
        <p className="creative-reel-footnote">October 2026 ADGO Studios creative portfolio · vertical social ad production · Higgsfield, ElevenLabs, and HyperFrames.</p>
      </section>

      <section className="practice-section section-shell">
        <header className="practice-section-header"><p>Creative work</p><h2>Video production & creative direction</h2></header>
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
          <div><p className="practice-kicker">Creative process</p><h2>From concept to final cut.</h2></div>
          <div>
            <p>I take a creative brief through concept, script, visual development, audio, editing, and final delivery, using AI production tools to explore different directions and finish each piece.</p>
            <div className="practice-tool-grid practice-abilities">{abilities.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section className="practice-section section-shell">
        <header className="practice-section-header"><p>Tools & applications</p><h2>Creative production meets software</h2></header>
        <div className="practice-tool-grid">
          <article><h3>AI generation</h3><p>Higgsfield · Kling · Nano Banana Pro · ChatGPT · Claude · ElevenLabs · Suno · image & video generation</p></article>
          <article><h3>Creative workflow</h3><p>Creative briefs · storyboards · HyperFrames · short-form commercials · bilingual copy · hooks &amp; pacing · editing · sound design</p></article>
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
