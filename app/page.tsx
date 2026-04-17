const targetRoles = [
  "Junior developer",
  "Automation specialist",
  "Technical support engineer",
  "Implementation specialist",
];

const strengths = [
  {
    title: "Business context first",
    body: "My retail background taught me how work actually breaks in the real world: unclear handoffs, repeated follow-up, and manual tracking that steals time.",
  },
  {
    title: "AI-assisted, outcome-owned",
    body: "I use tools like Codex and Claude Code to move faster, but I still own the debugging, deployment, testing, and iteration that make projects usable.",
  },
  {
    title: "Comfortable with messy workflows",
    body: "I enjoy turning repetitive processes into something simpler, whether that means connecting tools, writing frontend code, or documenting how the system works.",
  },
];

const proofPoints = [
  "Built and deployed a Next.js portfolio on Vercel",
  "Created workflow automations using n8n, webhooks, and AI APIs",
  "Documented project setup and system behavior for non-technical users",
];

export default function Home() {
  return (
    <div className="space-y-24 pb-16">
      <section className="hero-shell">
        <div className="hero-grid">
          <div className="space-y-8">
            <p className="eyebrow">Angel Gonzalez</p>
            <div className="space-y-5">
              <h1 className="hero-title">
                Transitioning from retail operations into tech through practical
                automation work.
              </h1>
              <p className="hero-copy">
                I build small, useful systems with Next.js, n8n, APIs, and
                AI-assisted development. I am looking for an entry-level role
                where I can keep learning, contribute quickly, and grow into a
                stronger engineer.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/projects" className="button-primary">
                View projects
              </a>
              <a href="/about" className="button-secondary">
                Read my story
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {targetRoles.map((role) => (
                <span key={role} className="role-pill">
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="proof-panel">
            <p className="panel-label">What I can already point to</p>
            <ul className="space-y-4">
              {proofPoints.map((point) => (
                <li key={point} className="proof-item">
                  <span className="proof-dot" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="panel-note">
              My edge is not a traditional CS path. It is being close to the
              operational problems and building tools that reduce friction.
            </p>
          </div>
        </div>
      </section>

      <section className="section-grid">
        <div>
          <p className="section-kicker">Why this portfolio is different</p>
          <h2 className="section-title">
            I am not trying to look senior. I am trying to look dependable.
          </h2>
        </div>
        <div className="space-y-6">
          <p className="section-copy">
            The goal of this site is to show how I think, what I have built so
            far, and how I approach learning. I would rather be specific about
            what I know than make big claims that are hard to back up.
          </p>
          <p className="section-copy">
            I work best on problems involving process improvement, automation,
            support, implementation, and the kind of frontend or integration
            work that helps a team move faster.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="section-grid">
          <div>
            <p className="section-kicker">Working style</p>
            <h2 className="section-title">What I bring to a team</h2>
          </div>
        </div>
        <div className="feature-grid">
          {strengths.map((strength) => (
            <article key={strength.title} className="feature-panel">
              <p className="panel-label">{strength.title}</p>
              <p className="feature-copy">{strength.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <div>
          <p className="section-kicker">Next step</p>
          <h2 className="section-title">See the projects and the reasoning.</h2>
        </div>
        <div className="cta-panel">
          <p className="section-copy">
            The strongest proof on this site is in the project writeups. I break
            down the problem, the tools, the tradeoffs, and what I would improve
            next.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/projects" className="button-primary">
              Go to projects
            </a>
            <a href="/project-docs" className="button-secondary">
              Read documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
