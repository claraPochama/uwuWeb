import ProjectCard from '../components/ProjectCard'

function Home() {
  return (
    <>
      <section id="intro" className="section">
        <div className="section-card hero">
          <h2 className="lede">About</h2>
          <p>
            This portfolio showcases my interest in building and exploring
            workflows supporting production pipeline. 
            Across system-focused coursework, side projects, 
            and visual experiments, I focus on understanding constraints,
            structuring complexity, to translate creative intent into
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
                title="Project 01 - Combat-simulation Analytics for D&D Initiative Mechanics"
                tags={["SDLC Process", "Python", "SQLite Model", "Data Modeling (ERD)", "Pandas ETL", "Tableau Dashboard", "SQL Analytics"]}
                link={{
                  href: "https://github.com/claraPochama/Roll_Initiative_DnDProject",
                  label: "GitHub repository",
                  alt: "Multi-Currency Banking System repository",
                  thumbnail:
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><rect width='72' height='72' rx='16' fill='%231f1a17'/><text x='36' y='44' font-family='Arial' font-size='22' fill='white' text-anchor='middle'>GH</text></svg>"
                }}
                image={{
                  src: "/assets/presentation-first-mover-advantage.jpg",
                  alt: "First-Mover Advantage presentation slide", 
                  href: "https://www.canva.com/design/DAHBzO2lv98/s3Ad0SAPcXDQN5FlfqeVBw/edit?utm_content=DAHBzO2lv98&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                }}
                sections={[
                  {
                    title: "Problem",
                    bullets: [
                      "Turn-based combat feels like “going first” matters, but playtesting can’t isolate initiative effects because encounters are noisy and decisions vary.",
                      "Goal: build a controlled, repeatable simulator for 5000+ runs to analyse win rate and survival."
                    ]
                  },
                  {
                    title: "Constraints",
                    bullets: [
                      "Intentional simplification on movement and features to make runs comparable.",
                      "Over 500+ data are sourced from static CSV files, increasing complexity for data cleaning. ",
                      "Rules make runs comparable at the cost of tactical variety; results are scenario-specific. "
                    ]
                  },
                  {
                    title: "Approach",
                    bullets: [
                      "Built an end-to-end (SDLC-ish) pipeline: scope/requirements → design (ERD/schema) → build (ETL/simulator) → test/validate (health checks + sanity checks) → deliver (dashboard + report).", 
                      "Designed a relational model enabling analysis at run-level (win/rounds/damage) and entity-level (initiative order, survival, hits/crits).", 
                      "Implemented a minimal combat ruleset aligned to the research question. ", 
                      "Assisted by AI for cleaning and validation on JSON data format and debugging. "
                    ]
                  },
                  {
                    title: "Outcome",
                    bullets: [
                      "Ran 5000 simulated encounters and confirmed initiative advantage correlates with higher win rate, but also showed winning is multi-factor (targeting rules + early burst + survivability). ",
                      "Enabled state changes such as currency conversion, fee calculation, and history tracking.",
                      "Quantified the mechanisms and identified a survivability bottleneck (trade-offs under constraints), enabling the plans for v2 simulation and improvement. "
                    ]
                  }
                ]}
                
              />
              
                
          </section>


          <section id="project_2" className="section">            
              <ProjectCard
                title="Project 02 - Multi-Currency Banking System"
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
          

          <section id="project_3" className="section">
            
              <ProjectCard
                title="Project 03 - D&D Campaign Concept Website"
                tags={["JavaScript", "Responsive Web Design", "Creative Concept Design"]}
                link={{
                  href: "https://github.com/claraPochama/Concept-Website_Sors-Tali",
                  label: "GitHub repository",
                  alt: "D&D Campaign Concept Website repository",
                  thumbnail:
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><rect width='72' height='72' rx='16' fill='%231f1a17'/><text x='36' y='44' font-family='Arial' font-size='22' fill='white' text-anchor='middle'>GH</text></svg>"
                }}
                image={{
                  src: "/assets/sors-tali.jpg",
                  alt: "Sors Tali: Concept Website", 
                  
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
          <p>clara900721@gmail.com | +353 87 492 8615 </p>
          
          <p>MSc Digital Business graduate with experience in system analysis, interactive development, 
            and content production pipeline. 
            Particularly interested system analysis and workflow optimization in creative environments. </p>
          <a className="cta" href="#intro">Back to top</a>
        </div>
      </section>
    </>
  )
}

export default Home
