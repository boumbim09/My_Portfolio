import React from 'react';

function Certifications() {
  const certifications = [
    {
      id: 1,
      name: 'JavaScript Mastery',
      issuer: 'Udemy',
      year: 2024,
      description: 'Advanced JavaScript concepts including async/await, closures, and modern ES6+ features.'
    },
    {
      id: 2,
      name: 'Node.js & Express.js Complete Guide',
      issuer: 'Udemy',
      year: 2024,
      description: 'Building production-ready REST APIs with Node.js, middleware, error handling, and best practices.'
    },
    {
      id: 3,
      name: 'SQL for Backend Developers',
      issuer: 'Coursera',
      year: 2024,
      description: 'Database design, complex queries, optimization, and relational database management.'
    },
    {
      id: 4,
      name: 'Web Development Fundamentals',
      issuer: 'freeCodeCamp',
      year: 2023,
      description: 'HTML, CSS, JavaScript basics and introduction to backend development concepts.'
    }
  ];

  return (
    <div className="page">
      <section id="certifications">
        <div className="section-container">
          <h2 className="section-title-left">Certifications</h2>
          <div className="cert-timeline">
            <div className="cert-track"></div>
            <div className="cert-items">
              {certifications.map((cert) => (
                <div key={cert.id} className="cert-item">
                  <div className="cert-dot"></div>
                  <a href="#" className="cert-thumb">
                    <div className="cert-thumb-placeholder">
                      CERTIFICATE<br /><span>THUMBNAIL</span>
                    </div>
                    <div className="cert-overlay">{cert.issuer}</div>
                  </a>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-year">{cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certifications;