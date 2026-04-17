const features = [
  "Reads task data from Google Sheets",
  "Filters tasks by status, due date, and notification history",
  "Groups tasks by owner so each person receives one digest email",
  "Writes notification timestamps back to the sheet after delivery",
  "Keeps the workflow understandable for non-developers reviewing it later",
];

const setupSteps = [
  "Connect Google Sheets and point the workflow to the task tracker sheet.",
  "Connect an email provider in n8n Cloud.",
  "Import the workflow JSON into n8n and confirm field names match the sheet.",
  "Set the sender details and schedule or manual trigger.",
  "Run a test with sample tasks and verify that timestamps update correctly.",
];

const workflowSteps = [
  "Fetch task rows from Google Sheets.",
  "Use JavaScript logic to filter pending and due tasks.",
  "Group eligible tasks by email owner.",
  "Generate one summary message per owner.",
  "Send emails and record the notification time for the related rows.",
];

export default function ProjectDocs() {
  return (
    <div className="space-y-16 pb-16">
      <section className="section-grid">
        <div>
          <p className="section-kicker">Project documentation</p>
          <h1 className="section-title">
            Task notification automation with n8n Cloud
          </h1>
        </div>
        <div className="space-y-5">
          <p className="section-copy">
            This workflow automates reminder emails for pending tasks stored in
            Google Sheets. It identifies which tasks are due, groups them by
            owner, sends a single email per person, and updates the source sheet
            so the same task is not repeatedly notified on the same day.
          </p>
          <p className="section-copy">
            I included this writeup because documentation matters. A good
            project is not just something that runs once. It should also be
            understandable to the next person looking at it.
          </p>
        </div>
      </section>

      <section className="feature-grid">
        <article className="feature-panel">
          <p className="panel-label">Features</p>
          <ul className="stack-list">
            {features.map((item) => (
              <li key={item} className="proof-item">
                <span className="proof-dot" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="feature-panel">
          <p className="panel-label">Setup</p>
          <ol className="number-list">
            {setupSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>
      </section>

      <section className="feature-panel">
        <p className="panel-label">Workflow outline</p>
        <ol className="number-list">
          {workflowSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="feature-panel">
        <p className="panel-label">JavaScript example from the workflow</p>
        <pre className="code-block">
          <code>{`const today = new Date();
today.setHours(0, 0, 0, 0);

function parseDate(str) {
  return new Date(str);
}

const filteredTasks = {};

for (const item of items) {
  const status = item.json.Status?.toLowerCase() || "";
  const dueDate = parseDate(item.json["Due Date"]);
  const lastNotified = item.json["Last Notified"] ? new Date(item.json["Last Notified"]) : null;

  if (lastNotified) {
    lastNotified.setHours(0, 0, 0, 0);
  }

  if (status === "pending" && dueDate <= today && (!lastNotified || lastNotified < today)) {
    const email = item.json.Email;

    if (!filteredTasks[email]) {
      filteredTasks[email] = {
        owner: item.json.Owner,
        email,
        tasks: [],
      };
    }

    filteredTasks[email].tasks.push({
      task: item.json.Task,
      dueDate: item.json["Due Date"],
      rowNumber: item.json.row_number,
    });
  }
}

return Object.values(filteredTasks).map((user) => ({
  json: {
    email: user.email,
    taskRows: user.tasks.map((task) => task.rowNumber),
  },
}));`}</code>
        </pre>
      </section>
    </div>
  );
}
