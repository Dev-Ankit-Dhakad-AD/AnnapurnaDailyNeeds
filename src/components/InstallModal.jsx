import React from 'react';
import { X, Star } from 'lucide-react';
import './InstallModal.css';

const screenshots = [
  '/screenshot1.jpg',
  '/screenshot2.jpg',
  '/screenshot3.jpg',
  '/screenshot4.jpg',
  '/screenshot5.jpg',
  '/screenshot6.jpg',
];

const InstallModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <img src="/logo.png" alt="App Icon" className="modal-app-icon" />
          <div className="modal-app-info">
            <h2 className="modal-app-title">Annapurna Daily Needs</h2>
            <div className="modal-app-stats">
              <span className="stat-badge">4.9 <Star size={12} fill="currentColor" /></span>
              <span className="stat-badge">75 MB</span>
              <span className="stat-badge">Rated 3+</span>
            </div>
          </div>
        </div>

        <a href="https://github.com/Dev-Ankit-Dhakad-AD/AnnapurnaDailyNeeds/releases/download/v1.0.0/annapurna.apk" download="AnnapurnaDailyNeeds.apk" className="modal-install-btn" onClick={onClose}>
          INSTALL
        </a>

        <div className="modal-gallery-container">
          <div className="modal-gallery">
            {screenshots.map((src, index) => (
              <img key={index} src={src} alt={`Screenshot ${index + 1}`} className="modal-screenshot" loading="lazy" />
            ))}
          </div>
        </div>

        <div className="modal-about">
          <h3>About this app</h3>
          <p>
            Experience the ultimate grocery platform. Zero-latency delivery, fresh farm produce, 
            and premium easy-to-use interface. Order your daily needs today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstallModal;
