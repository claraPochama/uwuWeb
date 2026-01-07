import ProjectCard from '../components/ProjectCard'

function Home() {
  return (
    <>
      <section id="intro" className="section">
        <div className="section-card hero">
          <h2 className="lede">About</h2>
          <p>
            This portfolio showcases my interest in building and exploring
            tools, workflows, and visual systems that support production
            pipeline. Across interactive projects, system-focused coursework,
            and visual experiments, I focus on understanding constraints,
            structuring complexity, and translating creative intent into
            technical solutions.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-card">
          <h2>Projects</h2>
          <h4>My projects are focusing on designing structured systems and tools 
            that operate within real-world production constraints.</h4>

          <section id="project_1" className="section">            
              <ProjectCard
                title="Project 01 - Multi-Currency Banking System"
                tags={["Python", "Object-Oriented Design", "System Tooling"]}
                link={{
                  href: "https://github.com/claraPochama/pythonOOP/tree/main/Coding%20Project-Banking%20System",
                  label: "GitHub repository",
                  alt: "Multi-Currency Banking System repository",
                  thumbnail:
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><rect width='72' height='72' rx='16' fill='%231f1a17'/><text x='36' y='44' font-family='Arial' font-size='22' fill='white' text-anchor='middle'>GH</text></svg>"
                }}
                sections={[
                  {
                    title: "Problem",
                    bullets: [
                      "Managing multiple users, currencies, and transactions within a state-driven system.",
                      "Ensuring data consistency while supporting multiple user actions and system updates."
                    ]
                  },
                  {
                    title: "Constraints",
                    bullets: [
                      "Console-based interaction with linear user flow.",
                      "No persistent storage or external frameworks.",
                      "Multiple currencies requiring index-aligned state management."
                    ]
                  },
                  {
                    title: "Approach",
                    bullets: [
                      "Seperated system-level control (Accounts) and user-level data handling (User).",
                      "Modelled currencies, balances, and transaction history using structured data relationships.",
                      "Centralised validation and routing logic to prevent state corruption and reduce complexity."
                    ]
                  },
                  {
                    title: "Outcome",
                    bullets: [
                      "Delivered a system that supports additional features and extensible.",
                      "Enabled state changes such as currency conversion, fee calculation, and history tracking.",
                      "Applied object-oriented prgramming concept to production-facing systems."
                    ]
                  }
                ]}
              />
            
          </section>
          

          <section id="project_2" className="section">
            
              <ProjectCard
                title="Project 02 - D&D Campaign Concept Website"
                tags={["JavaScript", "Responsive Web Design", "Creative Concept Design"]}
                link={{
                  href: "https://github.com/claraPochama/Concept-Website_Sors-Tali",
                  label: "GitHub repository",
                  alt: "D&D Campaign Concept Website repository",
                  thumbnail:
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><rect width='72' height='72' rx='16' fill='%231f1a17'/><text x='36' y='44' font-family='Arial' font-size='22' fill='white' text-anchor='middle'>GH</text></svg>"
                }}
                sections={[
                  {
                    title: "Problem",
                    bullets: [
                      "Translating a  narrative world into a structured, navigable platform.",
                      "Balancing creative storytelling with usability and interactive logic."
                    ]
                  },
                  {
                    title: "Constraints",
                    bullets: [
                      "Narrative-heavy content requiring clear information hierarchy.", 
                      "Front-end only, client-side execution.",
                      "Must remain accessible, responsive, and easy to navigate.",
                    ]
                  },
                  {
                    title: "Approach",
                    bullets: [
                      "Structured the pages around consistent layout and semantic hierarchy.",
                      "Implemented JavaScript interactive features for a quote calculator and shopping workflow.",
                      "Treated narrative elements as modular components within an interactive pipeline."
                    ]
                  },
                  {
                    title: "Outcome",
                    bullets: [
                      "Produced a structured interactive platform supporting creative presentation and functional interaction.",
                      "Improved user navigation through consistent layouts and component logic.",
                      
                    ]
                  }
                ]}
              />
            
          </section>

        </div>
      </section>

      

      
      
      <section id="experiements" className="section">
        <div className="section-card">
          <h2>Experiements</h2>
          <h4>My hobby of visual experiments is to 
            use in-engine editors, camera tools, and post-processing pipelines 
            to explore how lighting, camera, and visual constraints shape final output. </h4>
          
          <ProjectCard
            title="Virtual Photography & In-Engine Visual Exploration"
            tags={[
              "RPG environments",
              "Game Editors",
              "Real-Time Rendering",
              "Blender",
              "ReShade"
            ]}
            sections={[
              {
                title: "",
                bullets: [
                  "Conducted visual experiments within game environments using in-game editors, camera systems, and post-processing tools.",
                  "Explored composition, lighting, depth of field, and camera framing under engine constraints.",
                  "Applied real-time post-processing techniques (e.g. colour grading and depth-based effects) within the rendering pipeline.",
                  "Extended camera control using external tools to enable precise framing and systematic visual analysis.",
                  "Adapted workflows across different engines, adjusting visual strategies based on technical limitations, rendering behaviour, and available tooling."
                
                ]
              }
            ]}
          />
          <a
            className="project-link"
            href="https://www.instagram.com/tsu_un.games/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-thumb"
              alt="Instagram profile for tsu_un.games"
              src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><rect width='72' height='72' rx='16' fill='%23f72c25'/><text x='36' y='44' font-family='Arial' font-size='22' fill='white' text-anchor='middle'>IG</text></svg>"
            />
            <span>Instagram @tsu_un.games</span>
          </a>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-card contact">
          <h2>Contact</h2>
          <h3>Clara Pei-yu Wang</h3>
          <p>MSc Digital Business graduate with experience in system analysis, interactive development, 
            and content production pipeline. 
            Particularly interested in real-time rendering and building tools 
            that help artists work more effectively in creative environments. </p>
          <a className="cta" href="#intro">Back to top</a>
        </div>
      </section>
    </>
  )
}

export default Home
