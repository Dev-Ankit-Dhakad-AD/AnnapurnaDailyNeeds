import React from 'react';
import './Footer.css';

const Footer = ({ openModal }) => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Annapurna Daily Needs Logo" className="footer-logo-img" />
            </div>
            <p className="footer-description">Your trusted partner for fresh groceries and daily essentials, delivered right to your door.</p>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li><a href="#about">About App</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#" onClick={openModal}>Download App</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Annapurna Daily Needs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
