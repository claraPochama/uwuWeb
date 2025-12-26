import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Gallery from './pages/Gallery'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="sidebar" aria-label="Primary">
          <div className="brand">uwuWeb</div>
          <div className="nav-label">Pages</div>
          <NavLink className="nav-button" to="/">Home</NavLink>
          <NavLink className="nav-button" to="/gallery">Gallery</NavLink>
          <div className="nav-label">Jump to</div>
          <a className="nav-button" href="/#intro">Intro</a>
          <a className="nav-button" href="/#features">Features</a>
          <a className="nav-button" href="/#projects">Projects</a>
          <a className="nav-button" href="/#contact">Contact</a>
          <div className="nav-footer">Built to scroll fast.</div>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
