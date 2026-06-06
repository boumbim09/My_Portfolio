import React from 'react';

function Skills() {
  return (
    <div className="page">
      <section id="skills">
        <div className="section-container">
          <h2 className="section-title-left">Skills</h2>
          <div className="skills-two-col">
            <div className="skills-col">
              <div className="skills-col-title">Technical</div>
              <div className="skills-grid">
                <div className="skill-row">
                  <span className="skill-label">Languages</span>
                  <div className="skill-tags">
                    <span className="tag"><span className="tag-dot"></span>JavaScript</span>
                    <span className="tag"><span className="tag-dot"></span>SQL</span>
                  </div>
                </div>
                <div className="skill-row">
                  <span className="skill-label">Frameworks</span>
                  <div className="skill-tags">
                    <span className="tag"><span className="tag-dot"></span>Node.js</span>
                    <span className="tag"><span className="tag-dot"></span>Express.js</span>
                  </div>
                </div>
                <div className="skill-row">
                  <span className="skill-label">Concepts</span>
                  <div className="skill-tags">
                    <span className="tag"><span className="tag-dot"></span>REST API</span>
                    <span className="tag"><span className="tag-dot"></span>Session Auth</span>
                    <span className="tag"><span className="tag-dot"></span>Async/Await</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-col">
              <div className="skills-col-title">Tools & Environment</div>
              <div className="skills-grid">
                <div className="skill-row">
                  <span className="skill-label">Dev Tools</span>
                  <div className="skill-tags">
                    <span className="tag"><span className="tag-dot"></span>Git</span>
                    <span className="tag"><span className="tag-dot"></span>GitHub</span>
                    <span className="tag"><span className="tag-dot"></span>VS Code</span>
                  </div>
                </div>
                <div className="skill-row">
                  <span className="skill-label">API Testing</span>
                  <div className="skill-tags">
                    <span className="tag"><span className="tag-dot"></span>Postman</span>
                  </div>
                </div>
                <div className="skill-row">
                  <span className="skill-label">Deployment</span>
                  <div className="skill-tags">
                    <span className="tag"><span className="tag-dot"></span>Vercel</span>
                    <span className="tag"><span className="tag-dot"></span>GitHub Pages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
