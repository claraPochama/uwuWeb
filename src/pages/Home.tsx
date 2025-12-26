function Home() {
  return (
    <>
      <section id="intro" className="section">
        <div className="section-card hero">
          <p className="eyebrow">Left rail, right story</p>
          <h1>Make navigation feel like a control panel.</h1>
          <p className="lede">
            Fixed on the left, your buttons keep every section a single click
            away. The content stays bold, airy, and easy to scan.
          </p>
          <div className="hero-actions">
            <a className="cta" href="#features">See how it works</a>
            <a className="ghost" href="#projects">Jump to projects</a>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-card">
          <h2>Features that keep it clean</h2>
          <ul className="feature-grid">
            <li>
              <h3>Fixed left rail</h3>
              <p>Always visible, never in the way.</p>
            </li>
            <li>
              <h3>Section anchors</h3>
              <p>Smooth jumps with clear labels.</p>
            </li>
            <li>
              <h3>Bold typography</h3>
              <p>Big, confident headings that guide the eye.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-card">
          <h2>Highlighted sections</h2>
          <div className="panel-grid">
            <article>
              <h3>Motion Lab</h3>
              <p>Responsive layouts with smooth scroll behavior.</p>
            </article>
            <article>
              <h3>Color Systems</h3>
              <p>Layered gradients and soft glass surfaces.</p>
            </article>
            <article>
              <h3>Type Studio</h3>
              <p>Expressive fonts tuned for readability.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-card contact">
          <h2>Ready for more sections?</h2>
          <p>
            Add a new section and drop in another button on the left to keep
            everything one tap away.
          </p>
          <a className="cta" href="#intro">Back to top</a>
        </div>
      </section>
    </>
  )
}

export default Home
