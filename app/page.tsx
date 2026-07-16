import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";
import { ScrollSceneStage } from "./components/ScrollSceneStage";
import { experiments, projects } from "./data/portfolio";

const capabilities = [
  ["Product", "Framing, flows, feature systems, iteration"],
  ["Build", "Full-stack web, mobile prototypes, deployment"],
  ["AI + automation", "Model integrations, image and video workflows, automation"],
];

export default function Home() {
  return (
    <main className="home-main">
      <ScrollSceneStage />
      <div className="home-content">
        <section className="home-hero scroll-scene-section" data-scene="hero" aria-labelledby="hero-title">
          <div className="home-hero-media" aria-hidden="true">
            <Image
              src="/projects/raidio-home.png"
              alt=""
              fill
              priority
              loading="eager"
              sizes="100vw"
            />
          </div>
          <div className="home-hero-scrim" />
          <div className="home-hero-content">
            <p className="eyebrow home-hero-kicker">Angel Gonzalez / Product Builder / Los Angeles</p>
            <h1 id="hero-title">
              <span>{"I design and build "}</span>
              <span className="hero-accent">software products.</span>
            </h1>
            <p className="home-hero-dek">
              Selected work across media, creator tools, sports technology, community platforms,
              and automation.
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
              <h2 id="work-title">Selected products.</h2>
              <p>Six builds across media, creator tools, sports technology, community, and creative systems.</p>
            </div>
          </div>

          <div className="work-stories">
            {projects.map((project, index) => (
              <article className="work-story" key={project.slug}>
                <Link href={`/work/${project.slug}`} className="work-story-media" aria-label={`Read the ${project.name} case study`}>
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="100vw"
                  />
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
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="builder-story scroll-scene-section" data-scene="story" aria-labelledby="about-title">
          <div className="builder-story-inner section-shell">
            <Reveal className="section-label"><span>02</span> About</Reveal>
            <div className="builder-story-grid">
              <Reveal>
                <h2 id="about-title">I build across product, design, and development.</h2>
              </Reveal>
              <Reveal className="builder-story-copy">
                <p className="lede">
                  I co-founded ADGO Ventures and ADGO Studios with my partner. Together we develop
                  software products and creative systems across several categories.
                </p>
                <p>
                  My work covers product framing, interaction design, full-stack development,
                  deployment, and iteration.
                </p>
                <p>
                  I am looking for a product team where I can contribute across disciplines and
                  continue growing as a builder.
                </p>
              </Reveal>
            </div>
            <div className="builder-capabilities">
              {capabilities.map(([label, description]) => (
                <div key={label}><span>{label}</span><p>{description}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="ventures" className="home-ventures scroll-scene-section" data-scene="ventures" aria-labelledby="ventures-title">
          <div className="home-ventures-heading section-shell">
            <div className="section-label"><span>03</span> Ventures</div>
            <h2 id="ventures-title">ADGO Ventures and ADGO Studios.</h2>
          </div>
          <article className="venture-story">
            <div className="venture-story-index">A</div>
            <div>
              <p className="eyebrow">Product venture studio</p>
              <h3>ADGO Ventures</h3>
            </div>
            <p>
              The venture umbrella Angel co-founded with his partner to develop experimental
              software—from AI radio and creator economies to sports analysis and collaborative networks.
            </p>
          </article>
          <article className="venture-story venture-story-linked">
            <div className="venture-story-index">B</div>
            <div>
              <p className="eyebrow">Creative + automation systems</p>
              <h3>ADGO Studios</h3>
            </div>
            <div className="venture-story-copy">
              <p>
                A business Angel co-founded to help local service brands connect conversion-focused
                websites, advertising creative, campaigns, and automated lead handling into one system.
              </p>
              <a href="https://adgostudios.com/" target="_blank" rel="noreferrer" className="text-link">
                Visit ADGO Studios <span>↗</span>
              </a>
            </div>
          </article>
        </section>

        <section id="experiments" className="home-experiments section-shell" aria-labelledby="experiments-title">
          <div className="section-label"><span>04</span> Additional experiments</div>
          <div className="home-experiments-content">
            <h2 id="experiments-title">Other projects.</h2>
            <div className="home-experiment-list">
              {experiments.map((experiment) => (
                <Reveal className="home-experiment-row" key={experiment.name}>
                  <div><span>{experiment.status}</span><h3>{experiment.name}</h3></div>
                  <p>{experiment.description}</p>
                  {experiment.github ? <a href={experiment.github} target="_blank" rel="noreferrer" aria-label={`${experiment.name} on GitHub`}>↗</a> : <span aria-hidden="true">—</span>}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="home-contact scroll-scene-section" data-scene="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Roles, products, and collaborations</p>
          <h2 id="contact-title">Let&apos;s talk.</h2>
          <div className="home-contact-actions">
            <a className="button button-primary" href="mailto:adgpublishings@gmail.com">Start a conversation</a>
            <Link href="/resume" className="button button-ghost">View resume</Link>
            <a href="https://github.com/hellsangel05" target="_blank" rel="noreferrer" className="button button-ghost">GitHub ↗</a>
          </div>
        </section>
      </div>
    </main>
  );
}
