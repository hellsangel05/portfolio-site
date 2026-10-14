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
    <main className="case-page">
      <header className="case-hero section-shell">
        <Link href="/#work" className="back-link"> All work</Link>
        <div className="case-title-row">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.name}</h1>
          </div>
          <p>{project.positioning}</p>
        </div>
        {project.image ? (
          <div className="case-hero-media">
            <ProjectMedia project={project} priority sizes="100vw" />
          </div>
        ) : null}
      </header>

      {project.demoVideo ? (
        <section className="case-demo section-shell" aria-label={`${project.name} product demo`}>
          <div className="case-demo-heading">
            <p className="eyebrow">Product walkthrough</p>
            <h2>See it in motion.</h2>
          </div>
          <div
            className="case-demo-frame"
            data-orientation={project.demoVideo.orientation ?? "portrait"}
          >
            <video controls playsInline preload="metadata" poster={project.demoVideo.poster}>
              <source src={project.demoVideo.src} />
              {project.demoVideo.captions ? (
                <track kind="captions" src={project.demoVideo.captions} srcLang="en" label="English" default />
              ) : null}
              Your browser does not support embedded video.
            </video>
          </div>
          {project.demoVideo.caption ? <p className="case-demo-caption">{project.demoVideo.caption}</p> : null}
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
