import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [ignoreScroll, setIgnoreScroll] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (ignoreScroll) {
        // Ignore scroll for the duration of the timeout after clicking a link
        return;
      }

      if (window.scrollY > lastScrollY) {
        // Scrolling down
        if (currentSection !== 'contact') {
          setShowNavbar(false);
        }
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, ignoreScroll, currentSection]);

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
        threshold: 0.6, // 60% of the section must be visible to mark it as active
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (sectionId) => {
    setIgnoreScroll(true);
    setCurrentSection(sectionId);
    scrollToSection(sectionId);
    setMenuOpen(false);
    setShowNavbar(true);

    setTimeout(() => {
      setIgnoreScroll(false);
    }, 1000);
  };

  return (
    <nav className={`navbar ${showNavbar ? '' : 'navbar-hidden'}`}>
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
          <button
            className={currentSection === 'home' ? 'active-link' : ''}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </button>
          <button
            className={currentSection === 'about' ? 'active-link' : ''}
            onClick={() => handleLinkClick('about')}
          >
            About
          </button>
          <button
            className={currentSection === 'cv' ? 'active-link' : ''}
            onClick={() => handleLinkClick('cv')}
          >
            CV
          </button>
          <button
            className={currentSection === 'portfolio' ? 'active-link' : ''}
            onClick={() => handleLinkClick('portfolio')}
          >
            Portfolio
          </button>
          <button
            className={currentSection === 'contact' ? 'active-link' : ''}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


