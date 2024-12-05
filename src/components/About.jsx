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
            threshold: 0.1, // Trigger animation when 10% of the section is visible
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc in quam commodo cursus. Cras volutpat odio in velit sagittis, eget aliquet eros interdum. Fusce fringilla, velit in convallis dictum, lectus arcu euismod odio, eu malesuada elit eros vel ante. Suspendisse volutpat consectetur varius.
                </p>
                <a href="/Thomas-Leavy-CV.pdf" download className={`download-button ${isVisible ? 'visible' : ''}`}>
                    Download CV
                </a>
            </div>
        </section>
    );
}

export default About;
