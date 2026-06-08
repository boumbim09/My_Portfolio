import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ theme, toggleTheme, onContactClick }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav id="navbar">
      <div className="nav-inner">

        <Link to="/" className="nav-logo">&lt;PD.WEB/&gt;</Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>

          <button className="nav-cta" onClick={onContactClick}>
            Contact Me
          </button>
        </div>

        <button id="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀' : '🌙'}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;