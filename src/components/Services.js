import React from 'react';
import { FaBolt, FaSolarPanel, FaIndustry, FaHome } from 'react-icons/fa';

const services = [
  { icon: <FaIndustry />, title: 'Industrial Installations' },
  { icon: <FaHome />, title: 'Commercial & Residential Wiring' },
  { icon: <FaSolarPanel />, title: 'Solar & Renewable Systems' },
  { icon: <FaBolt />, title: 'Power System Design & Maintenance' },
];

const Services = () => (
  <section id="services" className="services-section">
    <h2>Our Services</h2>
    <div className="services-grid">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
