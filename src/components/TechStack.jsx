import React from 'react';
import { Smartphone, Layers, Terminal, Code, Server } from 'lucide-react';
import './TechStack.css';

const technologies = [
  {
    id: 1,
    name: 'Flutter',
    icon: <Smartphone size={32} />,
    color: '#02569B',
    description: 'Powering our seamless cross-platform UI.'
  },
  {
    id: 2,
    name: 'Dart',
    icon: <Terminal size={32} />,
    color: '#0175C2',
    description: 'The robust programming language behind our business logic.'
  },
  {
    id: 3,
    name: 'Kotlin',
    icon: <Layers size={32} />,
    color: '#B125EA',
    description: 'Ensuring native performance and deep Android integration.'
  },
  {
    id: 4,
    name: 'React',
    icon: <Code size={32} />,
    color: '#61DAFB',
    description: 'Creating dynamic and highly interactive web interfaces.'
  },
  {
    id: 5,
    name: 'Node.js',
    icon: <Server size={32} />,
    color: '#339933',
    description: 'Providing a scalable, high-performance backend architecture.'
  }
];

const TechStack = () => {
  return (
    <section className="tech-section" id="tech">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Powered By <span className="text-gradient">Modern Tech</span></h2>
          <p className="section-subtitle">Annapurna Daily Needs is built using industry-leading technologies for a smooth, fast, and reliable experience.</p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <div key={tech.id} className="tech-card">
              <div 
                className="tech-icon-wrapper" 
                style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
              >
                {tech.icon}
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-description">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
