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
            <p className="eyebrow">{project.slug === "raidio" ? "01 / The real product" : project.slug === "psych-open-source" ? "01 / The cinematic trailer" : project.slug === "aurora-pool-spa" ? "01 / Client website in motion" : "Product walkthrough"}</p>
            <h2>{project.slug === "raidio" ? "From idea to on air." : project.slug === "psych-open-source" ? "What did the blast awaken?" : project.slug === "aurora-pool-spa" ? "Built for the business behind the water." : "See it in motion."}</h2>
            {project.slug === "raidio" ? <p className="raidio-demo-intro">A guided look inside Raidio: browse stations, hear one live broadcast together, and create a station with its own sound and AI host.</p> : null}
            {project.slug === "psych-open-source" ? <p className="psych-demo-intro">An original science-fiction mystery beginning with a classified experiment in 1947. The trailer sets the mood; the character film and interactive archive below take you deeper.</p> : null}
            {project.slug === "aurora-pool-spa" ? <p className="aurora-demo-intro">A real local client project: an updated pool-service website, original jobsite visuals, and connected customer-inquiry workflows. Watch the walkthrough, then explore the two supporting films.</p> : null}
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
              <p className="eyebrow">{project.slug === "psych-open-source" ? "02 / Story and interactive universe" : project.slug === "aurora-pool-spa" ? "02 / The client and the services" : "02 / The creative campaign"}</p>
              <h2 id={project.slug + "-showcase-title"}>{project.slug === "psych-open-source" ? "One universe. Two ways in." : project.slug === "aurora-pool-spa" ? "Real work. Real footage. A complete digital presence." : "More than a playlist. More than a product demo."}</h2>
            </div>
            {project.slug === "psych-open-source" ? (
              <p>The universe extends beyond the trailer. First, meet the people caught in a mysterious experiment. Then open the digital archive built to follow their stories: episodes, dossiers, history, timeline, and spoiler controls. Both films play directly here.</p>
            ) : project.slug === "aurora-pool-spa" ? (
              <p>Two more angles on the same client engagement: Aurora's actual pool-service footage and a short overview of the website, lead forms, CRM, and local search structure. Both films are embedded here, with thumbnails taken directly from the videos.</p>
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
                  <div className="case-showcase-media-label" aria-hidden="true"><span>{project.slug === "psych-open-source" ? "PSYCH! / " + (index === 0 ? "STORY FILM" : "DIGITAL ARCHIVE") : project.slug === "aurora-pool-spa" ? "AURORA / " + (index === 0 ? "REAL CLIENT MEDIA" : "SERVICE WORKFLOWS") : "RAIDIO / " + (video.orientation === "portrait" ? "VERTICAL FILM" : "CAMPAIGN FILM")}</span><span>{video.runtime}</span></div>
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
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Three embedded PSYCH! films · Original storytelling and digital experience design · One connected universe.</p>
          ) : project.slug === "aurora-pool-spa" ? (
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Three embedded Aurora videos · Every preview image is an actual frame from its video · Website and client storytelling in one case study.</p>
          ) : (
            <p className="case-showcase-note"><span aria-hidden="true">●</span> Four embedded films · Authentic frames from the videos · Product, brand and social creative in one case study.</p>
          )}
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
