//you can use rafce to generate a template if necessary
import React from 'react';
import './CV.css';

function CV() {
    return (
      <section id="cv" className="section cv-section">
        <h1 className="cv-title">CV</h1>
        <p className="cv-description">My professional journey and experiences.</p>
        <div className="cv-container">
        <iframe
  src={`${process.env.PUBLIC_URL}/Thomas-Leavy-CV.pdf`}
  title="Thomas Leavy CV"
  className="cv-iframe"
></iframe>
        </div>
      </section>
    );
}

export default CV;