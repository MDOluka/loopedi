import React from 'react';

const projects = [
  {
    title: 'Industrial Plant Wiring',
    image: '/images/project1.jpg',
    link: 'https://github.com/MDOluka/industrial-wiring'
  },
  {
    title: 'Commercial Solar Installation',
    image: '/images/project2.jpg',
    link: 'https://github.com/MDOluka/commercial-solar'
  }
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Our Projects</h2>
    <div className="projects-grid">
      {projects.map((proj, index) => (
        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-card" key={index}>
          <img src={proj.image} alt={proj.title} />
          <h3>{proj.title}</h3>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
