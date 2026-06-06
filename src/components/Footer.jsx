import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <div className="nav-logo" style={{ marginBottom: '12px' }}>&lt;PD.dev/&gt;</div>
          <p className="footer-desc">Backend Developer. Node.js &amp; Express.<br />Open for internship opportunities.</p>
        </div>
        <div className="footer-mid">
          <div className="footer-col-title">Quick Links</div>
          <a href="/">About</a>
          <a href="/">Skills</a>
          <a href="/">Projects</a>
          <a href="/">Certifications</a>
        </div>
        <div className="footer-right">
          <div className="footer-col-title">Connect</div>
          <a href="mailto:boumphoutdavan@gmail.com">↗ Email</a>
          <a href="https://github.com/boumbim09" target="_blank" rel="noreferrer">↗ GitHub</a>
          <a href="https://wa.me/02098560787" target="_blank" rel="noreferrer">↗ WhatsApp</a>
        </div>
      </div>
      <div className="footer-bottom">© 2025 Phoutdavanh Stmn. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
