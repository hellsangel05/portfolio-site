import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";
import { experiments, projects } from "./data/portfolio";

const capabilities = [
  {
    label: "Product",
    items: ["Product framing", "Feature design", "Rapid prototyping", "Product iteration"],
  },
  {
    label: "Build",
    items: ["Full-stack applications", "Responsive interfaces", "Data-backed products", "Deployment"],
  },
  {
    label: "AI workflows",
    items: ["Agentic development", "LLM integrations", "Image + video generation", "Automation"],
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker">Angel Gonzalez · Los Angeles</p>
          <h1 id="hero-title">
            <span>{"AI Product "}</span>
            <span className="hero-accent">Builder.</span>
          </h1>
          <p className="hero-dek">
            I turn ambitious product ideas into functional, deployed applications across AI,
            media, community, and creative technology.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <Link href="#work" className="button button-primary">Explore the work</Link>
            <a href="mailto:adgpublishings@gmail.com" className="text-link">Start a conversation <span>↗</span></a>
          </div>
        </div>

        <div className="hero-media" aria-label="Raidio product preview">
          <Image
            src="/projects/raidio-home.png"
            alt="Raidio homepage showing AI radio stations and station creation"
            fill
            priority
            loading="eager"
            sizes="(max-width: 800px) 100vw, 58vw"
          />
          <div className="hero-media-label">
            <span>Featured build</span>
            <strong>Raidio · AI radio network</strong>
          </div>
        </div>

        <dl className="proof-strip">
          <div><dt>Practice</dt><dd>AI-native product building</dd></div>
          <div><dt>Range</dt><dd>Web, mobile, creative systems</dd></div>
          <div><dt>Workflow</dt><dd>Concept → product → deployment</dd></div>
          <div><dt>Seeking</dt><dd>AI product + prototyping roles</dd></div>
        </dl>
      </section>

      <section className="intro section-shell" aria-labelledby="intro-title">
        <Reveal className="section-label"><span>01</span> The proposition</Reveal>
        <Reveal className="intro-copy">
          <h2 id="intro-title">The proof is in the products.</h2>
          <p>
            I use AI-assisted development as leverage: to explore more directions, close skill
            gaps quickly, and move from product logic to working software. The result is a growing
            portfolio of real systems—not pitch decks or speculative mockups.
          </p>
        </Reveal>
      </section>

      <section id="work" className="work-section" aria-labelledby="work-title">
        <div className="section-shell section-heading">
          <div className="section-label"><span>02</span> Featured work</div>
          <div>
            <h2 id="work-title">Products with a point of view.</h2>
            <p>Six builds selected for product range, technical depth, and visible execution.</p>
          </div>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal as="article" className="project-feature" key={project.slug}>
              <Link href={`/work/${project.slug}`} className="project-media" aria-label={`Read the ${project.name} case study`}>
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
                <span className="project-index">0{index + 1}</span>
              </Link>
              <div className="project-copy">
                <div className="project-meta">
                  <span>{project.status}</span>
                  <span>{project.category}</span>
                </div>
                <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
                <p className="project-positioning">{project.positioning}</p>
                <p className="project-summary">{project.summary}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.tech.slice(0, 5).map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-actions">
                  <Link href={`/work/${project.slug}`} className="text-link">Read case study <span>→</span></Link>
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-link muted-link">Live preview <span>↗</span></a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="about-section section-shell" aria-labelledby="about-title">
        <Reveal className="section-label"><span>03</span> About</Reveal>
        <div className="about-grid">
          <Reveal>
            <h2 id="about-title">An unconventional route. A practical advantage.</h2>
          </Reveal>
          <Reveal className="about-copy">
            <p className="lede">
              I currently work at Home Depot. Outside those hours, I co-founded ADGO Ventures and
              have been designing, building, and deploying products across multiple categories.
            </p>
            <p>
              Retail taught me to listen closely, explain clearly, work inside constraints, and
              notice where real people get stuck. Product building gives me a way to act on those
              instincts. I learn fast, use modern AI tools deliberately, and keep pushing until the
              idea becomes something another person can use.
            </p>
            <p>
              I am not positioning myself as a senior traditional engineer. I am a product-minded
              builder with substantial independent shipping experience, looking for an AI-forward
              team where initiative, range, and execution matter.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="capabilities-section section-shell" aria-labelledby="capabilities-title">
        <div className="section-label"><span>04</span> Capabilities</div>
        <div className="capabilities-heading">
          <h2 id="capabilities-title">From blank page to working system.</h2>
          <p>Skills inferred from the products and their architecture—not a wall of logos.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <Reveal className="capability-column" key={capability.label}>
              <h3>{capability.label}</h3>
              <ul>{capability.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </Reveal>
          ))}
        </div>
        <div className="technology-line" aria-label="Technologies used across the portfolio">
          TypeScript · JavaScript · React · Next.js · Expo · React Native · Python · Supabase ·
          PostgreSQL · Tailwind CSS · Vercel · OpenAI APIs · MediaPipe · PixiJS · Leaflet
        </div>
      </section>

      <section id="ventures" className="ventures-section" aria-labelledby="ventures-title">
        <div className="section-shell section-heading ventures-heading">
          <div className="section-label"><span>05</span> Ventures</div>
          <h2 id="ventures-title">Two vehicles for building.</h2>
        </div>
        <div className="venture-row">
          <div className="venture-number">A</div>
          <div>
            <p className="eyebrow">Product venture studio</p>
            <h3>ADGO Ventures</h3>
          </div>
          <p>
            The umbrella Angel co-founded with his partner to develop experimental software
            products—from AI radio and creator economies to sports analysis and collaborative
            networks.
          </p>
        </div>
        <div className="venture-row">
          <div className="venture-number">B</div>
          <div>
            <p className="eyebrow">Creative + automation business</p>
            <h3>ADGO Studios</h3>
          </div>
          <p>
            An AI-powered creative-services business exploring image and video generation,
            advertising systems, social content, lead capture, CRM infrastructure, and workflow
            automation.
          </p>
        </div>
      </section>

      <section id="experiments" className="experiments-section section-shell" aria-labelledby="experiments-title">
        <div className="section-label"><span>06</span> Additional experiments</div>
        <div className="experiments-wrap">
          <h2 id="experiments-title">Smaller builds, useful signals.</h2>
          <div className="experiment-list">
            {experiments.map((experiment) => (
              <Reveal className="experiment-row" key={experiment.name}>
                <div>
                  <span>{experiment.status}</span>
                  <h3>{experiment.name}</h3>
                </div>
                <p>{experiment.description}</p>
                {experiment.github ? (
                  <a href={experiment.github} target="_blank" rel="noreferrer" aria-label={`${experiment.name} on GitHub`}>↗</a>
                ) : <span aria-hidden="true">—</span>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="focus-section section-shell" aria-labelledby="focus-title">
        <div className="section-label"><span>07</span> Current focus</div>
        <Reveal className="focus-copy">
          <h2 id="focus-title">Ready to build inside a strong team.</h2>
          <p>
            I am pursuing AI product, product engineering, prototyping, and creative-technology
            roles where I can contribute quickly and keep growing alongside experienced builders.
          </p>
          <div className="focus-actions">
            <Link href="/resume" className="button button-primary">View resume</Link>
            <a href="https://github.com/hellsangel05" target="_blank" rel="noreferrer" className="button button-secondary">GitHub ↗</a>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <p className="eyebrow">Have a role, product, or prototype in mind?</p>
        <h2 id="contact-title">Let’s make it real.</h2>
        <a className="contact-email" href="mailto:adgpublishings@gmail.com">adgpublishings@gmail.com <span>↗</span></a>
      </section>
    </main>
  );
}
