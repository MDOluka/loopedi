import React from 'react';

const Footer = () => (
  <footer className="footer-section">
    <p>© {new Date().getFullYear()} LO OPEDI VENTURES SMC LTD. All rights reserved.</p>
    <div className="footer-socials">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </footer>
);

export default Footer;
