import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ theme, toggleTheme }) {
  return (
    <nav id="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">&lt;PD.dev/&gt;</Link>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/" className="nav-cta">Contact Me</Link>
        </div>
        <button id="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
