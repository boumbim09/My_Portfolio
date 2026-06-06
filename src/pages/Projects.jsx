import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce API',
      description: 'RESTful API for an e-commerce platform with product management, cart, and order processing.',
      stack: ['Node.js', 'Express.js', 'MySQL', 'JWT'],
      link: '#'
    },
    {
      id: 2,
      title: 'User Authentication System',
      description: 'Session-based and JWT authentication system with password hashing and refresh tokens.',
      stack: ['Node.js', 'Express.js', 'bcrypt', 'Sessions'],
      link: '#'
    },
    {
      id: 3,
      title: 'Todo API',
      description: 'Simple but complete Todo API with CRUD operations, user management, and database optimization.',
      stack: ['Node.js', 'Express.js', 'SQL', 'REST'],
      link: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio built with React, showcasing projects and skills with dark/light mode.',
      stack: ['React', 'React Router', 'CSS', 'Responsive'],
      link: '#'
    },
    {
      id: 5,
      title: 'Blog Platform Backend',
      description: 'Multi-user blog platform with posts, comments, and category management.',
      stack: ['Node.js', 'Express.js', 'MySQL', 'Middleware'],
      link: '#'
    },
    {
      id: 6,
      title: 'Coming Soon',
      description: 'Working on new projects. Stay tuned for updates!',
      stack: ['🚀', 'In Progress'],
      link: '#'
    }
  ];

  return (
    <div className="page" style={{ background: 'var(--bg2)' }}>
      <section id="projects">
        <div className="section-container">
          <h2 className="section-title-left">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-thumb">
                  <div className="thumb-placeholder">
                    PROJECT<br /><span>THUMBNAIL</span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-title">{project.title}</div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((tech, idx) => (
                      <span key={idx} className="stack-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;