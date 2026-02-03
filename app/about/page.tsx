export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="space-y-6">
        <p>
          I'm a junior software engineer learning full-stack development, systems programming, 
          and AI integration.
        </p>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Git & GitHub</li>
            <li>Vercel deployment</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            <a href="https://github.com/hellsangel05" 
               className="text-blue-600 hover:underline">GitHub</a>
          </p>
          <p>
  <a href="/resume.pdf" 
     className="text-blue-600 hover:underline"
     download>
    Download Resume (PDF)
  </a>
</p>
        </div>
      </div>
    </div>
  );
}