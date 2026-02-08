export default function ProjectDocs() {
  return (
    <div className="min-h-screen px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Task Notification Automation With n8n Cloud Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            This project automates sending reminder emails to task owners based on data stored in a Google Sheet. 
            It filters tasks that are pending, due, and not yet notified for the day, then emails each owner a 
            summary of their tasks. After sending, it updates the Google Sheet with the notification timestamp.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Reads task data from Google Sheets</li>
            <li>Filters tasks by status, due date, and notification status</li>
            <li>Sends personalized email reminders per user</li>
            <li>Updates Google Sheet to record notification timestamps</li>
            <li>Handles multiple tasks per user in a single email</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Setup Instructions</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Connect your Google Sheets account and point to your task tracker sheet.</li>
            <li>Connect your email provider credentials to n8n.</li>
            <li>Import the workflow JSON file into your n8n Cloud instance.</li>
            <li>Adjust sheet names, column names, and email sender details as needed.</li>
            <li>Activate the workflow to run on schedule or trigger manually.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>The workflow fetches tasks from Google Sheets.</li>
            <li>The JavaScript code node filters and groups tasks needing reminders.</li>
            <li>Each user receives one email listing their pending tasks.</li>
            <li>After sending emails, the workflow updates the Google Sheet rows with the current notification timestamp.</li>
            <li>The workflow supports multiple users and multiple tasks per user.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Code Snippet Example</h2>
          <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm text-gray-300">{`const today = new Date();
today.setHours(0, 0, 0, 0);

function parseDate(str) {
  return new Date(str);
}

const filteredTasks = {};

for (const item of items) {
  const status = item.json.Status?.toLowerCase() || "";
  const dueDate = parseDate(item.json["Due Date"]);
  const lastNotified = item.json["Last Notified"] ? new Date(item.json["Last Notified"]) : null;
  if (lastNotified) lastNotified.setHours(0, 0, 0, 0);
  
  if (
    status === "pending" &&
    dueDate <= today &&
    (!lastNotified || lastNotified < today)
  ) {
    const email = item.json.Email;
    if (!filteredTasks[email]) {
      filteredTasks[email] = {
        owner: item.json.Owner,
        email: email,
        tasks: []
      };
    }
    filteredTasks[email].tasks.push({
      task: item.json.Task,
      dueDate: item.json["Due Date"],
      rowNumber: item.json.row_number
    });
  }
}

const output = Object.values(filteredTasks).map(user => {
  let message = \`Hi \${user.owner},\\n\\nYou have \${user.tasks.length} pending task(s):\\n\\n\`;
  user.tasks.forEach((t, i) => {
    message += \`\${i + 1}. \${t.task}\\n   📅 Due: \${t.dueDate}\\n\\n\`;
  });
  message += "Please update your progress in the tracker.\\n\\nThank you! 🙏";
  
  return {
    json: {
      email: user.email,
      message,
      taskRows: user.tasks.map(t => t.rowNumber)
    }
  };
});

return output;`}</code>
          </pre>
        </section>
      </div>
    </div>
  );
}