import React, { useState, useRef } from 'react';
import { SiJira, SiPostman, SiJavascript, SiNodedotjs, SiMysql, SiGit, SiGithub } from 'react-icons/si';

function Skills() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const techStack = [
    { name: 'Test Cases', icon: <span style={{ fontSize: '2.4rem' }}>📄</span> },
    { name: 'Bug Reports', icon: <span style={{ fontSize: '2.4rem' }}>⚠️</span> },
    { name: 'Jira', icon: <SiJira size={40} color="#0052CC" /> },
    { name: 'Postman', icon: <SiPostman size={40} color="#FF6C37" /> },
    { name: 'Manual Testing', icon: <span style={{ fontSize: '2.4rem' }}>🔍</span> },
    { name: 'API Testing', icon: <span style={{ fontSize: '2.4rem' }}>⚙️</span> },
    { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={40} color="#339933" /> },
    { name: 'SQL', icon: <SiMysql size={40} color="#00758F" /> },
    { name: 'Git', icon: <SiGit size={40} color="#F1502F" /> },
    { name: 'GitHub', icon: <SiGithub size={40} color="#f3f0f0" /> },
  ];

  const services = [
    {
      icon: '🔍',
      title: 'Functional Testing',
      description: 'ທົດສອບແບບ Comprehensive ທັງ features, workflows ແລະ user interactions ເພື່ອໃຫ້ໝັ້ນໃຈວ່າ product ເຮັດວຽກໄດ້ຕາມທີ່ Design ໄວ້.'
    },
    {
      icon: '📋',
      title: 'Test Case Design',
      description: 'ຂຽນ Test Cases ແບບລະອຽດ ໃຫ້ຄອບຄຸມທັງ normal scenarios, edge cases ແລະ boundary conditions ເພື່ອໃຫ້ໄດ້ thorough coverage.'
    },
    {
      icon: '🐛',
      title: 'Bug Identification & Reporting',
      description: 'ຫາ document ແລະ track defects ພ້ອມກັບຂຽນ reproduction steps ທີ່ຊັດເຈນ ແລະ bug reports ທີ່ລະອຽດໃນ Jira.'
    },
    {
      icon: '📮',
      title: 'API Testing',
      description: 'ທົດສອບ REST APIs ໂດຍໃຊ້ Postman ເພື່ອ validate responses, status codes, data integrity ແລະ edge cases.'
    },
    {
      icon: '🔄',
      title: 'Regression Testing',
      description: 'Regression Testing ຢ່າງເປັນລະບົບໃນຈຸດທີ່ໄດ້ຮັບຜົນກະທົບ ເພື່ອໃຫ້ໝັ້ນໃຈວ່າ New Changes ຈະບໍ່ໄປເຮັດໃຫ້ຟັງຊັນເກົ່າພັງ.'
    },
    {
      icon: '✨',
      title: 'Performance Testing',
      description: 'ປະເມີນປະສິດທິພາບຂອງແອັບພລິເຄຊັນ (Performance), ຂີດຄວາມສາມາດໃນການຮອງຮັບການໃຊ້ງານ (Load Capacity) ແລະ ເວລາຕອບສະໜອງ (Response Times) ພາຍໃຕ້ເງື່ອນໄຂຕ່າງໆ.'
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 150;
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
      setTimeout(checkScroll, 300);
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  React.useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <div className="page">
      {/* Tech Stack Section */}
      <section id="tech-stack">
        <div className="section-container">
          <h2 className="section-title-center">My Tech Skill</h2>
          <p className="about-intro">
            QA Tester & Software Tester ທີ່ມີປະສົບການໃນການທົດສອບລະບົບ (Manual Testing), ການອອກແບບກໍລະນີທົດສອບ (Test Case Design) ແລະ ການທົດສອບ API. ມີຄວາມສາມາດໃນການໃຊ້ Jira ສຳລັບຕິດຕາມຂໍ້ຜິດພາດ (Bug Tracking), Postman ສຳລັບກວດສອບຄວາມຖືກຕ້ອງຂອງ API ແລະ ເຂົ້າໃຈລະບຽບວິທີການທົດສອບສະໄໝໃໝ່. ນອກຈາກນີ້ ຍັງມີພື້ນຖານດ້ານການພັດທະນາລະບົບຫຼັງບ້ານ (Backend Development) ດ້ວຍ JavaScript, Node.js ແລະ SQL.
          </p>
          
          {/* Scrollable Tech Stack with Controls */}
          <div style={{ position: 'relative', marginTop: '48px' }}>
            {/* Left Button */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: canScrollLeft ? 'var(--bg2)' : 'var(--bg2)',
                border: '1px solid var(--border)',
                width: '48px',
                height: '48px',
                borderRadius: '4px',
                cursor: canScrollLeft ? 'pointer' : 'not-allowed',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                zIndex: 10,
                opacity: canScrollLeft ? 1 : 0.4
              }}
              onMouseEnter={(e) => {
                if (canScrollLeft) {
                  e.currentTarget.style.borderColor = 'var(--text)';
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--bg2)';
                e.currentTarget.style.color = 'var(--text)';
              }}
            >
              ←
            </button>

            {/* Scrollable Container - Show 5 items */}
            <div
              ref={scrollContainerRef}
              style={{
                display: 'flex',
                gap: '24px',
                overflowX: 'auto',
                paddingBottom: '12px',
                scrollBehavior: 'smooth',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                width: '100%'
              }}
              onWheel={(e) => e.preventDefault()}
            >
              <style>{`
                #tech-stack-scroll::-webkit-scrollbar { display: none; }
              `}</style>
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '20px',
                    textAlign: 'center',
                    background: 'var(--bg2)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    minWidth: '140px',
                    flex: '0 0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
                    {tech.icon}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)', fontFamily: "'Space Mono', monospace", fontWeight: '500' }}>
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: canScrollRight ? 'var(--bg2)' : 'var(--bg2)',
                border: '1px solid var(--border)',
                width: '48px',
                height: '48px',
                borderRadius: '4px',
                cursor: canScrollRight ? 'pointer' : 'not-allowed',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                zIndex: 10,
                opacity: canScrollRight ? 1 : 0.4
              }}
              onMouseEnter={(e) => {
                if (canScrollRight) {
                  e.currentTarget.style.borderColor = 'var(--text)';
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--bg2)';
                e.currentTarget.style.color = 'var(--text)';
              }}
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* What Can I Do Section */}
      <section id="what-can-i-do" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="section-container">
          <h2 className="section-title-center" style={{ marginBottom: '16px' }}>What Can I Do</h2>
          <p className="about-intro" style={{ marginBottom: '48px' }}>
           ມີຄວາມສາມາດໃນດ້ານການປະກັນຄຸນນະພາບ (QA) ແລະ ການທົດສອບຊອບແວ ເພື່ອຮັບປະກັນວ່າລະບົບຈະຕ້ອງເຮັດວຽກໄດ້ຢ່າງຖຶກຕ້ອງ ແລະ ງ່າຍຕໍ່ການໃຊ້ງານ. ນັບຕັ້ງແຕ່ການວາງແຜນການທົດສອບ (Test Planning) ໄປຈົນເຖິງການບັນທຶກຂໍ້ຜິດພາດ (Bug Documentation), ມີຄວາມມຸ່ງໝັ້ນທີ່ຈະທົດສອບໃຫ້ຄອບຄຸມໃນທຸກດ້ານ ເພື່ອແກ້ໄຂບັນຫາຕ່າງໆ ກ່ອນທີ່ລະບົບຈະສົ່ງເຖິງມືຜູ້ໃຊ້ງານ.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {services.map((service, idx) => (
              <div 
                key={idx} 
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  padding: '32px 28px',
                  borderRadius: '4px',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '2.4rem', marginBottom: '16px' }}>{service.icon}</div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  letterSpacing: '0.04em',
                  marginBottom: '12px',
                  color: 'var(--text)'
                }}>
                  {service.title}
                </div>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--muted)',
                  lineHeight: '1.65',
                  margin: 0
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
