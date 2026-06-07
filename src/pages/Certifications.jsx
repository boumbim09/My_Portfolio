import React from 'react';

function Certifications() {
  const certifications = [
    {
      id: 1,
      name: 'IBM Back-End Development',
      issuer: 'IBM / Coursera',
      year: '2026',
      link: 'https://www.coursera.org/account/accomplishments/verify/9JOTG5EFBFRG'
    },

  ];

  return (
    <div className="page" style={{ background: 'var(--bg2)' }}>
      <section id="certifications">
        <div className="section-container">
          <h2 className="section-title-left">Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {certifications.map((cert) => (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--text)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div
                  style={{
                    background: 'var(--cert-bg)',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid var(--border)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.75rem',
                    color: 'var(--muted)',
                    textAlign: 'center'
                  }}>
                    CERTIFICATE<br /><span style={{ fontSize: '0.6rem', opacity: '0.5' }}>400 × 280 px</span>
                  </div>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.85rem',
                    color: '#fff',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                    letterSpacing: '0.08em'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                  >
                    ↗ View Certificate
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '8px'
                  }}>
                    {cert.name}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--muted)',
                    marginBottom: '4px'
                  }}>
                    {cert.issuer}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--muted)',
                    fontFamily: "'Space Mono', monospace"
                  }}>
                    {cert.year}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certifications;