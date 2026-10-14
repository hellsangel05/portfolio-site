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
          <p className="job-lead">I use AI-assisted development to build useful software, design websites, and connect the tools businesses run on. From idea to implementation, I like working across the whole process.</p>
          <p className="job-sub">My projects span full-stack applications, business automation, creative tools, and a story-driven publishing platform.</p>
          <div className="job-actions">
            <Link className="button button-primary" href="#work">Explore my work </Link>
            <Link className="button button-secondary" href="/resume">View résumé</Link>
            <a href="https://github.com/hellsangel05" target="_blank" rel="noreferrer" className="job-simple-link">GitHub </a>
          </div>
        </div>
        <aside className="job-hero-aside" aria-label="Work areas">
          <p className="job-small-label">What I work on</p>
          <div className="job-aside-list">
            <p><span>01</span> Client websites</p>
            <p><span>02</span> Full-stack apps</p>
            <p><span>03</span> CRM &amp; automation</p>
            <p><span>04</span> Creative web platforms</p>
          </div>
          <p className="job-aside-end">I take projects from an idea to something people can use, then work through the details that make them reliable.</p>
        </aside>
      </section>

      <section className="job-band">
        <div className="section-shell">
          <span>My approach</span>
          <p>Build the interface. Connect the systems. Test the result. Improve what matters.</p>
        </div>
      </section>

      <section id="work" className="job-section section-shell">
        <header className="job-section-intro">
          <div><p className="job-small-label">Selected work</p><h2>Selected projects</h2></div>
          <p>A selection of client work, business systems, and independent applications. Each case study explains the problem, implementation, and decisions behind it.</p>
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
            <div><p className="job-small-label">What I can bring</p><h2>Skills & tools</h2></div>
            <p>I work across code, creative AI tools, APIs, databases, and client-facing systems. I choose the tools that fit the problem, rather than treating any one stack as the answer.</p>
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
          <div><p className="job-small-label">Experience</p><h2>Websites, software, and client work</h2></div>
          <p>I work on client websites and business systems through ADGO Studios, alongside independent projects that explore different technical problems.</p>
        </header>
        <div className="job-experience-list">
          <article><div><span>Client projects</span><h3>ADGO Studios</h3></div><p>Co-founded a small web and creative studio. I work on business websites, client discovery, CRM workflows, AI reception, and the practical work of setting up and supporting services.</p></article>
          <article><div><span>Software development</span><h3>Independent applications</h3></div><p>Designed and built web and mobile applications across music, sports, games, and publishing. I work with AI-assisted development tools, code, external APIs, testing, and deployment to turn ideas into working systems.</p></article>
        </div>
      </section>

      <section id="about" className="job-about">
        <div className="section-shell job-about-grid">
          <div><p className="job-small-label">About</p><h2>I like understanding how things work.</h2></div>
          <div>
            <p>I'm based in the San Fernando Valley. I started building my own software projects, then began applying the same skills to local businesses through ADGO Studios.</p>
            <p>I enjoy learning a new framework, tracing a bug, connecting an API, or working through a customer's problem until there's a practical solution.</p>
            <p>I'm especially interested in teams that embrace AI-assisted workflows and give people the freedom to build, experiment, and solve problems.</p>
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
