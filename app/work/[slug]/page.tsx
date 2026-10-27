import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FilmPlayer } from "../../components/FilmPlayer";
import { getNextProject, getProject, projects } from "../../data/portfolio";

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
      title: `${project.name} — Case study`,
      description: project.positioning,
      images: [{ url: project.image.src, alt: project.image.alt }],
    },
  };
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);
  const { film, films = [] } = project;

  return (
    <main className="case-page" style={{ "--project-accent": project.accent } as CSSProperties}>
      <header className="case-hero section-shell">
        <Link href="/#work" className="back-link">All projects</Link>
        <div className="case-title-row">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.name}</h1>
          </div>
          <p>{project.positioning}</p>
        </div>
        <div className="case-hero-media">
          <Image src={project.image.src} alt={project.image.alt} fill priority sizes="(max-width: 1600px) 100vw, 1600px" />
        </div>
        <dl className="case-facts">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Status</dt><dd>{project.status}</dd></div>
          <div><dt>Stack</dt><dd>{project.tech.join(" · ")}</dd></div>
          {project.live || project.github ? (
            <div className="case-facts-links">
              {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer" className="button button-primary">Visit website</a> : null}
              {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" className="button button-secondary">Source code</a> : null}
            </div>
          ) : null}
        </dl>
      </header>

      <section className="case-film section-shell" data-orientation={film.orientation} aria-labelledby="case-film-title">
        <div className="case-film-frame" data-orientation={film.orientation}>
          <FilmPlayer film={film} label={`${film.title} — ${project.name}`} />
        </div>
        <div className="case-film-copy">
          <p className="case-film-meta">{film.format}{film.runtime ? ` · ${film.runtime}` : ""}</p>
          <h2 id="case-film-title">{film.title}</h2>
          <p>{film.description}</p>
        </div>
      </section>

      <section className="case-story section-shell" aria-label="Project overview">
        <article>
          <h2>The problem</h2>
          <p>{project.problem}</p>
        </article>
        <article>
          <h2>The build</h2>
          <p>{project.built}</p>
        </article>
        <article>
          <h2>The challenge</h2>
          <p>{project.challenge}</p>
        </article>
      </section>

      <section className="case-details section-shell">
        <article>
          <h2>Features</h2>
          <ul>{project.working.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article>
          <h2>Key decisions</h2>
          <ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </section>

      {films.length ? (
        <section className="case-films section-shell" aria-labelledby="case-films-title">
          <h2 id="case-films-title">Other films</h2>
          <div className="case-films-grid">
            {films.map((item) => (
              <article className="case-films-card" data-orientation={item.orientation} key={item.title}>
                <div className="case-films-media">
                  <FilmPlayer film={item} label={`${item.title} — ${project.name}`} />
                </div>
                <div className="case-films-copy">
                  <p className="case-film-meta">{item.format}{item.runtime ? ` · ${item.runtime}` : ""}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <nav className="case-next section-shell" aria-label="Next project">
        <Link href={`/work/${next.slug}`} className="case-next-link" style={{ "--project-accent": next.accent } as CSSProperties}>
          <div className="case-next-copy">
            <span>Next project</span>
            <strong>{next.name}</strong>
            <p>{next.positioning}</p>
          </div>
          <div className="case-next-media">
            <Image src={next.image.src} alt="" fill sizes="(max-width: 800px) 100vw, 45vw" />
          </div>
        </Link>
        <div className="case-next-actions">
          <Link href="/#work" className="button button-secondary">All projects</Link>
          <a href="mailto:gonzalezangel0510@yahoo.com" className="button button-secondary">Contact Angel</a>
        </div>
      </nav>
    </main>
  );
}
