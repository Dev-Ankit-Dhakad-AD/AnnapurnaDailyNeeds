import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import AboutApp from './components/AboutApp';
import AppScreenshots from './components/AppScreenshots';
import TechStack from './components/TechStack';
import DeveloperInfo from './components/DeveloperInfo';
import Footer from './components/Footer';
import InstallModal from './components/InstallModal';
import './Navbar.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <img 
              src="/logo.png" 
              alt="Annapurna Daily Needs Logo" 
              className="logo-img"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/120x40/22c55e/ffffff?text=Logo";
              }}
            />
            <span className="logo-name">Annapurna Daily Needs</span>
          </div>

          {/* Desktop nav links */}
          <div className="nav-links">
            <a href="#about" className="nav-link">Features</a>
            <a href="#team" className="nav-link">Team</a>
            <div className="nav-actions">
              <a href="https://annapurna-daily-needs.vercel.app/" target="_blank" rel="noopener noreferrer" className="nav-btn nav-btn-outline">
                <Globe size={18} />
                <span>Use on Web</span>
              </a>
              <a href="#" onClick={openModal} className="nav-btn">Get App</a>
            </div>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile dropdown — anchored inside pill */}
          <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
            <a href="#about" className="mobile-link" onClick={closeMenu}>Features</a>
            <a href="#team" className="mobile-link" onClick={closeMenu}>Team</a>
            <div className="mobile-menu-actions">
              <a href="https://annapurna-daily-needs.vercel.app/" target="_blank" rel="noopener noreferrer" className="mobile-link mobile-link--btn mobile-link--btn-outline" onClick={closeMenu}>
                <Globe size={16} />
                <span>Use on Web</span>
              </a>
              <a href="#" onClick={openModal} className="mobile-link mobile-link--btn">Get App</a>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <Hero openModal={openModal} />
        <AboutApp />
        <AppScreenshots />
        <TechStack />
        <DeveloperInfo />
      </main>

      <Footer openModal={openModal} />
      
      <InstallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Analytics />
    </div>
  );
}

export default App;
