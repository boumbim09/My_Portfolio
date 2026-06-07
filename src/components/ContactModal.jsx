import React from 'react';

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
          zIndex: 999,
          animation: 'fadeIn 0.3s ease-out'
        }}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '420px',
          background: 'var(--bg)',
          zIndex: 1000,
          boxShadow: '-2px 0 16px rgba(0,0,0,0.3)',
          animation: 'slideIn 0.3s ease-out',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px',
          borderBottom: '1px solid var(--border)'
        }}>
          <h2 style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '1.4rem',
            fontWeight: '700',
            margin: 0,
            color: 'var(--text)'
          }}>
            Get in Touch
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: 'var(--muted)',
              padding: '0',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '32px 24px', flex: 1 }}>
          {/* Contact Info */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <span style={{ fontSize: '1.2rem' }}>📧</span>
              <a
                href="mailto:boumphoutdavan@gmail.com"
                style={{
                  textDecoration: 'none',
                  color: 'var(--text)',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text)'}
              >
                boumphoutdavan@gmail.com
              </a>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <span style={{ fontSize: '1.2rem' }}>📱</span>
              <a
                href="tel:+66209856078"
                style={{
                  textDecoration: 'none',
                  color: 'var(--text)',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text)'}
              >
                +856 2 0985 60787
              </a>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{ fontSize: '1.2rem' }}>📍</span>
              <span style={{
                color: 'var(--text)',
                fontSize: '0.95rem'
              }}>
                khamhoung, Xaithany, Vientiane Capital
              </span>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.85rem',
              fontWeight: '700',
              letterSpacing: '0.05em',
              color: 'var(--muted)',
              marginBottom: '16px'
            }}>
              SOCIAL MEDIA
            </div>
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://github.com/boumbim09"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  fontSize: '1.3rem',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--bg2)';
                  e.currentTarget.style.color = 'var(--text)';
                }}
              >
                🐙
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  fontSize: '1.3rem',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--bg2)';
                  e.currentTarget.style.color = 'var(--text)';
                }}
              >
                💼
              </a>

              <a
                href="https://wa.me/2098560787"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  fontSize: '1.3rem',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--bg2)';
                  e.currentTarget.style.color = 'var(--text)';
                }}
              >
                💬
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  fontSize: '1.3rem',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--bg2)';
                  e.currentTarget.style.color = 'var(--text)';
                }}
              >
                📷
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}

export default ContactModal;
