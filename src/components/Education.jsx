import React, { useEffect, useRef, useState } from 'react';
import './Education.css';
import ncirlImage from '../assets/ncirl-image.png';
import ncirlImage2 from '../assets/ncirl-image-2.png';
import hiberniaImage from '../assets/hibernia-image.png';
import ulImage from '../assets/ul-image.png';
import ulImage2 from '../assets/ul-image-2.png';
import ulImage3 from '../assets/ul-image-3.png';

function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [ncirlImageIndex, setNcirlImageIndex] = useState(0);
  const [ulImageIndex, setUlImageIndex] = useState(0);
  const educationRef = useRef(null);

  // NCI images array
  const ncirlImages = [
    ncirlImage,
    ncirlImage2
  ];

  // UL images array
  const ulImages = [
    ulImage,
    ulImage2,
    ulImage3
  ];

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
  
    if (educationRef.current) {
      observer.observe(educationRef.current);
    }
  
    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  // Rotate NCI images every 3 seconds
  useEffect(() => {
    const ncirlTimer = setInterval(() => {
      setNcirlImageIndex((prevIndex) => (prevIndex + 1) % ncirlImages.length);
    }, 3000);

    return () => clearInterval(ncirlTimer);
  }, [ncirlImages.length]);

  // Rotate UL images every 3 seconds
  useEffect(() => {
    const ulTimer = setInterval(() => {
      setUlImageIndex((prevIndex) => (prevIndex + 1) % ulImages.length);
    }, 3000);

    return () => clearInterval(ulTimer);
  }, [ulImages.length]);

  return (
    <section id="qualifications" ref={educationRef} className="section education-section">
      <h2 className="education-title">Education</h2>
      <p className="education-description">My educational background.</p>
      
      <div className="education-content">
        {/* Education Item 1 */}
        <div className="education-item">
          <a 
            href="https://www.ncirl.ie/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`education-container-left education-link-container ncirl-carousel-container ${isVisible ? 'slide-in-left' : ''}`}
          >
            {ncirlImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`National College of Ireland ${index + 1}`}
                className={`education-preview-image ncirl-carousel-image ${index === ncirlImageIndex ? 'active' : ''}`}
              />
            ))}
            <div className="iframe-overlay"></div>
          </a>
          <div className={`education-content-right ${isVisible ? 'slide-in-right' : ''}`}>
            <h3 className="education-institution-title">National College of Ireland</h3>
            <p className="education-subtitle">Higher Diploma in Computing (Software Development)</p>
            <p className="education-dates">2023 - 2025 | Graduated with 1.1</p>
          </div>
        </div>

        {/* Education Item 2 */}
        <div className="education-item">
          <a 
            href="https://hiberniacollege.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`education-container-left education-link-container ${isVisible ? 'slide-in-left' : ''}`}
          >
            <img 
              src={hiberniaImage} 
              alt="Hibernia College Website"
              className="education-preview-image"
            />
            <div className="iframe-overlay"></div>
          </a>
          <div className={`education-content-right ${isVisible ? 'slide-in-right' : ''}`}>
            <h3 className="education-institution-title">Hibernia College</h3>
            <p className="education-subtitle">Professional Master of Education</p>
            <p className="education-dates">2019 - 2021 | Graduated with 2.1</p>
          </div>
        </div>

        {/* Education Item 3 */}
        <div className="education-item">
          <a 
            href="https://www.ul.ie/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`education-container-left education-link-container ul-carousel-container ${isVisible ? 'slide-in-left' : ''}`}
          >
            {ulImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`University of Limerick ${index + 1}`}
                className={`education-preview-image ul-carousel-image ${index === ulImageIndex ? 'active' : ''}`}
              />
            ))}
            <div className="iframe-overlay"></div>
          </a>
          <div className={`education-content-right ${isVisible ? 'slide-in-right' : ''}`}>
            <h3 className="education-institution-title">University of Limerick</h3>
            <p className="education-subtitle">Bachelor of Arts (Joint Honours) in Political Science, International Relations and Sociology</p>
            <p className="education-dates">2015 - 2019 | Graduated with 2.1</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
