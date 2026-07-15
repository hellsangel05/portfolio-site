import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
      images: [{ url: project.image.src, alt: project.image.alt }],
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
        <Link href="/#work" className="back-link">← All work</Link>
        <div className="case-title-row">
          <div>
            <p className="eyebrow">{project.category} · {project.status}</p>
            <h1>{project.name}</h1>
          </div>
          <p>{project.positioning}</p>
        </div>
        <div className="case-hero-media">
          <Image src={project.image.src} alt={project.image.alt} fill priority loading="eager" sizes="100vw" />
        </div>
        {project.demoNote ? <p className="demo-note"><strong>Demo note:</strong> {project.demoNote}</p> : null}
      </header>

      <section className="case-overview section-shell" aria-label="Project overview">
        <div><span>Role</span><p>{project.role}</p></div>
        <div><span>Current status</span><p>{project.status}</p></div>
        <div><span>Technology</span><p>{project.tech.join(" · ")}</p></div>
        <div className="case-overview-actions">
          {project.live ? <a href={project.live} target="_blank" rel="noreferrer" className="button button-primary">Open live preview ↗</a> : <span>Demo available by walkthrough</span>}
        </div>
      </section>

      <section className="case-story section-shell">
        <div className="case-story-index">Product thinking</div>
        <div className="case-story-content">
          <article>
            <span>01</span>
            <h2>The opportunity</h2>
            <p>{project.problem}</p>
          </article>
          <article>
            <span>02</span>
            <h2>What I built</h2>
            <p>{project.built}</p>
          </article>
          <article>
            <span>03</span>
            <h2>The hard part</h2>
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
          <p className="eyebrow">What works now</p>
          <h2>A real product surface.</h2>
          <ul>{project.working.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <p className="eyebrow">Important decisions</p>
          <h2>Designed around the risk.</h2>
          <ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <p className="eyebrow">What comes next</p>
          <h2>Honest next steps.</h2>
          <ul>{project.next.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>

      <section className="case-cta">
        <p className="eyebrow">More product work</p>
        <h2>Explore the full portfolio.</h2>
        <div>
          <Link href="/#work" className="button button-primary">All featured work</Link>
          <a href="mailto:adgpublishings@gmail.com" className="button button-secondary">Contact Angel</a>
        </div>
      </section>
    </main>
  );
}
