const contactLinks = [
  {
    label: "Email",
    value: "adgpublishings@gmail.com",
    href: "mailto:adgpublishings@gmail.com",
  },
  {
    label: "Phone",
    value: "(818) 447-0902",
    href: "tel:+18184470902",
  },
  {
    label: "GitHub",
    value: "@hellsangel05",
    href: "https://github.com/hellsangel05",
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
  },
];

const strengths = [
  "Retail operations experience and customer-facing problem solving",
  "Workflow automation with n8n, APIs, webhooks, and AI tools",
  "Frontend work with Next.js, React, TypeScript, and Vercel",
  "Comfort writing documentation and explaining systems clearly",
];

const learningNow = [
  "API design and backend fundamentals",
  "Better testing habits for frontend and integration work",
  "More structured project architecture and data modeling",
  "How to turn prototypes into cleaner production-ready apps",
];

export default function About() {
  return (
    <div className="space-y-20 pb-16">
      <section className="section-grid">
        <div>
          <p className="section-kicker">About</p>
          <h1 className="section-title">A grounded transition into tech.</h1>
        </div>
        <div className="space-y-5">
          <p className="section-copy">
            I am moving into tech from a retail and operations background. That
            experience shaped how I think about software: the best tools reduce
            confusion, save time, and make a process easier for the person doing
            the work.
          </p>
          <p className="section-copy">
            My recent projects have focused on automation, integrations, and
            lightweight web apps. I use AI coding tools as part of my workflow,
            but I treat them as leverage, not a substitute for understanding.
            My job is still to define the problem, test the result, fix issues,
            and explain how the system works.
          </p>
          <p className="section-copy">
            I am especially interested in junior developer, automation,
            technical support, and implementation roles where I can contribute
            early while continuing to build stronger engineering fundamentals.
          </p>
        </div>
      </section>

      <section className="feature-grid">
        <article className="feature-panel">
          <p className="panel-label">Strengths</p>
          <ul className="stack-list">
            {strengths.map((item) => (
              <li key={item} className="proof-item">
                <span className="proof-dot" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="feature-panel">
          <p className="panel-label">What I am actively improving</p>
          <ul className="stack-list">
            {learningNow.map((item) => (
              <li key={item} className="proof-item">
                <span className="proof-dot" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="contact-panel">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Easy ways to reach me</h2>
        </div>
        <div className="contact-grid">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              download={link.label === "Resume" ? "Angel_Gonzalez_Resume.pdf" : undefined}
              className="contact-card"
            >
              <p className="panel-label">{link.label}</p>
              <p className="contact-value">{link.value}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
