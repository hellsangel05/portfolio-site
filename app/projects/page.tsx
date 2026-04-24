export default function Projects() {
  return (
    <>
      <header className="hero" style={{ paddingBottom: 40 }}>
        <div className="hero-label">Index / Projects 2026</div>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 128px)" }}>
          Things I&apos;ve <em>actually shipped</em>.
        </h1>
        <p style={{ maxWidth: "60ch", opacity: .8, marginTop: 32, borderTop: "1px solid var(--border)", paddingTop: 24, fontSize: 18 }}>
          A live company, a shipped automation, an in-progress AI concierge. I&apos;m intentionally honest about what&apos;s running and what&apos;s still in notebooks.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 20 }}>

        <div className="case">
          <div className="case-side">
            <span className="status live">Live</span>
            <div className="case-meta"><span>Year</span><strong>2025 — ongoing</strong></div>
            <div className="case-meta"><span>Role</span><strong>Co-founder</strong></div>
            <div className="case-meta"><span>Type</span><strong>AI-native agency</strong></div>
            <div className="case-meta"><span>Stack</span><strong>Next.js · Claude · Higgsfield · Blotato · GHL</strong></div>
          </div>
          <div className="case-body">
            <h2>ADGo <em>Studios</em></h2>
            <p className="lede">
              Co-founded an AI-native marketing agency. We don&apos;t add AI on top of a traditional workflow — AI <em>is</em> the workflow. Content ops, brand presence, client sites: all shipped AI-first.
            </p>
            <p>
              The thesis: small businesses need consistent content and a real online presence but can&apos;t afford a full creative team. We built a stack where one person, assisted by AI tools, does the work of a five-person agency — and the output is <em>honest about being AI-made</em>, not hiding it.
            </p>
            <p>
              I handle deployment (Vercel + Namecheap), site builds (Next.js via Claude Code), automation glue (n8n between Sheets, GHL, email), and most of the content pipeline (Higgsfield + CapCut for video, Blotato for scheduling).
            </p>
            <div className="tags">
              {["Next.js","Claude Code","n8n","Higgsfield","CapCut","Blotato","GoHighLevel","Vercel"].map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="links">
              <a href="https://adgostudio.com" target="_blank" rel="noopener noreferrer" className="primary">Visit site →</a>
            </div>
          </div>
        </div>

        <div className="case">
          <div className="case-side">
            <span className="status live">Shipped</span>
            <div className="case-meta"><span>Year</span><strong>2026</strong></div>
            <div className="case-meta"><span>Role</span><strong>Builder</strong></div>
            <div className="case-meta"><span>Type</span><strong>Workflow automation</strong></div>
            <div className="case-meta"><span>Stack</span><strong>n8n · Sheets · Gmail</strong></div>
          </div>
          <div className="case-body">
            <h2>Task <em>Notify</em></h2>
            <p className="lede">A small, useful n8n workflow: read pending tasks from a Google Sheet, group by owner, email each person a personalized digest, write the timestamp back.</p>
            <p>The kind of internal tool every team reinvents badly. I wrote it, documented it, and put the whole thing on GitHub — including the JavaScript node that does the dedup and grouping. Full write-up in the <a href="/project-docs" style={{ borderBottom: "1px solid currentColor" }}>docs</a>.</p>
            <div className="tags">
              {["n8n","Sheets API","Gmail","JavaScript"].map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="links">
              <a href="/project-docs" className="primary">Read docs →</a>
              <a href="https://github.com/hellsangel05/task-notification-automation" target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
          </div>
        </div>

        <div className="case">
          <div className="case-side">
            <span className="status wip">WIP</span>
            <div className="case-meta"><span>Year</span><strong>2026</strong></div>
            <div className="case-meta"><span>Role</span><strong>Solo</strong></div>
            <div className="case-meta"><span>Type</span><strong>AI concierge</strong></div>
            <div className="case-meta"><span>Stack</span><strong>Claude · n8n · Next.js</strong></div>
          </div>
          <div className="case-body">
            <h2>Angel&apos;s <em>AI</em></h2>
            <p className="lede">The chat bubble in the corner of this site. A concierge persona trained on my résumé — you can ask it about me instead of reading the whole page.</p>
            <p>The current build hits an n8n webhook that routes to Claude with a system prompt of my résumé context. Next iteration: proper RAG pipeline over my GitHub READMEs and project docs, so answers stay current when I ship new work — no redeploy needed.</p>
            <div className="tags">
              {["Claude","n8n","Next.js","RAG (planned)"].map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="links">
              <a href="/" className="primary">Try the bubble →</a>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
