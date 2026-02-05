//you can use rafce to generate a template if necessary
// Home.jsx
import React, { useEffect, useState, useRef, useCallback } from 'react';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import arrowDown from '../assets/arrowDown.png';
import githubOther from '../assets/githubOther.png';
import carouselPhoto1 from '../assets/carousel-photo-1.JPG';
import carouselPhoto2 from '../assets/carousel-photo-2.JPG';
import carouselPhoto3 from '../assets/carousel-photo-3.JPG';
import carouselPhoto4 from '../assets/carousel-image-4.jpg';
import './Home.css';

function Home({ scrollToSection }) {
  const [fadeIn, setFadeIn] = useState(false);
  const [carouselSlideIn, setCarouselSlideIn] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselIntervalRef = useRef(null);

  // Professional photos in order
  const professionalPhotos = [
    carouselPhoto1,
    carouselPhoto2,
    carouselPhoto3,
    carouselPhoto4
  ];

  useEffect(() => {
    // Trigger slide-in animations
    const carouselTimer = setTimeout(() => setCarouselSlideIn(true), 100);
    const textTimer = setTimeout(() => setFadeIn(true), 300);
    return () => {
      clearTimeout(carouselTimer);
      clearTimeout(textTimer);
    }; // Cleanup timers on unmount
  }, []);

  // Function to start/reset the carousel interval
  const startCarouselInterval = useCallback(() => {
    // Clear any existing interval
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }
    
    // Start new interval
    carouselIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % professionalPhotos.length);
    }, 3000);
  }, [professionalPhotos.length]);

  useEffect(() => {
    // Auto-rotate carousel every 3 seconds
    startCarouselInterval();

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    }; // Cleanup on unmount
  }, [startCarouselInterval]);

  // Handle indicator click - reset timer
  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
    startCarouselInterval(); // Reset the 3-second timer
  };

  return (
    <section id="home" className="section">
      <div className="home-main-container">
        {/* Left Side: Professional Photo Carousel */}
        <div className={`photo-carousel-wrapper ${carouselSlideIn ? 'slide-in-left' : ''}`}>
          <div className="photo-carousel">
            {professionalPhotos.map((photo, index) => (
              <div
                key={index}
                className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
              >
                <img 
                  src={photo} 
                  alt={`Professional photo ${index + 1}`}
                  className="carousel-photo"
                />
              </div>
            ))}
          </div>
          {/* Carousel indicators */}
          <div className="carousel-indicators">
            {professionalPhotos.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => handleIndicatorClick(index)}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className={`home-content-wrapper ${fadeIn ? 'fade-in-content' : ''}`}>
          <div className="software-developer-badge">Software Developer</div>
          <p className="home-name">Thomas Leavy</p>
          <div className="home-info-container">
            <p className="home-info">
              <strong>Driven</strong>, <strong>resilient</strong> software developer with hands-on <strong>experience</strong> building <strong>dynamic</strong> applications. Bringing a <strong>professional</strong> background in education into tech, with strong <strong>collaboration</strong>, <strong>communication</strong>, and <strong>problem-solving</strong> skills. Seeking <strong>opportunities</strong> to contribute to <strong>meaningful</strong> products and <strong>grow</strong> in collaborative teams.
            </p>
          </div>

          {/*Social icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/thomasleavy" target="_blank" rel="noopener noreferrer" className="social-link" data-tooltip="https://www.linkedin.com/in/thomasleavy">
              <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/thomasleavy" target="_blank" rel="noopener noreferrer" className="social-link" data-tooltip="https://github.com/thomasleavy">
              <img src={githubOther} alt="GitHub" className="social-icon" />
            </a>
          </div>
        </div>
        
        {/* Scroll arrow - Centered on page */}
        <div className="scroll-arrow-container">
          <img
            src={arrowDown}
            alt="Scroll down"
            className="scroll-image"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
