import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

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
