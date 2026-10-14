import Link from "next/link";
import { ProjectMedia } from "./components/ProjectMedia";
import { featuredProjects, moreProjects } from "./data/portfolio";

export default function Home() {
  return (
    <main className="job-home">
      <section className="job-hero section-shell" aria-labelledby="job-intro">
        <div>
          <p className="job-kicker"><span className="job-status-dot" /> Angel Gonzalez · Los Angeles, CA</p>
          <h1 id="job-intro">I build things and figure out how to <em>make them work.</em></h1>
          <p className="job-lead">Websites, applications, and automations. I've built projects for businesses and for myself, learning new tools and solving problems along the way.</p>
          <p className="job-sub">I'm looking for a chance to grow in tech: web development, technical support, implementation, or operations.</p>
          <div className="job-actions">
            <Link className="button button-primary" href="#work">Explore my work ↘</Link>
            <Link className="button button-secondary" href="/resume">View résumé</Link>
            <a href="https://github.com/hellsangel05" target="_blank" rel="noreferrer" className="job-simple-link">GitHub ↗</a>
          </div>
        </div>
        <aside className="job-hero-aside" aria-label="Work areas">
          <p className="job-small-label">Where I've been putting in the work</p>
          <div className="job-aside-list">
            <p><span>01</span> Client websites</p>
            <p><span>02</span> Full-stack apps</p>
            <p><span>03</span> CRM &amp; automation</p>
            <p><span>04</span> Creative web platforms</p>
          </div>
          <p className="job-aside-end">Curious by nature. Comfortable learning as I go.</p>
        </aside>
      </section>

      <section className="job-band">
        <div className="section-shell">
          <span>The short version</span>
          <p>Customer-facing experience, practical technical work, and a growing body of things I've built.</p>
        </div>
      </section>

      <section id="work" className="job-section section-shell">
        <header className="job-section-intro">
          <div><p className="job-small-label">Selected work</p><h2>Projects with a story behind them.</h2></div>
          <p>Business websites, a publishing platform, and software experiments. The case studies explain what I worked on, the decisions made, and what comes next.</p>
        </header>
        <div className="job-project-grid">
          {featuredProjects.map((project, index) => (
            <article className={"job-project-card job-card-" + index} key={project.slug}>
              <Link href={"/work/" + project.slug} className="job-project-art" aria-label={"Read about " + project.name}>
                {project.image
                  ? <ProjectMedia project={project} priority={index === 0} sizes="(max-width: 700px) 100vw, 50vw" />
                  : <div className="job-project-art-text"><span>{project.category}</span><strong>{project.name}</strong><small>Project / 0{index + 1}</small></div>}
              </Link>
              <div className="job-project-info">
                <div className="job-project-meta"><span>{project.category}</span><span>{project.status}</span></div>
                <h3><Link href={"/work/" + project.slug}>{project.name}</Link></h3>
                <p>{project.summary}</p>
                <div className="job-project-links">
                  <Link href={"/work/" + project.slug}>Case study ↗</Link>
                  {project.live && project.demoAvailable !== false ? <a href={project.live} target="_blank" rel="noreferrer">Visit site ↗</a> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="job-section section-shell job-more" aria-labelledby="job-more-title">
        <header className="job-section-intro">
          <div><p className="job-small-label">Other builds</p><h2 id="job-more-title">More projects, different problems.</h2></div>
          <p>Each one taught me something different about building software, debugging, or turning an idea into a usable interface.</p>
        </header>
        <div className="job-other-projects">
          {moreProjects.map(project => (
            <article key={project.slug}>
              <div><span>{project.category}</span><h3><Link href={"/work/" + project.slug}>{project.name}</Link></h3></div>
              <p>{project.positioning}</p>
              <Link className="job-more-arrow" href={"/work/" + project.slug} aria-label={"Read " + project.name + " case study"}>↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="job-light">
        <div className="section-shell job-section">
          <header className="job-section-intro">
            <div><p className="job-small-label">What I can bring</p><h2>Useful skills, not just a list of tools.</h2></div>
            <p>My strongest experience comes from doing the work: connecting services, testing websites, handling technical problems, and communicating with people.</p>
          </header>
          <div className="job-skills">
            <article><h3>Web development</h3><p>Responsive sites, React and Next.js applications, APIs, hosting, debugging, and deployment.</p></article>
            <article><h3>Business systems</h3><p>CRM setup, contact forms, automated follow-up, voice agents, and handoffs between services.</p></article>
            <article><h3>Troubleshooting</h3><p>Working through unfamiliar systems, reproducing problems, testing fixes, and helping users find their next step.</p></article>
          </div>
          <p className="job-stack"><strong>Tools I've used:</strong> JavaScript, TypeScript, React, Next.js, Astro, Python, Supabase, PostgreSQL, GitHub, Vercel, Cloudflare, GoHighLevel, and APIs.</p>
        </div>
      </section>

      <section id="experience" className="job-section section-shell">
        <header className="job-section-intro">
          <div><p className="job-small-label">Experience</p><h2>Building alongside a day job.</h2></div>
          <p>My path hasn't been a traditional computer-science degree or an engineering job. I've learned through projects while working in retail and hands-on service roles.</p>
        </header>
        <div className="job-experience-list">
          <article><div><span>Current</span><h3>ADGO Studios</h3></div><p>Co-founded a small web and creative studio. I work on business websites, client discovery, CRM workflows, AI reception, and the practical work of setting up and supporting services.</p></article>
          <article><div><span>Ongoing</span><h3>Independent projects</h3></div><p>Built web and mobile prototypes across music, games, sports, and publishing. I use AI coding tools when they're helpful, but stay involved in planning, testing, troubleshooting, and iteration.</p></article>
          <article><div><span>Current</span><h3>The Home Depot</h3></div><p>Help customers troubleshoot hardware, plumbing, and electrical needs. I work across departments, learn product information quickly, and explain options in English and Spanish.</p></article>
        </div>
      </section>

      <section id="about" className="job-about">
        <div className="section-shell job-about-grid">
          <div><p className="job-small-label">About</p><h2>I didn't start in tech. I started building anyway.</h2></div>
          <div>
            <p>I'm based in the San Fernando Valley. My background is in retail and field work, but I've been using my free time to learn how to build and deploy software. I started with ideas of my own, then began applying those skills to real business needs.</p>
            <p>I enjoy figuring out systems I haven't used before. That might mean learning a framework, connecting a CRM, reviewing code, debugging a deployment, or sitting with someone to understand what they actually need.</p>
            <p>I'm looking for a team where I can contribute, learn from more experienced people, and turn this work into a long-term career.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="job-section job-contact section-shell">
        <p className="job-small-label">Contact</p>
        <h2>I'd like to work on what's next.</h2>
        <p>Open to entry-level opportunities in web development, implementation, IT support, and technical operations in Los Angeles or remote.</p>
        <div className="job-actions">
          <a className="button button-primary" href="mailto:gonzalezangel0510@yahoo.com">Email me ↗</a>
          <Link className="button button-secondary" href="/resume">View résumé</Link>
          <a className="job-simple-link" href="https://github.com/hellsangel05" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>
    </main>
  );
}
