//you can use rafce to generate a template if necessary
import React from 'react';
import './CV.css';

function CV() {
    // Add comprehensive parameters to force full PDF viewer interface on mobile
    const pdfUrl = `${process.env.PUBLIC_URL}/Thomas-Leavy-CV.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH&zoom=100&pagemode=normal&statusbar=1&messages=1&scrollbar=1&scrollbar=1&scrollbar=1`;

    return (
      <section id="cv" className="section cv-section">
        <h1 className="cv-title">CV</h1>
        <p className="cv-description">My professional journey and experiences.</p>
        <div className="cv-container">
        <iframe
  src={pdfUrl}
  title="Thomas Leavy CV"
  className="cv-iframe"
  type="application/pdf"
  allowFullScreen
></iframe>
        </div>
      </section>
    );
}

export default CV;