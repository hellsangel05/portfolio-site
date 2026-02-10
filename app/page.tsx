export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Angel Gonzalez</h1>
        <p className="text-2xl text-white-700 mb-2">
          Automation Specialist & Aspiring Developer
        </p>
        <p className="text-lg text-white-600">
          Building AI-powered automations and workflow solutions for businesses
        </p>
      </div>

      {/* What I Do Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What I Do</h2>
        <p className="text-lg text-white-700 mb-6">
          I help small businesses eliminate repetitive tasks by building custom workflow automations using n8n, AI tools, and modern no-code platforms.
        </p>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-gray-900">🔄 Workflow Automation</h3>
            <p className="text-gray-600">Custom n8n workflows that connect your apps and automate processes</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-gray-900">🤖 AI Integration</h3>
            <p className="text-gray-600">Chatbots and AI-powered tools using ChatGPT and Claude APIs</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-gray-900">🔗 App Connectivity</h3>
            <p className="text-gray-600">Connect Google Sheets, Slack, CRMs, and other business tools</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-gray-900">💡 Consulting</h3>
            <p className="text-gray-600">Process automation strategy and implementation guidance</p>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Tools & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">n8n</span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">ChatGPT API</span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Claude API</span>
          <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Webhooks</span>
          <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
          <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">Next.js</span>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to automate your workflow?</h2>
        <p className="text-lg mb-6">
          Let's eliminate your repetitive tasks so you can focus on what matters.
        </p>
        <div className="flex gap-4">
          <a 
            href="/projects" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            View Projects
          </a>
          <a 
            href="/about" 
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}