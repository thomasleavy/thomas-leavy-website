//you can use rafce to generate a template if necessary
// Home.jsx
import React, { useEffect, useState } from 'react';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import whiteArrowDown from '../assets/whiteArrowDown.png';
import githubOther from '../assets/githubOther.png';
import './Home.css';

function Home({ scrollToSection }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect after 3 seconds
    //how long it takes for it to appear
    const timer = setTimeout(() => setFadeIn(true), 600);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section id="home" className="section">
      <div className={`content ${fadeIn ? 'fade-in-content' : ''}`}>
        <p className="home-name">Hey! I'm Thomas Leavy.</p>
        <div className="home-info-container">
          <p className="home-info">
            I'm a Software Engineer at <strong>Basesite</strong> and a <strong>Primary School Teacher</strong> at the Department of Education and Youth, based in <strong>Limerick, Ireland</strong>.
          </p>
        </div>

        {/*Social icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/thomasleavy" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/thomasleavy" target="_blank" rel="noopener noreferrer">
            <img src={githubOther} alt="GitHub" className="social-icon" />
          </a>
        </div>
        
        {/* Scroll image */}
        <img
          src={whiteArrowDown}
          alt="Scroll down"
          className="scroll-image"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
}

export default Home;
