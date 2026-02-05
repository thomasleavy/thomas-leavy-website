import React, { useEffect, useRef, useState } from 'react';
import './CV.css';
import cvImage1 from '../assets/cv-image-1.png';
import cvImage2 from '../assets/cv-image-2.png';
import cvImage3 from '../assets/cv-image-3.png';

function CV() {
    const [isVisible, setIsVisible] = useState(false);
    const [cvImageIndex, setCvImageIndex] = useState(0);
    const cvRef = useRef(null);
    const pdfUrl = `${process.env.PUBLIC_URL}/Thomas-Leavy-CV.pdf`;

    // CV images array
    const cvImages = [
        cvImage1,
        cvImage2,
        cvImage3
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.3,
          }
        );
      
        if (cvRef.current) {
          observer.observe(cvRef.current);
        }
      
        return () => {
          if (cvRef.current) {
            observer.unobserve(cvRef.current);
          }
        };
      }, []);

    // Rotate CV images every 3 seconds
    useEffect(() => {
        if (isVisible) {
            const carouselTimer = setInterval(() => {
                setCvImageIndex((prevIndex) => (prevIndex + 1) % cvImages.length);
            }, 3000);

            return () => clearInterval(carouselTimer);
        }
    }, [isVisible, cvImages.length]);

    return (
      <section id="cv" ref={cvRef} className="section cv-section">
        <h1 className="cv-title">CV</h1>
        <p className="cv-description">My CV/Resume</p>
        
        <div className="cv-content">
          {/* Left: CV Preview Container */}
          <a 
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`cv-container-left cv-link-container ${isVisible ? 'slide-in-left' : ''}`}
          >
            {cvImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`CV Preview ${index + 1}`}
                className={`cv-preview-image ${index === cvImageIndex ? 'active' : ''}`}
              />
            ))}
            <div className="iframe-overlay"></div>
          </a>

          {/* Right: Button */}
          <div className={`cv-content-right ${isVisible ? 'slide-in-right' : ''}`}>
            <a 
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-download-button"
            >
              View / Download CV
            </a>
          </div>
        </div>
      </section>
    );
}

export default CV;

 