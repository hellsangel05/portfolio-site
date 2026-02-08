export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="space-y-8">
        <div className="border p-6 rounded-lg bg-black shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Portfolio Website</h2>
          <p className="text-black-600 mb-4">
            This site — built with Next.js, deployed on Vercel with GitHub integration.
          </p>
          <div className="flex gap-4">
            <a href="https://portfolio-site-green-xi.vercel.app" 
               className="text-blue-600 hover:underline">Live Site</a>
            <a href="https://github.com/hellsangel05/portfolio-site" 
               className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      <div className="border p-6 rounded-lg bg-black shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Task Notification Automation With n8n Cloud</h2>
          <p className="text-white-600 mb-4">
            Automated task reminder system using n8n, Google Sheets, and email notifications — helps keep teams on track with pending tasks.
          </p>
          <div className="flex gap-4">
            <a href="/project-docs" 
               className="text-blue-600 hover:underline">Documentation</a>
            <a href="https://github.com/hellsangel05/task-notification-automation" 
               className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
        <div className="border p-6 rounded-lg bg-black shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Full-Stack App</h2>
          <p className="text-gray-600">Coming soon — building next.</p>
        </div>

        <div className="border p-6 rounded-lg bg-black shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">AI Tool</h2>
          <p className="text-gray-600">Coming soon.</p>
        </div>
      </div>
    </div>
  );
}