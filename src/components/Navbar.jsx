import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ theme, toggleTheme, onContactClick }) {
  return (
    <nav id="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">&lt;PD.dev/&gt;</Link>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
          <button 
            className="nav-cta"
            onClick={onContactClick}
            style={{
              background: 'none',
              border: 'none',
              padding: '0',
              cursor: 'pointer',
              font: 'inherit'
            }}
          >
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
