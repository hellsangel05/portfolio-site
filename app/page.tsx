import Link from "next/link";
import { ProjectMedia } from "./components/ProjectMedia";
import { featuredProjects, moreProjects } from "./data/portfolio";

export default function Home() {
  return (
    <main className="job-home">
      <section className="job-hero section-shell" aria-labelledby="job-intro">
        <div>
          <p className="job-kicker"><span className="job-status-dot" /> Angel Gonzalez · Los Angeles, CA</p>
          <h1 id="job-intro">I build <em>software, websites, and AI workflows.</em></h1>
          <p className="job-lead">I develop web applications, create modern business websites, and implement AI-powered workflows from concept through deployment. My work spans front-end development, APIs, automation, and creative production.</p>
          <div className="job-actions">
            <Link className="button button-primary" href="#work">Explore my work </Link>
            <Link className="button button-secondary" href="/resume">View résumé</Link>
            <a href="https://github.com/hellsangel05" target="_blank" rel="noreferrer" className="job-simple-link">GitHub </a>
          </div>
        </div>
        <aside className="job-hero-aside" aria-label="Work areas">
          <p className="job-small-label">What I work on</p>
          <div className="job-aside-list">
            <p>Client websites</p>
            <p>Full-stack apps</p>
            <p>CRM &amp; automation</p>
            <p>Creative web platforms</p>
          </div>
          <p className="job-aside-end">I handle implementation, integrations, testing, and the refinements that make products ready for users.</p>
        </aside>
      </section>


      <section className="practice-pathways section-shell" aria-labelledby="practice-pathways-title">
        <div className="practice-pathways-heading">
          <p className="job-small-label">Where my work connects</p>
          <h2 id="practice-pathways-title">Software, marketing and creative production.</h2>
          <p>My work brings together web development, marketing technology, and content production—from the campaign and landing page to customer follow-up.</p>
        </div>
        <div className="practice-pathways-grid">
          <Link href="/ai-automation" className="practice-pathway-link">
            <span>AI &amp; Automation</span>
            <h3>Paid social. CRM workflows. AI reception. Websites.</h3>
            <p>Paid campaigns, lead intake, CRM setup, connected tools and implementation work.</p>
            <strong>Explore automation work</strong>
          </Link>
          <Link href="/creative-ai" className="practice-pathway-link">
            <span>Creative AI</span>
            <h3>Higgsfield. Ad creative. Storytelling. Video.</h3>
            <p>Higgsfield-powered commercials, ad creative, motion graphics, and original animation for PSYCH!.</p>
            <strong>Explore creative work</strong>
          </Link>
        </div>
      </section>

      <section id="work" className="job-section section-shell">
        <header className="job-section-intro">
          <div><p className="job-small-label">Selected work</p><h2>Selected projects</h2></div>
          <p>Client websites, business systems, and independent products.</p>
        </header>
        <div className="job-project-grid">
          {featuredProjects.map((project, index) => (
            <article className={"job-project-card job-card-" + index} key={project.slug}>
              <Link href={"/work/" + project.slug} className="job-project-art" aria-label={"Read about " + project.name}>
                <ProjectMedia project={project} priority={index === 0} sizes="(max-width: 700px) 100vw, 50vw" />
              </Link>
              <div className="job-project-info">
                <div className="job-project-meta"><span>{project.category}</span></div>
                <h3><Link href={"/work/" + project.slug}>{project.name}</Link></h3>
                <p>{project.summary}</p>
                <div className="job-project-links">
                  <Link href={"/work/" + project.slug}>Case study</Link>
                  {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer">Visit website</a> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="job-section section-shell job-more" aria-labelledby="job-more-title">
        <header className="job-section-intro">
          <div><p className="job-small-label">More work</p><h2 id="job-more-title">Other projects</h2></div>
          <p>Applications across music, sports, games, collaboration, and civic information.</p>
        </header>
        <div className="job-other-grid">
          {moreProjects.map(project => (
            <article className="job-other-card" key={project.slug}>
              <Link href={"/work/" + project.slug} className="job-other-art" aria-label={"Read about " + project.name}>
                <ProjectMedia project={project} sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 25vw" />
              </Link>
              <div className="job-other-info">
                <span>{project.category}</span>
                <h3><Link href={"/work/" + project.slug}>{project.name}</Link></h3>
                <p>{project.positioning}</p>
                <div className="job-more-links"><Link href={"/work/" + project.slug}>Case study</Link>{project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer">Visit website</a> : null}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="job-light">
        <div className="section-shell job-section">
          <header className="job-section-intro">
            <div><p className="job-small-label">What I can bring</p><h2>Skills & tools</h2></div>
            <p>Practical experience building interfaces, connecting APIs, deploying applications, running paid campaigns, and automating business workflows.</p>
          </header>
          <div className="job-skills">
            <article><h3>Web development</h3><p>Responsive sites, React and Next.js applications, APIs, hosting, debugging, and deployment.</p></article>
            <article><h3>Marketing &amp; business systems</h3><p>Paid social advertising (Meta Ads Manager), CRM implementation, lead capture, landing pages, AI phone reception, tracking and automation.</p></article>
            <article><h3>Creative AI</h3><p>Higgsfield video generation, ad production workflows, creative variations, copy, audio tools and technical troubleshooting.</p></article>
          </div>
          <p className="job-stack"><strong>Tools I've used:</strong> JavaScript, TypeScript, React, Next.js, Astro, Python, Supabase, PostgreSQL, GitHub, Vercel, Cloudflare, GoHighLevel, Meta Ads Manager, Higgsfield, ElevenLabs, and APIs.</p>
        </div>
      </section>

      <section id="experience" className="job-section section-shell">
        <header className="job-section-intro">
          <div><p className="job-small-label">Experience</p><h2>Websites, software, and client work</h2></div>
          <p>I build client websites and business systems through ADGO Studios and develop independent software products and digital experiences.</p>
        </header>
        <div className="job-experience-list">
          <article><div><span>Client projects</span><h3>ADGO Studios</h3></div><p>Co-founded ADGO Studios and built business websites, launched a Meta Ads campaign, developed Higgsfield-powered video commercials, implemented CRM workflows, and configured the Luna AI phone receptionist.</p></article>
          <article><div><span>Software development</span><h3>Independent applications</h3></div><p>Designed and built web and mobile applications across music, sports, games, and publishing. I work with AI-assisted development tools, code, external APIs, testing, and deployment to turn ideas into working systems.</p></article>
        </div>
      </section>

      <section id="about" className="job-about">
        <div className="section-shell job-about-grid">
          <div><p className="job-small-label">About</p><h2>Curious by nature. Technical by practice.</h2></div>
          <div>
            <p>I'm based in the San Fernando Valley. I started building my own software projects, then began applying the same skills to local businesses through ADGO Studios.</p>
            <p>I enjoy learning a new framework, tracing a bug, connecting an API, or working through a customer's problem until there's a practical solution.</p>
            <p>I'm interested in teams building practical software, intelligent workflows, digital products, and standout creative work.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="job-section job-contact section-shell">
        <p className="job-small-label">Contact</p>
        <h2>Let's talk.</h2>
        <p>Open to web development, technical implementation, AI workflows, creative technology, and related roles in Los Angeles or remote.</p>
        <div className="job-actions">
          <a className="button button-primary" href="mailto:gonzalezangel0510@yahoo.com">Email me </a>
          <Link className="button button-secondary" href="/resume">View résumé</Link>
          <a className="job-simple-link" href="https://github.com/hellsangel05" target="_blank" rel="noreferrer">GitHub </a>
        </div>
      </section>
    </main>
  );
}
