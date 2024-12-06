//you can use rafce to generate a template if necessary

import React from 'react';
import './Contact.css';
import whiteArrowDown from '../assets/whiteArrowDown.png'; // Ensure this path matches where your image is stored
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import githubOther from '../assets/githubOther.png';
function Contact({ scrollToSection }) {
    return (
      <section id="contact" className="section contact-section">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-description">Get in touch with me!</p>
        <form 
          action="https://getform.io/f/axooypeb" 
          method="POST" 
          className="contact-form"
        >
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Your Name" 
            required 
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Your Email" 
            required 
          />

          <label htmlFor="message">Message</label>
          <textarea 
            name="message" 
            id="message" 
            placeholder="Hi Thomas, I want to discuss something with you..." 
            required 
          ></textarea>

          <button type="submit" className="submit-button">Submit</button>
        </form>

        {/*Social icons */}

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/thomasleavy" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/thomasleavy" target="_blank" rel="noopener noreferrer">
            <img src={githubOther} alt="GitHub" className="social-icon" />
          </a>
        </div>

        {/* Scroll to Home Button */}
        <img
          src={whiteArrowDown}
          alt="Scroll up"
          className="scroll-up-image"
          onClick={() => scrollToSection('home')}
        />
      </section>
    );
}

export default Contact;