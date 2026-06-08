import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <section id="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Phoutdavanh<br />Stmn</h1>
            <p className="hero-role">Aspiring <span className="hero-accent">QA / Software Tester</span></p>
            <p className="hero-tagline">Find bugs before users do.</p>
            <button className="hero-btn" onClick={() => navigate('/projects')}>View my work →</button>
          </div>
          <div className="hero-photo">
            <img src="/photo.jpeg" alt="Phoutdavanh" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;