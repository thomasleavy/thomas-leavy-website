import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-menu">
        {/* Hamburger menu button for mobile view */}
        <button
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {/* Full-screen overlay when menu is open */}
        <div
          className={`hamburger-overlay ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(false)}
        ></div>
        {/* Navigation links */}
        <div className={`navbar-links ${menuOpen ? 'show fullscreen-menu' : ''}`}>
          {['home', 'about', 'cv', 'portfolio', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => handleLinkClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

