import Link from "next/link";
import { ProjectMedia } from "./components/ProjectMedia";
import { clientProjects, featuredProjects, moreProjects, type PortfolioProject } from "./data/portfolio";

function ProjectCard({ project, index, label, priority = false }: { project: PortfolioProject; index: number; label: string; priority?: boolean }) {
  return (
    <article className={"job-project-card job-card-" + index}>
      <Link href={"/work/" + project.slug} className="job-project-art" aria-label={"Read about " + project.name}>
        {project.image
          ? <ProjectMedia project={project} priority={priority} sizes="(max-width: 700px) 100vw, 50vw" />
          : <div className="job-project-art-text"><span>{project.category}</span><strong>{project.name}</strong><small>{label}</small></div>}
      </Link>
      <div className="job-project-info">
        <div className="job-project-meta"><span>{project.category}</span></div>
        <h3><Link href={"/work/" + project.slug}>{project.name}</Link></h3>
        <p>{project.summary}</p>
        <div className="job-project-links">
          <Link href={"/work/" + project.slug}>Case study</Link>
          {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer">Visit website</a> : null}
          {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer">Source code</a> : null}
        </div>
      </div>
    </article>
  );
}


export default function Home() {
  return (
    <main className="job-home">
      <section className="job-hero section-shell" aria-labelledby="job-intro">
        <div>
          <p className="job-kicker"><span className="job-status-dot" /> Angel Gonzalez · Applied AI developer · Los Angeles, CA</p>
          <h1 id="job-intro">I build AI products <em>from idea to deployed app.</em></h1>
          <p className="job-lead">I design and ship applied-AI software: LLM extraction pipelines, computer-vision measurement, and generative audio, built as full-stack Next.js and Python apps. Through ADGO Studios, I also set up AI phone reception, CRM automation, and websites for local businesses.</p>
          <p className="job-sub">I build with AI coding tools and take responsibility for the architecture, testing, and the decisions behind each product.</p>
          <div className="job-actions">
            <Link className="button button-primary" href="#work">See the AI projects </Link>
            <Link className="button button-secondary" href="/resume">View résumé</Link>
            <a href="https://github.com/hellsangel05" target="_blank" rel="noreferrer" className="job-simple-link">GitHub </a>
          </div>
        </div>
        <aside className="job-hero-aside" aria-label="Work areas">
          <p className="job-small-label">What I build</p>
          <div className="job-aside-list">
            <p><span>01</span> LLM pipelines</p>
            <p><span>02</span> Computer vision</p>
            <p><span>03</span> Full-stack apps</p>
            <p><span>04</span> AI for local businesses</p>
          </div>
          <p className="job-aside-end">I handle the product thinking, the build, the integrations, and the testing that makes an AI feature trustworthy.</p>
        </aside>
      </section>

      <section className="job-band">
        <div className="section-shell">
          <span>My approach</span>
          <p>Treat model output as a draft. Validate it. Show uncertainty. Ship what holds up.</p>
        </div>
      </section>


      <section id="work" className="job-section section-shell">
        <header className="job-section-intro">
          <div><p className="job-small-label">Selected work</p><h2>Applied-AI products</h2></div>
          <p>Products I designed and built end to end, with case studies on the architecture and the decisions behind them.</p>
        </header>
        <div className="job-project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard project={project} index={index} label={"Project / 0" + (index + 1)} priority={index === 0} key={project.slug} />
          ))}
        </div>
      </section>

      <section id="client-work" className="job-section section-shell" aria-labelledby="client-work-title">
        <header className="job-section-intro">
          <div><p className="job-small-label">Client work</p><h2 id="client-work-title">AI for local businesses</h2></div>
          <p>Through ADGO Studios, I set up voice AI, CRM workflows, websites, and paid campaigns for real businesses.</p>
        </header>
        <div className="job-project-grid">
          {clientProjects.map((project, index) => (
            <ProjectCard project={project} index={index + 1} label={"Client / 0" + (index + 1)} key={project.slug} />
          ))}
        </div>
      </section>

      <section className="practice-pathways section-shell" aria-labelledby="practice-pathways-title">
        <div className="practice-pathways-heading">
          <p className="job-small-label">More ways I use AI</p>
          <h2 id="practice-pathways-title">Business automation and creative AI.</h2>
          <p>From the ad and landing page to the AI receptionist that answers the call, plus AI video production for ADGO clients and my own animated series.</p>
        </div>
        <div className="practice-pathways-grid">
          <Link href="/ai-automation" className="practice-pathway-link">
            <span>01 / AI &amp; Automation</span>
            <h3>AI reception. CRM workflows. Paid social. Websites.</h3>
            <p>Voice AI setup, lead intake, CRM configuration, paid campaigns, and implementation work.</p>
            <strong>Explore automation work</strong>
          </Link>
          <Link href="/creative-ai" className="practice-pathway-link">
            <span>02 / Creative AI</span>
            <h3>Higgsfield. Ad creative. Storytelling. Video.</h3>
            <p>Higgsfield-powered commercials, ad creative, motion graphics, and original animation for PSYCH!.</p>
            <strong>Explore creative work</strong>
          </Link>
        </div>
      </section>

      <section className="job-section section-shell job-more" aria-labelledby="job-more-title">
        <header className="job-section-intro">
          <div><p className="job-small-label">More work</p><h2 id="job-more-title">Other projects</h2></div>
          <p>More full-stack apps across publishing, games, community, mapping, and creative technology.</p>
        </header>
        <div className="job-other-projects">
          {moreProjects.map(project => (
            <article key={project.slug}>
              <div><span>{project.category}</span><h3><Link href={"/work/" + project.slug}>{project.name}</Link></h3></div>
              <p>{project.positioning}</p>
              <div className="job-more-links"><Link href={"/work/" + project.slug}>Case study</Link>{project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer">Visit website</a> : null}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="job-light">
        <div className="section-shell job-section">
          <header className="job-section-intro">
            <div><p className="job-small-label">What I can bring</p><h2>Skills &amp; tools</h2></div>
            <p>Hands-on experience building AI features into real products, from the model call to the database, the interface, and deployment.</p>
          </header>
          <div className="job-skills">
            <article><h3>Applied AI</h3><p>LLM pipelines with Claude and OpenAI, structured output with schema validation, embeddings and vector search, MediaPipe computer vision, and AI voice and music generation.</p></article>
            <article><h3>Full-stack development</h3><p>Next.js, React, TypeScript, Python and FastAPI, Expo, Supabase and PostgreSQL with row-level security, APIs, testing, and deployment.</p></article>
            <article><h3>Business automation</h3><p>Voice AI receptionists, CRM implementation (GoHighLevel), lead capture, Meta Ads Manager, and AI video production with Higgsfield and ElevenLabs.</p></article>
          </div>
          <p className="job-stack"><strong>Tools I&apos;ve used:</strong> Claude, OpenAI, MediaPipe, ElevenLabs, TypeScript, JavaScript, Python, React, Next.js, Expo, FastAPI, Supabase, PostgreSQL, Zod, GitHub, Vercel, Cloudflare, GoHighLevel, Meta Ads Manager, and Higgsfield.</p>
        </div>
      </section>

      <section id="experience" className="job-section section-shell">
        <header className="job-section-intro">
          <div><p className="job-small-label">Experience</p><h2>Products and client work</h2></div>
          <p>I build AI products with a partner and apply the same skills to local businesses through ADGO Studios.</p>
        </header>
        <div className="job-experience-list">
          <article><div><span>Product development</span><h3>Applied-AI applications</h3></div><p>Designed and built web and mobile products with a partner: a Claude extraction pipeline with human review, a computer-vision jump-measurement engine, generative radio, and an embeddings-based idea network. On a two-person team I work across the whole stack, from product decisions to deployment.</p></article>
          <article><div><span>Client projects</span><h3>ADGO Studios</h3></div><p>Co-founded ADGO Studios. I configured the Luna AI phone receptionist, implemented CRM workflows, built business websites, launched a Meta Ads campaign, and produced Higgsfield-powered video commercials.</p></article>
        </div>
      </section>

      <section id="about" className="job-about">
        <div className="section-shell job-about-grid">
          <div><p className="job-small-label">About</p><h2>Curious by nature. Technical by practice.</h2></div>
          <div>
            <p>I&apos;m based in the San Fernando Valley. I started building my own software projects, then began applying the same skills to local businesses through ADGO Studios.</p>
            <p>I enjoy learning a new framework, tracing a bug, connecting an API, or working through a customer&apos;s problem until there&apos;s a practical solution.</p>
            <p>I&apos;m looking for a team that builds with AI, where I can ship products people actually use.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="job-section job-contact section-shell">
        <p className="job-small-label">Contact</p>
        <h2>Let&apos;s talk.</h2>
        <p>Open to applied-AI, AI implementation, solutions engineering, and full-stack roles in Los Angeles or remote.</p>
        <div className="job-actions">
          <a className="button button-primary" href="mailto:gonzalezangel0510@yahoo.com">Email me </a>
          <Link className="button button-secondary" href="/resume">View résumé</Link>
          <a className="job-simple-link" href="https://github.com/hellsangel05" target="_blank" rel="noreferrer">GitHub </a>
        </div>
      </section>
    </main>
  );
}
