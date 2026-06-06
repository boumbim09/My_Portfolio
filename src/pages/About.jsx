import React from 'react';

function About() {
  return (
    <div className="page" style={{ background: 'var(--bg2)' }}>
      <section id="about">
        <div className="section-container">
          <h2 className="section-title-center">About Me</h2>
          <p className="about-intro">
            Third-year Computer Science student focused on Backend Development.
            Passionate about building REST APIs, clean architecture, and scalable systems
            using Node.js, Express.js, and SQL.
          </p>
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-icon">⚙</div>
              <div className="about-card-title">Backend Focus</div>
              <p className="about-card-desc">Building secure and scalable REST APIs with Node.js and Express.js.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🔐</div>
              <div className="about-card-title">Auth & Security</div>
              <p className="about-card-desc">Implementing session-based and token-based authentication flows.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">🗄</div>
              <div className="about-card-title">Database</div>
              <p className="about-card-desc">Designing and querying relational databases with SQL and MySQL.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
