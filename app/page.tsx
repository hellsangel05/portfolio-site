import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";
import { ScrollSceneStage } from "./components/ScrollSceneStage";
import { experiments, projects } from "./data/portfolio";

const capabilities = [
  ["Product", "Framing, flows, feature systems, iteration"],
  ["Build", "Full-stack web, mobile prototypes, deployment"],
  ["AI", "Agentic workflows, model integrations, automation"],
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
            <p className="eyebrow home-hero-kicker">Angel Gonzalez / AI Product Builder / Los Angeles</p>
            <h1 id="hero-title">
              <span>{"I turn ideas into "}</span>
              <span className="hero-accent">working products.</span>
            </h1>
            <p className="home-hero-dek">
              I use AI-assisted development to design, build, and deploy full-stack products across
              media, creator tools, sports technology, community, and automation.
            </p>
            <div className="home-hero-actions" aria-label="Primary actions">
              <Link href="#work" className="button button-primary">See selected work</Link>
              <Link href="/resume" className="button button-ghost">View resume</Link>
            </div>
          </div>
          <div className="home-hero-footer">
            <p><span>Featured build</span> Raidio — shared AI radio, programmed as a real broadcast.</p>
            <p>Open to AI product, prototyping, and product engineering opportunities.</p>
          </div>
        </section>

        <section className="home-method scroll-scene-section section-shell" data-scene="method" aria-labelledby="method-title">
          <Reveal className="section-label"><span>01</span> How I work</Reveal>
          <div className="home-method-copy">
            <Reveal>
              <h2 id="method-title">The point is not to generate more ideas. It is to make one real.</h2>
            </Reveal>
            <Reveal>
              <p>
                I move between product strategy, interaction design, implementation, and deployment.
                AI accelerates the work; judgment holds the product together.
              </p>
            </Reveal>
            <div className="method-steps" aria-label="Product-building process">
              <div><span>01</span><strong>Frame</strong><p>Find the sharpest user problem and define the smallest credible product.</p></div>
              <div><span>02</span><strong>Build</strong><p>Turn flows and systems into a working web or mobile experience.</p></div>
              <div><span>03</span><strong>Learn</strong><p>Use the functional product to expose the next decision, risk, or opportunity.</p></div>
            </div>
          </div>
        </section>

        <section id="work" className="home-work scroll-scene-section" data-scene="work" aria-labelledby="work-title">
          <div className="home-work-heading section-shell">
            <div className="section-label"><span>02</span> Selected work</div>
            <div>
              <h2 id="work-title">Products, not pitch decks.</h2>
              <p>Six functional builds selected for range, technical depth, and product judgment.</p>
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
            <Reveal className="section-label"><span>03</span> The builder</Reveal>
            <div className="builder-story-grid">
              <Reveal>
                <h2 id="about-title">Retail is the day job. Product building is the trajectory.</h2>
              </Reveal>
              <Reveal className="builder-story-copy">
                <p className="lede">
                  Outside Home Depot, I co-founded ADGO Ventures and ADGO Studios and built a
                  portfolio of real software products with my partner.
                </p>
                <p>
                  The unconventional path is useful. Retail keeps me close to real customer
                  questions, unclear instructions, operational friction, and the difference between
                  a clever feature and something a person can actually use.
                </p>
                <p>
                  I am looking for a strong AI-forward team where range, initiative, product sense,
                  and the ability to ship are meaningful advantages.
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
            <div className="section-label"><span>04</span> Ventures</div>
            <h2 id="ventures-title">Two ways of taking ideas seriously.</h2>
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
              <p className="eyebrow">AI-native creative + growth systems</p>
              <h3>ADGO Studios</h3>
            </div>
            <div className="venture-story-copy">
              <p>
                A business Angel co-founded to help local service brands connect conversion-focused
                websites, advertising creative, campaigns, and AI-powered lead handling into one system.
              </p>
              <a href="https://adgostudios.com/" target="_blank" rel="noreferrer" className="text-link">
                Visit ADGO Studios <span>↗</span>
              </a>
            </div>
          </article>
        </section>

        <section id="experiments" className="home-experiments section-shell" aria-labelledby="experiments-title">
          <div className="section-label"><span>05</span> Additional experiments</div>
          <div className="home-experiments-content">
            <h2 id="experiments-title">Smaller builds. Useful signals.</h2>
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
          <p className="eyebrow">Have a role, product, or prototype in mind?</p>
          <h2 id="contact-title">Let&apos;s build what comes next.</h2>
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
