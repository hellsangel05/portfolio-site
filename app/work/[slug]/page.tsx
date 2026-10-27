import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectMedia } from "../../components/ProjectMedia";
import { getProject, projects } from "../../data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.name} case study`,
    description: project.positioning,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — Product case study`,
      description: project.positioning,
      ...(project.image ? { images: [{ url: project.image.src, alt: project.image.alt }] } : {}),
    },
  };
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className={"case-page" + (project.slug === "raidio" ? " raidio-case" : project.slug === "psych-open-source" ? " psych-case" : project.slug === "aurora-pool-spa" ? " aurora-case" : "")}>
      <header className="case-hero section-shell">
        <Link href="/#work" className="back-link"> All work</Link>
        <div className="case-title-row">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.name}</h1>
          </div>
          <p>{project.positioning}</p>
        </div>
        {project.slug === "raidio" ? (
          <div className="raidio-hero-status" aria-label="Raidio product and creative case study">
            <span><i aria-hidden="true" /> Live-radio product</span>
            <span>Design / Engineering / Creative</span>
            <span>AI music + shared listening</span>
          </div>
        ) : null}
        {project.slug === "psych-open-source" ? (
          <div className="psych-case-hero-status" aria-label="PSYCH! story and publishing case study">
            <span>ARCHIVE 001 / 1947</span>
            <span>Original story · Film · Publishing</span>
            <span>Classification / Open Source</span>
          </div>
        ) : null}
        {project.slug === "aurora-pool-spa" ? (
          <div className="aurora-case-hero-status" aria-label="Aurora Pool and Spa client project">
            <span>ADGO STUDIOS / CLIENT PROJECT</span>
            <span>Real media · Website · CRM</span>
            <span>Los Angeles service business</span>
          </div>
        ) : null}
        {project.image ? (
          <div className="case-hero-media">
            <ProjectMedia project={project} priority sizes="100vw" />
          </div>
        ) : null}
      </header>

      {project.demoVideo ? (
        <section className="case-demo section-shell" aria-label={`${project.name} product demo`}>
          <div className="case-demo-heading">
            <p className="eyebrow">{project.slug === "raidio" ? "01 / The real product" : project.slug === "psych-open-source" ? "01 / The cinematic trailer" : project.slug === "aurora-pool-spa" ? "01 / Client website in motion" : project.slug === "edit-battle" ? "01 / Product in motion" : project.slug === "co-lab" ? "01 / Meet Co-Lab" : project.slug === "jump-trainer" ? "01 / The product in motion" : project.slug === "living-window" ? "01 / The cinematic showcase" : project.slug === "skateview" ? "01 / Out in the streets" : project.slug === "snapdex" ? "01 / The real collection" : project.slug === "civic-mirror" ? "01 / Civic Mirror concept film" : "Product walkthrough"}</p>
            <h2>{project.slug === "raidio" ? "From idea to on air." : project.slug === "psych-open-source" ? "What did the blast awaken?" : project.slug === "aurora-pool-spa" ? "Built for the business behind the water." : project.slug === "edit-battle" ? "Every edit deserves a stage." : project.slug === "co-lab" ? "Every great idea starts unfinished." : project.slug === "jump-trainer" ? "Every jump tells a story." : project.slug === "living-window" ? "A world worth returning to." : project.slug === "skateview" ? "The next spot is out there." : project.slug === "snapdex" ? "The collection is alive." : project.slug === "civic-mirror" ? "Understand the measure. Make your choice." : "See it in motion."}</h2>
            {project.slug === "raidio" ? <p className="raidio-demo-intro">A guided look inside Raidio: browse stations, hear one live broadcast together, and create a station with its own sound and AI host.</p> : null}
            {project.slug === "psych-open-source" ? <p className="psych-demo-intro">An original science-fiction mystery beginning with a classified experiment in 1947. The trailer sets the mood; the character film and interactive archive below take you deeper.</p> : null}
            {project.slug === "aurora-pool-spa" ? <p className="aurora-demo-intro">A real local client project: an updated pool-service website, original jobsite visuals, and connected customer-inquiry workflows. Watch the walkthrough, then explore the two supporting films.</p> : null}
            {project.slug === "edit-battle" ? <p>Follow the Edit Battle experience in this smooth-zoom platform film. Three additional clips below showcase the competition through vertical social promos and a landscape brand video.</p> : null}
            {project.slug === "co-lab" ? <p>Meet Co-Lab, where unfinished thoughts find the right lab and connect with other ideas. This product film opens the case study, with four more Co-Lab videos below: platform tours, the original promo, and a vertical social spot.</p> : null}
            {project.slug === "jump-trainer" ? <p>Real jump footage meets motion analysis and coaching feedback. Start with the athlete-led showcase, then explore a shorter product promo, an alternate analysis edit, and a vertical social film below.</p> : null}
            {project.slug === "living-window" ? <p>A cinematic introduction to the evolving ambient village. Watch the V5 film here, then explore three more cuts below, each embedded directly with a frame from its own video.</p> : null}
            {project.slug === "skateview" ? <p>Watch real skating footage meet SkateView’s street-spot discovery tools. The field film leads into the session story, a platform film, and a vertical social cut below. Every thumbnail comes from its own video.</p> : null}
            {project.slug === "snapdex" ? <p>Meet the real community collection: original photo cards, rarity tiers, and the interface in action. Watch the authentic collection showcase, then explore three more Snapdex films below, all with frames from their own footage.</p> : null}
            {project.slug === "civic-mirror" ? <p>See the idea behind Civic Mirror, a bilingual voter guide designed to explain complicated local ballot measures without telling people how to vote. Watch the concept film, then the two vertical explainers below.</p> : null}
          </div>
          <div
            className="case-demo-frame"
            data-orientation={project.demoVideo.orientation ?? "portrait"}
          >
            <video controls playsInline preload="metadata" poster={project.demoVideo.poster}>
              <source src={project.demoVideo.src} type="video/mp4" />
              {project.demoVideo.captions ? (
                <track kind="captions" src={project.demoVideo.captions} srcLang="en" label="English" default />
              ) : null}
              Your browser does not support embedded video.
            </video>
          </div>
          {project.demoVideo.caption ? <p className="case-demo-caption">{project.demoVideo.caption}</p> : null}
        </section>
      ) : null}

      {project.showcaseVideos?.length ? (
        <section className="case-showcase section-shell" aria-labelledby={project.slug + "-showcase-title"}>
          <header className="case-showcase-heading">
            <div>
              <p className="eyebrow">{project.slug === "psych-open-source" ? "02 / Story and interactive universe" : project.slug === "aurora-pool-spa" ? "02 / The client and the services" : project.slug === "edit-battle" ? "02 / Campaign and platform films" : project.slug === "co-lab" ? "02 / Platform and social campaign" : project.slug === "jump-trainer" ? "02 / Product and social films" : project.slug === "living-window" ? "02 / The other cinematic cuts" : project.slug === "skateview" ? "02 / The session and the platform" : project.slug === "snapdex" ? "02 / The creator and card economy" : project.slug === "civic-mirror" ? "02 / Plain-language and social explainers" : "02 / The creative campaign"}</p>
              <h2 id={project.slug + "-showcase-title"}>{project.slug === "psych-open-source" ? "Explore the universe, one file at a time." : project.slug === "aurora-pool-spa" ? "Real work. Real footage. A complete digital presence." : project.slug === "edit-battle" ? "Create. Compete. Take the crown." : project.slug === "co-lab" ? "Ideas grow better together." : project.slug === "jump-trainer" ? "Film it. Measure it. Improve it." : project.slug === "living-window" ? "Four windows into the same evolving world." : project.slug === "skateview" ? "Find it. Share it. Keep it alive." : project.slug === "snapdex" ? "Collect. Trade. Burn. Play." : project.slug === "civic-mirror" ? "See the issues clearly." : "More than a playlist. More than a product demo."}</h2>
            </div>
            {project.slug === "psych-open-source" ? (
              <p>The universe extends beyond the trailer. Meet the people caught in a mysterious experiment, explore its growing archive, and watch a shorter introduction to the world and website. The films connect the characters and events to the reading experience. All three play right here.</p>
            ) : project.slug === "aurora-pool-spa" ? (
              <p>Two more angles on the same client engagement: Aurora's actual pool-service footage and a short overview of the website, lead forms, CRM, and local search structure. Both films are embedded here, with thumbnails taken directly from the videos.</p>
            ) : project.slug === "edit-battle" ? (
              <p>Four original Edit Battle videos, one place to watch them all. The smooth platform tour leads into two vertical spots made for social feeds and a landscape showcase. Each plays right here, with a thumbnail captured directly from its own footage.</p>
            ) : project.slug === "co-lab" ? (
              <p>Explore the real Co-Lab interface through two additional platform films, revisit the first Co-Lab promo, and watch the mobile-first TikTok spot. All five videos play here with thumbnails captured from their original footage.</p>
            ) : project.slug === "jump-trainer" ? (
              <p>Three more views of Jump Trainer: a punchy product introduction, an alternate motion-analysis showcase, and a TikTok-ready vertical edit. Each clip plays in the page and uses its own footage as the preview frame.</p>
            ) : project.slug === "living-window" ? (
              <p>Explore the smooth cinematic remake, an alternate film, and the longer Living Window promo. Each video plays here, with its thumbnail captured from the actual footage instead of a designed placeholder.</p>
            ) : project.slug === "skateview" ? (
              <p>Three more ways to explore SkateView: the story of a session, the spot map and community tools, and a vertical promo for TikTok. All four videos play directly here, with authentic frame thumbnails.</p>
            ) : project.slug === "snapdex" ? (
              <p>Three more perspectives on the photo-to-card experience: a widescreen collecting film and two TikTok-ready vertical cuts covering rarity, burn mechanics, and the community. Every video is embedded here and uses its own authentic film-frame thumbnail.</p>
            ) : project.slug === "civic-mirror" ? (
              <p>Two short vertical films explain Civic Mirror from different angles: a plain-language voting explainer and a social-first TikTok cut. All three videos play here, and each preview is a frame from its actual footage.</p>
            ) : (
              <p>Three distinct promo films, one shared identity. Interface-first storytelling, a creator-focused brand film, and a punchy social spot all circle back to the idea that Raidio is already playing. Watch each film here without leaving the page.</p>
            )}
          </header>
          <div className="case-showcase-grid">
            {project.showcaseVideos.map((video, index) => (
              <article
                className={"case-showcase-card" + (video.orientation === "portrait" ? " is-portrait" : "")}
                key={video.src}
              >
                <div className="case-showcase-media" data-orientation={video.orientation}>
                  <div className="case-showcase-media-label" aria-hidden="true"><span>{project.slug === "psych-open-source" ? "PSYCH! / " + (index === 0 ? "STORY FILM" : index === 1 ? "PLATFORM TOUR" : "WORLD TEASER") : project.slug === "aurora-pool-spa" ? "AURORA / " + (index === 0 ? "REAL CLIENT MEDIA" : "SERVICE WORKFLOWS") : project.slug === "edit-battle" ? "EDIT BATTLE / " + (video.orientation === "portrait" ? "VERTICAL PROMO" : "PLATFORM FILM") : project.slug === "co-lab" ? "CO-LAB / " + (video.orientation === "portrait" ? "SOCIAL FILM" : "PLATFORM TOUR") : project.slug === "jump-trainer" ? "JUMP TRAINER / " + (video.orientation === "portrait" ? "SOCIAL FILM" : "PRODUCT FILM") : project.slug === "living-window" ? "LIVING WINDOW / " + (index === 0 ? "SMOOTH CUT" : index === 1 ? "ALTERNATE CUT" : "PROJECT PROMO") : project.slug === "skateview" ? "SKATEVIEW / " + (video.orientation === "portrait" ? "VERTICAL PROMO" : index === 0 ? "SESSION FILM" : "PLATFORM FILM") : project.slug === "snapdex" ? "SNAPDEX / " + (video.orientation === "portrait" ? "VERTICAL FILM" : "COLLECTION FILM") : project.slug === "civic-mirror" ? "CIVIC MIRROR / " + (index === 0 ? "EXPLAINER" : "SOCIAL FILM") : "RAIDIO / " + (video.orientation === "portrait" ? "VERTICAL FILM" : "CAMPAIGN FILM")}</span><span>{video.runtime}</span></div>
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    aria-label={"Play " + video.title + " — " + project.name}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support embedded video playback.
                  </video>
                </div>
                <div className="case-showcase-copy">
                  <div className="case-showcase-meta"><span>0{index + 1}</span><span>{video.label} · {video.runtime}</span></div>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  
                </div>
              </article>
            ))}
          </div>
          {project.slug === "psych-open-source" ? (
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Four PSYCH! films, each with a real video-frame thumbnail · Original storytelling and interactive publishing.</p>
          ) : project.slug === "aurora-pool-spa" ? (
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Three embedded Aurora videos · Every preview image is an actual frame from its video · Website and client storytelling in one case study.</p>
          ) : project.slug === "edit-battle" ? (
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Four embedded Edit Battle videos · Original video-frame thumbnails · Two vertical and two landscape films.</p>
          ) : project.slug === "co-lab" ? (
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Five embedded Co-Lab films · Original frame thumbnails · Four landscape videos and one vertical social promo.</p>
          ) : project.slug === "jump-trainer" ? (
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Four embedded Jump Trainer videos · Video-frame previews · Three landscape films and one vertical TikTok spot.</p>
          ) : project.slug === "living-window" ? (
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Four embedded Living Window films · Original video-frame thumbnails · All landscape cinematic cuts.</p>
          ) : project.slug === "skateview" ? (
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Four embedded SkateView films · Authentic video-frame thumbnails · Three widescreen films and one vertical social cut.</p>
          ) : project.slug === "snapdex" ? (
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Four embedded Snapdex films · Actual video-frame thumbnails · Two widescreen films and two vertical TikTok cuts.</p>
          ) : (
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Four embedded films · Authentic frames from the videos · Product, brand and social creative in one case study.</p>
          )}
        </section>
      ) : null}

      {project.slug === "psych-open-source" ? (
        <section className="psych-episode section-shell" aria-labelledby="psych-episode-title">
          <div className="psych-episode-header">
            <div>
              <p className="eyebrow">03 / Original animation</p>
              <h2 id="psych-episode-title">Episode 1. Eternity.</h2>
            </div>
            <p>The story goes beyond its trailers. Watch the first animated episode of PSYCH!, then explore the writing, character files, and chronology on the publishing platform.</p>
          </div>
          <div className="psych-episode-player">
            <iframe
              src="https://www.youtube-nocookie.com/embed/vXAPT-oGbkA"
              title="PSYCH! Episode 1 — Eternity, original animated episode"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="psych-episode-footer">
            <span>SEASON 01 / ETERNITY</span>
            <span>Original animated episode · Embedded from YouTube</span>
          </div>
        </section>
      ) : null}

      <section className="case-overview section-shell" aria-label="Project overview">
        <div><span>Role</span><p>{project.role}</p></div>
        <div><span>Technology</span><p>{project.tech.join(" · ")}</p></div>
        <div className="case-overview-actions">
          {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer" className="button button-primary">Visit website</a> : null}
          {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" className="button button-secondary">View source code</a> : null}
        </div>
      </section>

      <section className="case-story section-shell">
        <div className="case-story-index">About the project</div>
        <div className="case-story-content">
          <article>
            <span>01</span>
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </article>
          <article>
            <span>02</span>
            <h2>The build</h2>
            <p>{project.built}</p>
          </article>
          <article>
            <span>03</span>
            <h2>The challenge</h2>
            <p>{project.challenge}</p>
          </article>
        </div>
      </section>

      {project.gallery.length > 0 ? (
        <section className={`case-gallery ${project.gallery.length === 1 ? "single" : ""}`} aria-label={`${project.name} product screenshots`}>
          {project.gallery.map((image) => (
            <div className="case-gallery-image" key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
          ))}
        </section>
      ) : null}

      <section className="case-details section-shell">
        <article>
          <p className="eyebrow">Features</p>
          <h2>What I implemented</h2>
          <ul>{project.working.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <p className="eyebrow">Important decisions</p>
          <h2>Key decisions</h2>
          <ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>

      <section className="case-cta">
        <p className="eyebrow">Selected work</p>
        <h2>See more projects.</h2>
        <div>
          <Link href="/#work" className="button button-primary">All work</Link>
          <a href="mailto:gonzalezangel0510@yahoo.com" className="button button-secondary">Contact Angel</a>
        </div>
      </section>
    </main>
  );
}
