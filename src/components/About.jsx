//you can use rafce to generate a template if necessary

import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import thumbnail from '../assets/thumbnail.jpg';

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

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
            threshold: 0.3, // Trigger animation when most of the section is visible
          }
        );
      
        if (aboutRef.current) {
          observer.observe(aboutRef.current);
        }
      
        return () => {
          if (aboutRef.current) {
            observer.unobserve(aboutRef.current);
          }
        };
      }, []);

    return (
        <section id="about" ref={aboutRef} className="section about-section">
            <img src={thumbnail} alt="Profile" className={`profile-image ${isVisible ? 'visible' : ''}`} />
            <div className={`about-content ${isVisible ? 'visible' : ''}`}>
                {/* What I'm Looking For */}
                <div className="about-subsection">
                    <div className="subsection-header">
                        <span className="subsection-icon">❓</span>
                        <h3 className="subsection-title">What I'm Looking For</h3>
                    </div>
                    <p className="subsection-text">
                        Graduate software roles, junior roles, networking, collaboration, and mentorship opportunities
                    </p>
                </div>

                {/* Developing via */}
                <div className="about-subsection">
                    <div className="subsection-header">
                        <span className="subsection-icon">💻</span>
                        <h3 className="subsection-title">Developing via</h3>
                    </div>
                    <p className="subsection-text">
                        Remote • Hybrid • On-site
                    </p>
                </div>

                {/* Location */}
                <div className="about-subsection">
                    <div className="subsection-header">
                        <span className="subsection-icon">📍</span>
                        <h3 className="subsection-title">Location</h3>
                    </div>
                    <p className="subsection-text">
                        Based in Limerick, Ireland
                    </p>
                </div>

                {/* Languages */}
                <div className="about-subsection">
                    <div className="subsection-header">
                        <span className="subsection-icon">🌐</span>
                        <h3 className="subsection-title">Languages</h3>
                    </div>
                    <p className="subsection-text">
                        English: <strong>Native</strong> | Irish: <strong>Professional</strong> | German: <strong>Working</strong>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
