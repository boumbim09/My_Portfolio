import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'QA SauceDemo Testing',
      description: 'ໂປຣເຈັກທົດສອບບໍລິການຊອບແວແບບ Manual Testing ບົນເວັບແອັບພິເຄຊັນ Sauce Demo ເຊິ່ງຄອບຄຸມ ຟີເຈີ Login, Product, Cart ແລະ Checkout.',
      stack: ['QA Testing', 'Manual Testing', 'Chrome', 'Excel'],
      thumbnail: 'https://raw.githubusercontent.com/boumbim09/My_Portfolio/main/public/projects/saucedemo.png',
      link: 'https://github.com/boumbim09/qa-saucedemo-testing'
    },

    {
      id: 2,
      title: 'Auth API Project',
      description: 'ລະບົບການຢືນຢັນຕົວຕົນ (Authentication API) ທີ່ມີຂັ້ນຕອນການເຂົ້າສູ່ລະບົບ ແລະ ການລົງທະບຽນທີ່ມີຄວາມປອດໄພສູງ ໂດຍນຳໃຊ້ການຢືນຢັນຕົວຕົນແບບ Token-based ແລະ Session',
      stack: ['Node.js', 'Express.js', 'JWT', 'Postman'],
      thumbnail: 'https://raw.githubusercontent.com/boumbim09/My_Portfolio/main/public/projects/auth-api.png',
      link: 'https://github.com/boumbim09/auth-api-project'
    },
    
    {
      id: 3,
      title: 'ShopEasy QA Portfolio',
      description: 'ໂປຣເຈັກທົດສອບລະບົບຮ້ານຄ້າອອນລາຍ ໂດຍການຂຽນ Test Cases, ເທດ API ດ້ວຍ Postman ແລະ report ບັກຜ່ານ Jira ເຊິ່ງຄອບຄຸມຟີເຈີ Login, Cart, Stock ແລະ Checkout.',
      stack: ['QA Testing', 'Jira', 'Postman', 'Test Cases'],
      thumbnail: 'https://raw.githubusercontent.com/boumbim09/My_Portfolio/main/public/projects/shopeasy.png',
      link: 'https://github.com/boumbim09/shopeasy-qa-portfolio'
    },
  ];

  return (
    <div className="page" style={{ background: 'var(--bg2)' }}>
      <section id="projects">
        <div className="section-container">
          <h2 className="section-title-left">Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px', marginTop: '32px' }}>
            {projects.map((project) => (
              <a 
                key={project.id} 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Thumbnail */}
                <div style={{ position: 'relative', overflow: 'hidden', height: '220px', background: 'var(--bg2)' }}>
                  <img 
                    src={project.thumbnail}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                  >
                    <span style={{
                      color: '#fff',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.9rem',
                      letterSpacing: '0.08em',
                      fontWeight: '600'
                    }}>
                      ↗ VIEW ON GITHUB
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: 'var(--text)',
                    marginBottom: '12px',
                    letterSpacing: '0.02em'
                  }}>
                    {project.title}
                  </div>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--muted)',
                    lineHeight: '1.7',
                    marginBottom: '20px',
                    flex: 1,
                    margin: 0,
                    marginBottom: '20px'
                  }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.stack.map((tech, idx) => (
                      <span 
                        key={idx}
                        style={{
                          background: 'var(--bg2)',
                          border: '1px solid var(--border)',
                          padding: '6px 14px',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                          color: 'var(--muted)',
                          fontFamily: "'Space Mono', monospace",
                          fontWeight: '500',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--accent)';
                          e.currentTarget.style.color = 'var(--accent)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.color = 'var(--muted)';
                        }}
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;
