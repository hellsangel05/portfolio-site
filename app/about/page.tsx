export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-white-900">About Me</h1>
        <p className="text-xl text-white-600">
          Automation specialist transitioning into full-stack development
        </p>
      </div>
      
      

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-black p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Email */}
          <a 
            href="mailto:adgpublishings@gmail.com"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg transition flex items-center gap-3"
          >
            <span className="text-2xl">📧</span>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm opacity-90">adgpublishings@gmail.com</div>
            </div>
          </a>

          {/* Phone */}
          <a 
            href="tel:+18184470902"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg transition flex items-center gap-3"
          >
            <span className="text-2xl">📱</span>
            <div>
              <div className="font-semibold">Phone</div>
              <div className="text-sm opacity-90">(818) 447-0902</div>
            </div>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/hellsangel05"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg transition flex items-center gap-3"
          >
            <span className="text-2xl">💻</span>
            <div>
              <div className="font-semibold">GitHub</div>
              <div className="text-sm opacity-90">@hellsangel05</div>
            </div>
          </a>

          {/* Resume */}
          <a 
            href="/resume.pdf"
            download="Angel_Gonzalez_Resume.pdf"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg transition flex items-center gap-3"
          >
            <span className="text-2xl">📄</span>
            <div>
              <div className="font-semibold">Resume</div>
              <div className="text-sm opacity-90">Download PDF</div>
            </div>
          </a>
        </div>

        <p className="text-center text-lg">
          *Available for automation projects and freelance work
        </p>
      {/* Story Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white-900">My Story</h2>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <p className="text-lg text-gray-700 mb-4">
            I'm currently transitioning from retail operations into tech, focusing on workflow automation and AI-powered solutions. I understand real business problems from years of hands-on experience, and now I build technical solutions to fix them.
          </p>
          <p className="text-lg text-gray-700">
            My approach combines business understanding with modern automation tools. I help small businesses eliminate repetitive tasks so they can focus on growth, while continuously learning full-stack development to expand what I can build.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white-900">Skills & Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Automation Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-900">🔧 Automation</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">n8n workflow automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">API integration & webhooks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">AI chatbot implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Business process optimization</span>
              </li>
            </ul>
          </div>

          {/* Development Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-900">💻 Development</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">▸</span>
                <span className="text-gray-700">JavaScript / TypeScript</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">▸</span>
                <span className="text-gray-700">React / Next.js</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">▸</span>
                <span className="text-gray-700">Git & GitHub</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">▸</span>
                <span className="text-gray-700">Vercel deployment</span>
              </li>
            </ul>
          </div>

          {/* AI Tools */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-900">🤖 AI Integration</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">●</span>
                <span className="text-gray-700">ChatGPT API</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">●</span>
                <span className="text-gray-700">Claude API</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">●</span>
                <span className="text-gray-700">AI-powered workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">●</span>
                <span className="text-gray-700">Prompt engineering</span>
              </li>
            </ul>
          </div>

          {/* Business Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-900">📊 Business</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">★</span>
                <span className="text-gray-700">Retail operations experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">★</span>
                <span className="text-gray-700">Process optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">★</span>
                <span className="text-gray-700">Client communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">★</span>
                <span className="text-gray-700">Problem-solving mindset</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
{/* What I'm Learning */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white-900">Currently Learning</h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200">
          <div className="flex flex-wrap gap-3">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              Advanced JavaScript
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              Database Integration
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              API Development
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              Full-Stack Architecture
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              Advanced n8n Workflows
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}