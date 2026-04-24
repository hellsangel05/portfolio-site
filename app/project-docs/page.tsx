export default function ProjectDocs() {
  return (
    <>
      <header className="hero" style={{ paddingBottom: 40 }}>
        <div className="hero-label">Docs / Task Notify — 2026</div>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 128px)" }}>
          Task <em>Notify</em>.
        </h1>
        <p style={{ maxWidth: "64ch", opacity: .8, marginTop: 32, borderTop: "1px solid var(--border)", paddingTop: 24, fontSize: 18 }}>
          An n8n workflow that reads pending tasks from Google Sheets, groups them by owner, emails each person a personalized digest, then writes the timestamp back. Small surface, real utility.
        </p>
      </header>

      <div className="doc-wrap">
        <h2>The <em>problem</em></h2>
        <p>Every small team has the same Sheet: a list of tasks with owner, status and due date. And every small team has the same ritual: someone on Monday morning eyeballs the Sheet, copies due rows, and emails people. Thirty minutes a week, every week, forever.</p>
        <p>I built this to prove that writing the glue is a one-time cost — the rest is free.</p>

        <h2>The <em>workflow</em></h2>
        <p>Four nodes in n8n. Cron trigger, Sheets read, JavaScript transform, Gmail send. A final Sheets-update node stamps the row as notified.</p>
        <pre><code>{`Cron (Mon 9am PT)
  → Google Sheets · Read (Tasks sheet, all rows)
  → Code (Group by owner, filter status != "done", format digest)
  → Gmail · Send (per owner, HTML digest)
  → Google Sheets · Update (notified_at = now)`}</code></pre>

        <h3>The JavaScript node</h3>
        <p>The transform node is the only interesting part. It dedupes, groups, and generates the email bodies in one pass.</p>
        <pre><code>{`const tasks = items[0].json.rows;
const byOwner = {};

for (const t of tasks) {
  if (t.status === "done") continue;
  if (!byOwner[t.owner]) byOwner[t.owner] = [];
  byOwner[t.owner].push(t);
}

return Object.entries(byOwner).map(([owner, list]) => ({
  json: {
    to: list[0].email,
    subject: \`You have \${list.length} open task\${list.length > 1 ? "s" : ""}\`,
    body: list.map(t => \`• \${t.title} (due \${t.due})\`).join("\\n")
  }
}));`}</code></pre>

        <h2>What I <em>learned</em></h2>
        <ul>
          <li>n8n&apos;s <code>items</code> shape is easier to reason about once you stop treating each node as a function and start thinking in batches.</li>
          <li>Putting the transform in a Code node (vs. 6 chained Set/IF nodes) made the workflow 10× easier to debug.</li>
          <li>Writing timestamps back to the Sheet is the single highest-leverage detail — it makes the workflow idempotent and self-auditing.</li>
        </ul>

        <blockquote>The best automation is one you can forget exists and still trust.</blockquote>

        <h2>Where it&apos;s going</h2>
        <p>Next version: swap the Gmail node for a Slack DM path, add a weekly summary to whoever owns the Sheet, and route overdue tasks to a separate &ldquo;nag&rdquo; flow with escalating tone. (The tone escalation is a prompt-template bit — Claude writes a progressively more concerned email.)</p>
        <div className="links" style={{ marginTop: 32 }}>
          <a href="https://github.com/hellsangel05/task-notification-automation" target="_blank" rel="noopener noreferrer" className="primary">View on GitHub →</a>
          <a href="/projects">Back to projects ←</a>
        </div>
      </div>
    </>
  );
}
