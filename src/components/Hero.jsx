import React from 'react';
import { Download } from 'lucide-react';
import './Hero.css';

const Hero = ({ openModal }) => {
  return (
    <section className="hero-section">
      <div className="hero-bg-blobs">
        <svg className="blob-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--secondary-light)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.4,-46.3C91.1,-33.4,97.3,-17.8,96.3,-2.6C95.3,12.6,87.1,27.3,77.3,40.6C67.6,53.8,56.3,65.6,42.8,73.5C29.2,81.3,13.4,85.2,-1.4,87.5C-16.2,89.7,-30.2,90.3,-43.3,84.6C-56.4,78.9,-68.6,66.8,-76.1,52.8C-83.6,38.8,-86.3,22.8,-87.3,7.6C-88.3,-7.7,-87.6,-22.3,-80.6,-34.1C-73.6,-45.9,-60.3,-54.9,-47.4,-62.4C-34.5,-69.9,-21.9,-75.9,-8,-72.1C5.9,-68.3,21.9,-54.7,30.7,-83.5L44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
        <svg className="blob-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--primary-light)" d="M51.9,-71.3C66.1,-62.4,75.6,-45.6,81.6,-27.6C87.6,-9.6,90.2,9.6,83.9,25.4C77.6,41.2,62.4,53.6,46.5,63.1C30.6,72.6,14.1,79.2,-2.1,82.1C-18.3,85,-34.2,84.1,-48.1,75.8C-62,67.5,-73.9,51.8,-80.4,34.3C-86.9,16.8,-88.1,-2.5,-82.1,-19.4C-76.1,-36.3,-62.9,-50.8,-48,-59.8C-33,-68.8,-16.5,-72.3,1.3,-74.1C19.1,-75.9,37.7,-80.2,51.9,-71.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge animate-fade-in animate-delay-1">
            <span className="badge-text">Now Available on Android 🚀</span>
          </div>
          <h1 className="hero-title animate-fade-in animate-delay-1">
            Fresh Groceries, <br />
            <span className="text-gradient">Delivered Daily.</span>
          </h1>
          <p className="hero-description animate-fade-in animate-delay-2">
            Annapurna Daily Needs brings the freshest produce, pantry staples, and household essentials right to your doorstep. Fast, reliable, and always fresh.
          </p>
          <div className="hero-cta animate-fade-in animate-delay-3">
            <button onClick={openModal} className="btn-primary">
              <Download size={24} />
              <span>Get App For Android</span>
            </button>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in animate-delay-2">
          <div className="image-glow"></div>
          <div className="hero-phone-frame">
            <div className="hero-scroll-track">
              <img src="/screenshot1.jpg" alt="App Screen 1" className="hero-screen" />
              <img src="/screenshot2.jpg" alt="App Screen 2" className="hero-screen" />
              <img src="/screenshot3.jpg" alt="App Screen 3" className="hero-screen" />
              <img src="/screenshot4.jpg" alt="App Screen 4" className="hero-screen" />
              <img src="/screenshot5.jpg" alt="App Screen 5" className="hero-screen" />
              <img src="/screenshot6.jpg" alt="App Screen 6" className="hero-screen" />
              {/* Duplicate first image for seamless infinite scrolling */}
              <img src="/screenshot1.jpg" alt="App Screen 1" className="hero-screen" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
