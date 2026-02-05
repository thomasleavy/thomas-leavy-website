import React from 'react';
import './CV.css';

function CV() {
    const pdfUrl = `${process.env.PUBLIC_URL}/Thomas-Leavy-CV.pdf`;

    return (
      <section id="cv" className="section cv-section">
        <h1 className="cv-title">CV</h1>
        <p className="cv-description">Download or view my CV/Resume.</p>
        
        <div className="cv-button-container">
          <a 
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-download-button"
          >
            View / Download CV
          </a>
        </div>
      </section>
    );
}

export default CV;

 