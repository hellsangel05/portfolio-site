import Link from "next/link";
import { ProjectMedia } from "./components/ProjectMedia";
import Reveal from "./components/Reveal";
import { ScrollSceneStage } from "./components/ScrollSceneStage";
import { featuredProjects, moreProjects } from "./data/portfolio";

export default function Home() {
  return (
    <main className="home-main">
      <ScrollSceneStage />
      <div className="home-content">
        <section className="home-hero scroll-scene-section" data-scene="hero" aria-labelledby="hero-title">
          <div className="home-hero-scrim" />
          <div className="home-hero-content">
            <p className="eyebrow home-hero-kicker">Angel Gonzalez / Product-Minded Full-Stack Developer / Los Angeles</p>
            <h1 id="hero-title">
              <span>{"I design and build "}</span>
              <span className="hero-accent">software products.</span>
            </h1>
            <p className="home-hero-dek">
              I build AI-enabled web and mobile products from concept through deployment.
            </p>
            <div className="home-hero-actions" aria-label="Primary actions">
              <Link href="#work" className="button button-primary">See selected work</Link>
              <Link href="/resume" className="button button-ghost">View resume</Link>
            </div>
          </div>
        </section>

        <section id="work" className="home-work scroll-scene-section" data-scene="work" aria-labelledby="work-title">
          <div className="home-work-heading section-shell">
            <div className="section-label"><span>01</span> Selected work</div>
            <div>
              <h2 id="work-title">Product case studies.</h2>
              <p>A closer look at the products that best show my product thinking, design decisions, and full-stack implementation.</p>
            </div>
          </div>

          <div className="work-stories">
            {featuredProjects.map((project, index) => (
              <article className="work-story" key={project.slug}>
                <Link href={`/work/${project.slug}`} className="work-story-media" aria-label={`Read the ${project.name} case study`}>
                  <ProjectMedia project={project} priority={index === 0} sizes="100vw" />
                  <div className="work-story-shade" />
                  <span className="work-story-number">0{index + 1}</span>
                  <div className="work-story-title">
                    <p>{project.category}</p>
                    <h3>{project.name}</h3>
                  </div>
                </Link>
                <div className="work-story-caption section-shell">
                  <div className="work-story-status">{project.status}</div>
                  <p className="work-story-positioning">{project.positioning}</p>
                  <div className="work-story-detail">
                    <p>{project.summary}</p>
                    <div>
                      <Link href={`/work/${project.slug}`} className="text-link">Case study <span>→</span></Link>
                      {project.live ? <a href={project.live} target="_blank" rel="noreferrer" className="text-link muted-link">Live preview <span>↗</span></a> : null}
                      {project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="text-link muted-link">GitHub <span>↗</span></a> : null}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="more-work" className="home-more section-shell" aria-labelledby="more-work-title">
          <div className="home-more-heading">
            <div className="section-label"><span>02</span> More products</div>
            <div>
              <h2 id="more-work-title">More product work.</h2>
              <p>Additional shipped product systems, each with its own case study.</p>
            </div>
          </div>
          <div className="home-more-list">
            {moreProjects.map((project) => (
              <article className="home-more-row" key={project.slug}>
                <div className="home-more-meta">
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <Link href={`/work/${project.slug}`} className="home-more-name">
                  {project.name}<span aria-hidden="true">↗</span>
                </Link>
                <p>{project.positioning}</p>
                <div className="home-more-actions">
                  <Link href={`/work/${project.slug}`} className="text-link">Case study <span>→</span></Link>
                  {project.live ? <a href={project.live} target="_blank" rel="noreferrer" className="text-link muted-link">Live preview <span>↗</span></a> : null}
                  {project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="text-link muted-link">GitHub <span>↗</span></a> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="builder-story scroll-scene-section" data-scene="story" aria-labelledby="about-title">
          <div className="builder-story-inner section-shell">
            <Reveal className="section-label"><span>03</span> About</Reveal>
            <div className="builder-story-grid">
              <Reveal>
                <h2 id="about-title">I build across product, design, and development.</h2>
              </Reveal>
              <Reveal className="builder-story-copy">
                <p className="lede">
                  I co-founded ADGO Ventures and ADGO Studios with my partner. Together we build
                  software products and practical creative systems across several categories.
                </p>
                <p>
                  My work covers product framing, interaction design, full-stack development,
                  deployment, and iteration.
                </p>
                <p>
                  I am looking for a product-focused engineering team where I can contribute across
                  product, interface, and implementation.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="ventures" className="home-ventures scroll-scene-section" data-scene="ventures" aria-labelledby="ventures-title">
          <div className="home-ventures-heading section-shell">
            <div className="section-label"><span>04</span> Ventures</div>
            <h2 id="ventures-title">ADGO Ventures and ADGO Studios.</h2>
          </div>
          <div className="home-ventures-grid">
            <article className="venture-story">
              <div className="venture-story-index">A</div>
              <div>
                <p className="eyebrow">Independent product studio</p>
                <h3>ADGO Ventures</h3>
              </div>
              <p>
                The studio Angel co-founded with his partner to design and build products across
                media, creator tools, sports, civic technology, and community platforms.
              </p>
            </article>
            <article className="venture-story venture-story-linked">
              <div className="venture-story-index">B</div>
              <div>
                <p className="eyebrow">Creative systems studio</p>
                <h3>ADGO Studios</h3>
              </div>
              <div className="venture-story-copy">
                <p>
                  A creative and automation business connecting websites, campaign assets,
                  content production, lead capture, and operational workflows.
                </p>
                <a href="https://adgostudios.com/" target="_blank" rel="noreferrer" className="text-link">
                  Visit ADGO Studios <span>↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="home-contact scroll-scene-section" data-scene="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Roles, products, and collaborations</p>
          <h2 id="contact-title">Let&apos;s talk.</h2>
          <div className="home-contact-actions">
            <a className="button button-primary" href="mailto:gonzalezangel0510@yahoo.com">Start a conversation</a>
            <Link href="/resume" className="button button-ghost">View resume</Link>
            <a href="https://github.com/hellsangel05" target="_blank" rel="noreferrer" className="button button-ghost">GitHub ↗</a>
          </div>
        </section>
      </div>
    </main>
  );
}
