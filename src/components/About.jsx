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
                <h2 className={`about-title ${isVisible ? 'visible' : ''}`}>About Me</h2>
                <p className={`about-description ${isVisible ? 'visible' : ''}`}>
                    Hello, my name is Thomas Leavy. I am a hardworking, flexible and resilient software engineer and primary school teacher based in Limerick, Ireland. My CV, portfolio and contact info is available below. For more enquiries, please email thomasleavy1@outlook.com.
                </p>
                <a href="/Thomas-Leavy-CV.pdf" download className={`download-button ${isVisible ? 'visible' : ''}`}>
                    Download CV
                </a>
            </div>
        </section>
    );
}

export default About;
