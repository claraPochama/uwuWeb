import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import linkedinIcon from './assets/linkedin-svgrepo-com.svg'
import githubIcon from './assets/github-svgrepo-com.svg'
import instagramIcon from './assets/instagram-svgrepo-com.svg'
import emailIcon from './assets/email-1573-svgrepo-com.svg'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="sidebar" aria-label="Primary">
          <div className="brand">Clara's Portfolio</div>
          <div className="nav-label">Aim to structure interactive system supporting creative content</div>
          <a className="nav-button" href="/#intro">Intro</a>
          <a className="nav-button" href="/#projects">Projects</a>
          <a className="nav-button nav-sub" href="/#project_1">01 - Multi-Currency Banking System</a>
          <a className="nav-button nav-sub" href="/#project_2">02 - D&D Campaign Concept Website</a>
          <a className="nav-button" href="/#experiements">Experiements</a>
          <a className="nav-button" href="/#contact">Contact</a>
          <div className="sidebar-icons" aria-label="Social links">
            <a
              className="sidebar-icon"
              href="https://www.linkedin.com/in/clara-p-wang-870976198/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="" />
            </a>
            <a
              className="sidebar-icon"
              href="https://github.com/claraPochama"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="" />
            </a>
            <a
              className="sidebar-icon"
              href="mailto:clara900721@gmail.com"
              aria-label="Email"
            >
              <img src={emailIcon} alt="" />
            </a>
            <a
              className="sidebar-icon"
              href="https://www.instagram.com/tsu_un.games/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="" />
            </a>
          </div>
          <div className="nav-footer">Production pipeline and operation.</div>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
