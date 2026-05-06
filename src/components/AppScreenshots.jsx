import React from 'react';
import './AppScreenshots.css';

const screenshots = [
  { id: 1, src: '/screenshot1.jpg', alt: 'App Home Screen' },
  { id: 2, src: '/screenshot2.jpg', alt: 'Product Categories' },
  { id: 3, src: '/screenshot3.jpg', alt: 'Shopping Cart' },
  { id: 4, src: '/screenshot4.jpg', alt: 'Checkout Process' },
  { id: 5, src: '/screenshot5.jpg', alt: 'Order Tracking' },
  { id: 6, src: '/screenshot6.jpg', alt: 'User Profile' }
];

const AppScreenshots = () => {
  return (
    <section className="screenshots-section" id="screenshots">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">See It In <span className="text-gradient">Action</span></h2>
          <p className="section-subtitle">Take a sneak peek inside the Annapurna Daily Needs app.</p>
        </div>

        <div className="screenshots-gallery">
          {screenshots.map((shot) => (
            <div key={shot.id} className="screenshot-card">
              <img src={shot.src} alt={shot.alt} className="screenshot-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
