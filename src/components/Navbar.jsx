import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (sectionId) => {
    setCurrentSection(sectionId);
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <button
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div
          className={`hamburger-overlay ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(false)}
        ></div>
        <div className={`navbar-links ${menuOpen ? 'show fullscreen-menu' : ''}`}>
          {['home', 'about', 'cv', 'experience', 'qualifications', 'portfolio', 'contact'].map((section) => {
            // Map section IDs to display names
            const displayName = section === 'qualifications' ? 'Education' : section.charAt(0).toUpperCase() + section.slice(1);
            return (
              <button
                key={section}
                className={currentSection === section ? 'active-link' : ''}
                onClick={() => handleLinkClick(section)}
              >
                {displayName}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


