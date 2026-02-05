import React, { useEffect, useRef, useState } from 'react';
import './CV.css';
// TODO: Add your CV preview screenshot to src/assets as cv-preview.png, then uncomment the line below
// import cvPreviewImage from '../assets/cv-preview.png';

function CV() {
    const [isVisible, setIsVisible] = useState(false);
    const cvRef = useRef(null);
    const pdfUrl = `${process.env.PUBLIC_URL}/Thomas-Leavy-CV.pdf`;

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
            {/* Uncomment below and comment out the placeholder when you add cv-preview.png to src/assets */}
            {/* <img 
              src={cvPreviewImage} 
              alt="CV Preview"
              className="cv-preview-image"
            /> */}
            <div className="cv-placeholder">
              <div className="cv-placeholder-content">
                <span className="cv-placeholder-icon">📄</span>
                <span className="cv-placeholder-text">CV Preview</span>
                <span className="cv-placeholder-hint">Add cv-preview.png to assets</span>
              </div>
            </div>
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

 