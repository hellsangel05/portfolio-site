const projects = [
  {
    title: "Task notification automation with n8n Cloud",
    summary:
      "A reminder workflow that reads tasks from Google Sheets, groups them by owner, sends email summaries, and updates notification timestamps after delivery.",
    impact:
      "This project shows the kind of work I enjoy most: taking a repetitive follow-up process and making it more reliable.",
    stack: ["n8n", "Google Sheets", "JavaScript", "Email automation", "Webhooks"],
    primaryLink: {
      label: "Read documentation",
      href: "/project-docs",
    },
    secondaryLink: {
      label: "GitHub repo",
      href: "https://github.com/hellsangel05/task-notification-automation",
    },
  },
  {
    title: "Portfolio site rebuilt in Next.js",
    summary:
      "A personal site focused on honest positioning, shipped projects, and clear writing instead of inflated claims.",
    impact:
      "It demonstrates that I can iterate on product messaging, frontend implementation, deployment, and project presentation.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    primaryLink: {
      label: "Live site",
      href: "https://portfolio-site-green-xi.vercel.app",
    },
    secondaryLink: {
      label: "GitHub repo",
      href: "https://github.com/hellsangel05/portfolio-site",
    },
  },
];

const nextProjects = [
  "A small internal tool with authentication and persistent data",
  "A support-oriented dashboard that consumes an external API",
  "A documented automation project with stronger testing and failure handling",
];

export default function Projects() {
  return (
    <div className="space-y-20 pb-16">
      <section className="section-grid">
        <div>
          <p className="section-kicker">Projects</p>
          <h1 className="section-title">Selected work with clear business value.</h1>
        </div>
        <div className="space-y-5">
          <p className="section-copy">
            I am still early in my career, so I would rather show a smaller set
            of real projects than fill this page with placeholders. Each
            project here reflects the direction I want to keep building in:
            practical tools, useful automation, and clearer workflows.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        {projects.map((project) => (
          <article key={project.title} className="project-panel">
            <div className="project-header">
              <div className="space-y-4">
                <p className="panel-label">Case study</p>
                <h2 className="project-title">{project.title}</h2>
                <p className="feature-copy">{project.summary}</p>
              </div>
              <p className="project-impact">{project.impact}</p>
            </div>

            <div className="tag-row">
              {project.stack.map((item) => (
                <span key={item} className="role-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={project.primaryLink.href} className="button-primary">
                {project.primaryLink.label}
              </a>
              <a
                href={project.secondaryLink.href}
                className="button-secondary"
                target={project.secondaryLink.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.secondaryLink.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {project.secondaryLink.label}
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="feature-panel">
        <p className="panel-label">What I want to add next</p>
        <ul className="stack-list">
          {nextProjects.map((item) => (
            <li key={item} className="proof-item">
              <span className="proof-dot" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
