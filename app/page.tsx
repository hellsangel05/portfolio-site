export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-label">Portfolio / 2026 — Available for hire</div>
        <h1>
          Shipping with <em>AI</em>.<br />
          Learning by <em>building</em>.
        </h1>
        <div className="hero-sub">
          <p>
            I&apos;m Angel — pivoting from a decade in retail, security and operations into
            software that thinks. I prototype, automate and ship full-stack tools using
            Claude Code, Codex and Cursor as daily drivers. Looking for an AI-forward team
            where I can keep learning fast.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="meta-block"><span className="meta">Role</span><strong>Junior developer / automation</strong></div>
            <div className="meta-block"><span className="meta">Based in</span><strong>Los Angeles, CA</strong></div>
            <div className="meta-block"><span className="meta">Currently</span><strong>ADGo Studios — co-founder</strong></div>
            <div className="meta-block"><span className="meta">Open to</span><strong>Jr roles, AI-native teams</strong></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="section-num">01 / Practice</div>
          <div>
            <h2 className="section-title">What I <em>do</em>.</h2>
            <p style={{ maxWidth: "60ch", opacity: .7, marginTop: 16, fontSize: 16 }}>
              Workflow automation and AI integrations for real businesses. Not decks. Working systems that save someone an hour a day.
            </p>
          </div>
        </div>
        <div className="services">
          <div></div>
          <div className="service-list">
            {[
              ["001", "Workflow automation", "Custom n8n flows stringing sheets, CRMs, inboxes and APIs together. Quiet infrastructure that removes repetitive work.", "n8n · Webhooks · Sheets API"],
              ["002", "AI-native products", "Chat interfaces, content generators and internal tools built on Claude and OpenAI — with real retrieval and schema-validated outputs.", "Claude · OpenAI · Next.js"],
              ["003", "Marketing infrastructure", "ADGo Studios: AI-generated ads, content pipelines, client portals. Higgsfield, CapCut, Blotato and GoHighLevel in one stack.", "Higgsfield · Blotato · GHL"],
              ["004", "Sites that ship", "Next.js on Vercel, hand-tuned with Claude Code and Codex. Namecheap domains. Small surface, fast shipping.", "Next.js · Vercel · Tailwind"],
            ].map(([n, h, p, t]) => (
              <div className="service" key={n}>
                <div className="service-num">{n}</div>
                <div className="service-body"><h3>{h}</h3><p>{p}</p></div>
                <div className="service-tools">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-head">
          <div className="section-num">02 / Selected work</div>
          <h2 className="section-title">Projects, in <em>progress</em>.</h2>
        </div>
        <div className="projects">
          <a className="project" href="https://adgostudio.com" target="_blank" rel="noopener noreferrer">
            <div className="project-year">2025 —</div>
            <div className="project-title">ADGo Studios</div>
            <div className="project-desc">Co-founded AI-native marketing agency. Content pipelines, client sites, brand systems — all shipped with AI-first tooling.</div>
            <div className="project-tag">Company</div>
            <div className="project-arrow">→</div>
          </a>
          <a className="project" href="/project-docs">
            <div className="project-year">2026</div>
            <div className="project-title">Task Notify</div>
            <div className="project-desc">n8n workflow that reads Google Sheets, filters pending tasks by owner, emails personalized digests, writes back timestamps.</div>
            <div className="project-tag">Automation</div>
            <div className="project-arrow">→</div>
          </a>
          <a className="project" href="#">
            <div className="project-year">2026</div>
            <div className="project-title">Angel&apos;s AI</div>
            <div className="project-desc">Concierge chatbot on this site — answers visitor questions about my work, skills and availability. Try the bubble.</div>
            <div className="project-tag">AI · RAG</div>
            <div className="project-arrow">→</div>
          </a>
        </div>
      </section>

      <div className="tools">
        <div className="tools-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: "contents" }}>
              <span>Claude Code</span><span className="accent">·</span>
              <span><em>Codex</em></span><span className="accent">·</span>
              <span>n8n</span><span className="accent">·</span>
              <span><em>Next.js</em></span><span className="accent">·</span>
              <span>Vercel</span><span className="accent">·</span>
              <span><em>TypeScript</em></span><span className="accent">·</span>
              <span>Tailwind</span><span className="accent">·</span>
              <span><em>Cursor</em></span><span className="accent">·</span>
              <span>OpenAI</span><span className="accent">·</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section" id="story">
        <div className="section-head">
          <div className="section-num">03 / Story</div>
          <h2 className="section-title">A <em>practical</em> switch.</h2>
        </div>
        <div className="story">
          <div></div>
          <div className="story-body">
            <p className="lede">For a decade I worked floors most people never see — retail, security, pest control. I got good at watching systems break and quietly fixing them before anyone noticed.</p>
            <p>Around 2024 I realized the tools I was hacking together on weekends — n8n flows, chatbots, scrapers — had become my actual job description. I <em>wasn&apos;t</em> a retail manager who coded on the side. I was a builder who still had a day job.</p>
            <p>So I leaned in. Every new project is a proof: I can ship something end-to-end, with AI as a collaborator, fast. I&apos;m not claiming to be a senior engineer. I&apos;m claiming I&apos;ll close tickets faster than my résumé suggests.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Let&apos;s <em>build</em> something.</h2>
        <div className="contact-grid">
          <a href="mailto:adgpublishings@gmail.com" className="contact-card">
            <span className="cc-label">Email</span>
            <span className="cc-value">adgpublishings<br />@gmail.com</span>
          </a>
          <a href="tel:+18184470902" className="contact-card">
            <span className="cc-label">Phone</span>
            <span className="cc-value">(818) 447<br />—0902</span>
          </a>
          <a href="https://github.com/hellsangel05" target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="cc-label">GitHub</span>
            <span className="cc-value">@hellsangel05</span>
          </a>
          <a href="/resume.pdf" className="contact-card">
            <span className="cc-label">Résumé</span>
            <span className="cc-value">Download<br />PDF</span>
          </a>
        </div>
      </section>
    </>
  );
}
