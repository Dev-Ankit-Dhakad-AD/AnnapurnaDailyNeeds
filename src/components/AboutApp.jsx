import React from 'react';
import { ShoppingBasket, Clock, ShieldCheck, Heart } from 'lucide-react';
import './AboutApp.css';

const features = [
  {
    id: 1,
    icon: <ShoppingBasket size={32} />,
    title: 'Wide Variety',
    description: 'From fresh farm produce to household essentials, find everything you need in one place.'
  },
  {
    id: 2,
    icon: <Clock size={32} />,
    title: 'Fast Delivery',
    description: 'Get your daily needs delivered to your doorstep quickly and reliably.'
  },
  {
    id: 3,
    icon: <ShieldCheck size={32} />,
    title: 'Secure Payments',
    description: 'Multiple safe payment options including UPI, Cards, and Cash on Delivery.'
  },
  {
    id: 4,
    icon: <Heart size={32} />,
    title: 'Quality Assured',
    description: 'We handpick the best quality products so you and your family eat fresh and healthy.'
  }
];

const AboutApp = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Why Choose <span className="text-gradient">Annapurna?</span></h2>
          <p className="section-subtitle">We make grocery shopping effortless, so you can spend more time doing what you love.</p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutApp;
