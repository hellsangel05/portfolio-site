export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Angel Gonzalez</h1>
      <p className="text-xl text-green-600 mb-8">
        Junior Software Engineer focused on system automations and AI-powered tools.
      </p>
      
      <div className="space-y-4">
        <p>
          I build practical tools and full-stack applications. Currently learning modern web development 
          and exploring AI integration.
        </p>
        <p>
          Check out my <a href="/projects" className="text-blue-600 hover:underline">projects</a> or 
          learn more <a href="/about" className="text-blue-600 hover:underline">about me</a>.
        </p>
      </div>
    </div>
  );
}