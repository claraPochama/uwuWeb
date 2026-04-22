import ProjectCard from '../components/ProjectCard'

function Home() {
  return (
    <>
      <section id="intro" className="section">
        <div className="section-card hero">
          <h2 className="lede">About</h2>
          <p>
            I am a Digital Business student with a strong interest in production workflows, pipeline thinking, and cross-functional problem-solving.
            Across coursework, self-initiated projects, and visual experiments, I explore how creative goals need to be translated into structured systems and practical technical solutions. 
            I am building towards work where I can support teams by making complex creative processes clearer and easier to push forward.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-card">
          <h2>Projects</h2>

          <section id="project_1" className="section">            
              <ProjectCard
                title="Project 01 - Combat-simulation Analytics for D&D Initiative Mechanics"
                tags={["SDLC Process", "Python", "SQLite Model", "Data Modeling (ERD)", "Pandas ETL", "Tableau Dashboard", "SQL Analytics"]}
                link={{
                  href: "https://github.com/claraPochama/Roll_Initiative_DnDProject",
                  label: "GitHub repository",
                  alt: "Roll Initiative! Repository",
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
                title="Project 02 - D&D Campaign Concept Website"
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

          <section id="project_3" className="section">
              <ProjectCard
                title="Project 03 - Claude Builders Club Hackathon - EcoEvent"
                tags={["Hackathon Prototype", "Supabase", "Live Dashboard", "Front-End Implementation", "ESG Reporting"]}
                link={{
                  href: "https://github.com/claraPochama/Claude_Builder_Club_Hackathon_Apr2026",
                  label: "GitHub repository",
                  alt: "UCC Claude Builders Club Hackathon 2026 repository",
                  thumbnail:
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><rect width='72' height='72' rx='16' fill='%231f1a17'/><text x='36' y='44' font-family='Arial' font-size='22' fill='white' text-anchor='middle'>GH</text></svg>"
                }}
                image={{
                  src: "/assets/Claude_Builder_Club_Hackathon_Apr2026.png",
                  alt: "UCC Claude Builders Club Hackathon 2026 dashboard screenshot",
                  href: "https://claude-builder-club-hackathon-apr20.vercel.app/ecoevent-demo.html"
                }}
                sections={[
                  {
                    title: "Why this mattered",
                    bullets: [
                      "Student societies are expected to look professional for sponsorship, but lack ways to demonstrate operational credibility beyond attendance numbers or social reach.",
                      "As ESG expectations become more visible in corporate partnerships, sustainability transparency can help societies present themselves as more credible partners.",
                      "Opportunity: turn sustainability from a vague claim into something measurable (material tracking, carbon estimates, and ESG-style reports)."
                    ]
                  },
                  {
                    title: "What we built",
                    bullets: [
                      "A lightweight event sustainability dashboard: log materials, estimate CO₂, monitor trends, and auto-generate ESG-style reports from a single workflow.",
                    ]
                  },
                  {
                    title: "My contribution",
                    bullets: [
                      "Set up the Supabase-backed data layer and implemented live dashboard behaviour.",
                      "Helped get the prototype deployed as a real browser-based demo.",
                      "Focused on fast, practical implementation choices to turn a rough concept into a working product; teammates led on feature ideas and product concept."
                    ]
                  },
                  {
                    title: "What made it hard",
                    bullets: [
                      "Only 4 hours, no build system, no server-side secrets, and no usable Claude API key during development.",
                      "Forced prioritisation of fast deployment and static architecture, instead of a more polished AI workflow."
                    ]
                  },
                  {
                    title: "Reflection",
                    bullets: [
                      "The challenge was not building the perfect architecture, but choosing the minimum viable implementation that still made the concept believable in a live demo.",
                      "Reinforced that one of my strengths is making early-stage concepts tangible under tight delivery constraints."
                    ]
                  }
                ]}
              />

          </section>

          <section id="project_4" className="section">
              <ProjectCard
                title="Project 04 - Claims & Reimbursement Decision-Support DBMS"
                tags={["MySQL", "SQL", "Data Modelling", "Database Solution"]}
                link={{
                  href: "https://github.com/claraPochama/SQL-Case-Study-Analysing-Pharmacy-PCRS-Claim-Rejections-and-Margin-Leakage",
                  label: "GitHub repository",
                  alt: "Claims & Reimbursement Decision-Support DBMS repository",
                  thumbnail:
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><rect width='72' height='72' rx='16' fill='%231f1a17'/><text x='36' y='44' font-family='Arial' font-size='22' fill='white' text-anchor='middle'>GH</text></svg>"
                }}
                image={{
                  src: "/assets/PCRS_Pharmacy_Claims_Analytic_Case_Study.jpg",
                  alt: "PCRS Pharmacy Claims Analytic Case Study",
                }}
                sections={[
                  {
                    title: "Problem",
                    bullets: [
                      "Irish community pharmacies process reimbursement claims under multiple PCRS schemes, each with different eligibility and documentation rules.",
                      "Small issues in claim data can lead to rejected or adjusted claims, delayed payments, and hidden margin leakage, making it difficult for managers to prioritise audits and monitor financial risk."
                    ]
                  },
                  {
                    title: "Constraints",
                    bullets: [
                      "Individual academic case study rather than a live industry deployment; needed to model a realistic reimbursement workflow credibly within a limited project scope.",
                      "Balanced business relevance with technical simplicity, using a manageable schema and dummy data rather than a full production-scale pharmacy system."
                    ]
                  },
                  {
                    title: "Approach",
                    bullets: [
                      "Designed and implemented a 7-entity MySQL database modelling the workflow from dispensing events to claim outcomes.",
                      "Created SQL views and analytical queries to aggregate claim values, isolate the latest review outcome, and surface rejection and adjustment drivers.",
                      "Estimated margin leakage and ranked high-risk claims for manual review, turning fragmented operational data into structured decision-support outputs."
                    ]
                  },
                  {
                    title: "Outcome",
                    bullets: [
                      "Demonstrated how SQL-based analysis could support pharmacy operations beyond recordkeeping alone.",
                      "Made it possible to identify high-risk claims, highlight the main causes of reimbursement loss, and estimate low-margin claim patterns.",
                      "Tracked submit-to-paid latency as a proxy for cashflow risk, supporting better audit focus and earlier issue detection."
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
            Particularly interested in production and workflow optimization in creative environments. </p>
          <a className="cta" href="#intro">Back to top</a>
        </div>
      </section>
    </>
  )
}

export default Home
