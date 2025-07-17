//you can use rafce to generate a template if necessary

import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
      <section id="portfolio" className="section portfolio-section">
        <h1 className="portfolio-title">Portfolio</h1>
        <p className="portfolio-description">Some of my work and projects.</p>

         {/*Portoflio grid card*/}

         <div className="portfolio-grid">
        <a
          href="https://github.com/thomasleavy/eLearningApplication"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-item"
        >
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