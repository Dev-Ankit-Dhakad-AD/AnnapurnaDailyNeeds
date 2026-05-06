import React, { useState } from 'react';
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

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container nav-container">
          {/* User's logo should be named logo.png and placed in public/ */}
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
          <div className="nav-links">
            <a href="#about" className="nav-link">Features</a>
            <a href="#team" className="nav-link">Team</a>
            <a href="#" onClick={openModal} className="nav-btn">Get App</a>
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
