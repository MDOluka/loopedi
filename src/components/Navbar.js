import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="logo">LO OPEDI VENTURES</div>
      <ul className="nav-links">
        <li onClick={() => scrollTo('hero')}>Home</li>
        <li onClick={() => scrollTo('about')}>About</li>
        <li onClick={() => scrollTo('services')}>Services</li>
        <li onClick={() => scrollTo('projects')}>Projects</li>
        <li onClick={() => scrollTo('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
