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
          <p>My original science-fiction story, brought beyond the page as a released animated episode. I developed the story, characters and world, experimenting with AI-assisted visual storytelling and animation to bring an original narrative to screen.</p>
          <p>It's a different kind of creative work from our commercial spots: one focused on writing, visual direction, worldbuilding and adapting a longer story for video. The project also has its own Next.js publishing platform and reference archive.</p>
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
            <h2 id="creative-reel-title">See the work, not just the tools.</h2>
          </div>
          <p>Short-form experiments we made for our studio: motion graphics, animated product stories, comedy and social advertising. The businesses in the scripted ads are fictional.</p>
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
            <p>Our public studio reel brings together selected creative work. It gives recruiters an immediate example before they explore the more recent, single-concept ads below.</p>
            <a className="practice-text-link" href="https://adgostudios.com/#reel" target="_blank" rel="noopener noreferrer">Watch on the ADGO website</a>
          </div>
        </div>

        <div className="creative-recent-heading">
          <div>
            <span>October 2026 / Website ad series</span>
            <h3>Four ideas. Four different executions.</h3>
          </div>
          <p>Produced using a combination of Higgsfield image and video tools, ElevenLabs audio, and HyperFrames editing and compositing. These are our own studio campaign concepts, not client testimonials.</p>
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
        <p className="creative-reel-footnote">October clips are hosted in ADGO's Google Drive. Playback outside the studio account depends on each file's sharing permissions. The older showreel above is served directly from our public website.</p>
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
