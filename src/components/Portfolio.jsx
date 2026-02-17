//you can use rafce to generate a template if necessary

import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import lineageImage1 from '../assets/lineage-image-1.png';
import lineageImage2 from '../assets/lineage-image-2.png';
import lineageImage3 from '../assets/lineage-image-3.png';
import lineageImage4 from '../assets/lineage-image-4.png';
import lineageImage5 from '../assets/lineage-image-5.png';
import civicfixImage1 from '../assets/civicfix-image-1.png';
import civicfixImage2 from '../assets/civicfix-image-2.png';
import civicfixImage3 from '../assets/civicfix-image-3.png';
import primaryPalsImage1 from '../assets/primary-pals-image-1.png';
import primaryPalsImage2 from '../assets/primary-pals-image-2.png';
import homePilotImage1 from '../assets/home-pilot-1.png';
import homePilotImage2 from '../assets/home-pilot-2.png';
import homePilotImage3 from '../assets/home-pilot-3.png';

function Portfolio() {
    const [lineageImageIndex, setLineageImageIndex] = useState(0);
    const [civicfixImageIndex, setCivicfixImageIndex] = useState(0);
    const [primaryPalsImageIndex, setPrimaryPalsImageIndex] = useState(0);
    const [homePilotImageIndex, setHomePilotImageIndex] = useState(0);
    const lineageImages = [lineageImage1, lineageImage2, lineageImage3, lineageImage4, lineageImage5];
    const civicfixImages = [civicfixImage1, civicfixImage2, civicfixImage3];
    const primaryPalsImages = [primaryPalsImage1, primaryPalsImage2];
    const homePilotImages = [homePilotImage1, homePilotImage2, homePilotImage3];

    useEffect(() => {
        const timer = setInterval(() => {
            setLineageImageIndex((prev) => (prev + 1) % lineageImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [lineageImages.length]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCivicfixImageIndex((prev) => (prev + 1) % civicfixImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [civicfixImages.length]);

    useEffect(() => {
        const timer = setInterval(() => {
            setPrimaryPalsImageIndex((prev) => (prev + 1) % primaryPalsImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [primaryPalsImages.length]);

    useEffect(() => {
        const timer = setInterval(() => {
            setHomePilotImageIndex((prev) => (prev + 1) % homePilotImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [homePilotImages.length]);

    return (
      <section id="portfolio" className="section portfolio-section">
        <h1 className="portfolio-title">Portfolio</h1>
        <p className="portfolio-description">Some of my work and projects.</p>

         {/*Portoflio grid card*/}

         <div className="portfolio-grid">
        <a
          href="https://github.com/thomasleavy/lineage"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item portfolio-item-with-carousel"
        >
          <div className="portfolio-carousel-container">
            {lineageImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Lineage ${index + 1}`}
                className={`portfolio-carousel-image ${index === lineageImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <h1 className="project-title">Lineage</h1>
          <div className="portfolio-hover">
            <p>Lineage is a garment archive and lookbook that is useful for organising/showcasing fashion work - built with Next.js.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/civic-fix"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item portfolio-item-with-carousel"
        >
          <div className="portfolio-carousel-container">
            {civicfixImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`CivicFix ${index + 1}`}
                className={`portfolio-carousel-image ${index === civicfixImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <h1 className="project-title">CivicFix</h1>
          <div className="portfolio-hover">
            <p>A prototype app that lets users report issues and suggestions in their local area to their local government. An exercise in direct democracy, civic participation and voice.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/home-pilot"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item portfolio-item-with-carousel"
        >
          <div className="portfolio-carousel-container">
            {homePilotImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Home Pilot ${index + 1}`}
                className={`portfolio-carousel-image ${index === homePilotImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <h1 className="project-title">Home Pilot</h1>
          <div className="portfolio-hover">
            <p>One dashboard for thermostat, hot water, lights and sensors. Angular, Node.js, MQTT, WebSocket and Eclipse Mosquitto; local broker and optional device simulator.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/eLearningApplication"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item portfolio-item-with-carousel"
        >
          <div className="portfolio-carousel-container">
            {primaryPalsImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Primary pals e-Learning ${index + 1}`}
                className={`portfolio-carousel-image ${index === primaryPalsImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <h1 className="project-title">Primary pals e-Learning Platform</h1>
          <div className="portfolio-hover">
            <p>Full-stack e-learning application for primary school pupils and teachers, built with React, Java, Spring Boot, BCrypt, PostgreSQL, pgAdmin 4 and Maven.</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;