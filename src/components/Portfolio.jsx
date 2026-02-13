//you can use rafce to generate a template if necessary

import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import civicfixImage1 from '../assets/civicfix-image-1.png';
import civicfixImage2 from '../assets/civicfix-image-2.png';
import civicfixImage3 from '../assets/civicfix-image-3.png';
import primaryPalsImage1 from '../assets/primary-pals-image-1.png';
import primaryPalsImage2 from '../assets/primary-pals-image-2.png';
import homePilotImage1 from '../assets/home-pilot-1.png';
import homePilotImage2 from '../assets/home-pilot-2.png';
import homePilotImage3 from '../assets/home-pilot-3.png';

function Portfolio() {
    const [civicfixImageIndex, setCivicfixImageIndex] = useState(0);
    const [primaryPalsImageIndex, setPrimaryPalsImageIndex] = useState(0);
    const [homePilotImageIndex, setHomePilotImageIndex] = useState(0);
    const civicfixImages = [civicfixImage1, civicfixImage2, civicfixImage3];
    const primaryPalsImages = [primaryPalsImage1, primaryPalsImage2];
    const homePilotImages = [homePilotImage1, homePilotImage2, homePilotImage3];

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

        <a
          href="https://github.com/thomasleavy/carbon-coach"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">Carbon Coach</h1>
          <div className="portfolio-hover">
            <p>Personal climate-impact tracker. Technologies
            include React, Typescript, API routes, PostgreSQL and Vercel.</p>
          </div>
        </a>
        
        <a
          href="https://github.com/thomasleavy/goTutorials"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">Go Tutorials</h1>
          <div className="portfolio-hover">
            <p>A selection of Golang tutorials I created.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/peer-to-peer-chat-application"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">Peer-to-Peer Chat Application</h1>
          <div className="portfolio-hover">
            <p>Built using Node.js with various installations.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/gRPC-Chat-Application"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">gRPC Chat Application</h1>
          <div className="portfolio-hover">
            <p>Includes bi-directional streaming and server/client interaction.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/barbershop-booking-app"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">Java Barbershop Booking Application</h1>
          <div className="portfolio-hover">
            <p>Using JavaFX and Java app development.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/Weather-App"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">React API Weather Application</h1>
          <div className="portfolio-hover">
            <p>
              Built with React framework, TailwindCSS and powered by OpenWeatherMap API and Getform.io.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/nasa-api"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">NASA API Photo of the Day</h1>
          <div className="portfolio-hover">
            <p>Built with React framework and includes a PDF download option.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/MQTT-Heating-System"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">MQTT Heating System</h1>
          <div className="portfolio-hover">
            <p>
              An MQTT-based heating system allowing remote control, monitoring, and message-oriented management.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/JavaDataStructuresAndAlgorithms"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">Java Data Structures and Algorithms Examples</h1>
          <div className="portfolio-hover">
            <p>
              Implementations of DSA, i.e. ArrayQueue, Lists, Stacks, Sorts, Searches, Recursion, etc.
            </p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/theRecipeRoom"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">Recipe Website</h1>
          <div className="portfolio-hover">
            <p>HTML, CSS, JavaScript, PHP, XAMPP and Bootstrap.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/chat-application"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">Chat Application</h1>
          <div className="portfolio-hover">
            <p>Real-time chat app built with Node.js and Socket.io.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/React-To-Do-List"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">React To-Do List</h1>
          <div className="portfolio-hover">
            <p>Simple but intuitive to-do list built with React.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/simpleImageMosaic"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">Image Mosaic Concept</h1>
          <div className="portfolio-hover">
            <p>Image mosaic concept.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/BrickBreaker"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">Java Brick Breaker Game</h1>
          <div className="portfolio-hover">
            <p>A simple Java brick breaker game built with Java and various imports.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/ultimateRockPaperScissors"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">Rock Paper Scissors Website</h1>
          <div className="portfolio-hover">
            <p>Built with HTML, CSS and JavaScript.</p>
          </div>
        </a>

        <a
          href="https://github.com/thomasleavy/simpleTextAdventure"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
          <h1 className="project-title">Java Text-Based Adventure</h1>
          <div className="portfolio-hover">
            <p>Built using Java and various imports.</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;