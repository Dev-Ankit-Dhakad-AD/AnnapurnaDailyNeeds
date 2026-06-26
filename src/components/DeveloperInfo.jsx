import React from 'react';
import { Code, Briefcase, Mail } from 'lucide-react';
import './DeveloperInfo.css';

const developers = [
  {
    id: 1,
    name: 'Krishan Kumar Awasthi',
    role: 'Lead Developer',
    image: 'https://placehold.co/150x150/22c55e/ffffff?text=KK',
    bio: 'Passionate about building seamless mobile experiences for everyday needs.',
    socials: { github: '#', linkedin: '#', email: 'mailto:#' }
  },
  {
    id: 2,
    name: 'Ankit Dhakad',
    role: 'Co-Developer',
    image: '/ankit.jpeg',
    bio: 'Dedicated to writing clean, efficient code to power our delivery platform.',
    socials: { github: '#', linkedin: '#', email: 'mailto:#' }
  },
  {
    id: 3,
    name: 'Lokendra Prajapati',
    role: 'UI/UX Developer',
    image: 'https://placehold.co/150x150/3b82f6/ffffff?text=LP',
    bio: 'Crafting beautiful and intuitive interfaces that users love to interact with.',
    socials: { github: '#', linkedin: '#', email: 'mailto:#' }
  },
  {
    id: 4,
    name: 'Anas Khan',
    role: 'Software Tester',
    image: '/anas.jpeg',
    bio: 'Ensuring every feature works flawlessly for a bug-free shopping experience.',
    socials: { github: '#', linkedin: '#', email: 'mailto:#' }
  }
];

const DeveloperInfo = () => {
  return (
    <section className="developers-section" id="team">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Meet the <span className="text-gradient">Developers</span></h2>
          <p className="section-subtitle">The passionate team behind Annapurna Daily Needs.</p>
        </div>

        <div className="developers-grid">
          {developers.map((dev) => (
            <div key={dev.id} className="developer-card">
              <div className="dev-image-wrapper">
                <img src={dev.image} alt={dev.name} className="dev-image" />
              </div>
              <h3 className="dev-name">{dev.name}</h3>
              <p className="dev-role">{dev.role}</p>
              <p className="dev-bio">{dev.bio}</p>
              
              <div className="dev-socials">
                <a href={dev.socials.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Portfolio/Code">
                  <Code size={20} />
                </a>
                <a href={dev.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Professional Profile">
                  <Briefcase size={20} />
                </a>
                <a href={dev.socials.email} className="social-link" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperInfo;
