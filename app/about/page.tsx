export default function About() {
  return (
    <>
      <header className="hero" style={{ paddingBottom: 40 }}>
        <div className="hero-label">About / Angel</div>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 128px)" }}>
          A practical <em>switch</em>.
        </h1>
      </header>

      <section className="section" id="timeline">
        <div className="section-head">
          <div className="section-num">04 / Trajectory</div>
          <h2 className="section-title">How I got <em>here</em>.</h2>
        </div>
        <div className="timeline">
          <div></div>
          <div className="tl-list">
            <div className="tl-item">
              <div className="tl-year">2026 —</div>
              <div className="tl-body">
                <h4>Co-founder · ADGo Studios</h4>
                <p>AI-native marketing agency. Content, client sites, managed brand presence.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-year">2025</div>
              <div className="tl-body">
                <h4>Independent automation projects</h4>
                <p>n8n workflows, AI chatbots, Next.js portfolio. First shipped projects on GitHub.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-year">2022–2024</div>
              <div className="tl-body">
                <h4>Operations — pest control, security, retail</h4>
                <p>Learned how real small businesses operate. Got obsessed with removing busywork.</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-year">Before</div>
              <div className="tl-body">
                <h4>Retail ops, customer service</h4>
                <p>The ground floor. Where I learned what &ldquo;works&rdquo; actually means.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
