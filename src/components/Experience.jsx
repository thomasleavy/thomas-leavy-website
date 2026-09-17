import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';
import departmentEducationImage from '../assets/department-of-education-image.png';
import leavysShoesImage from '../assets/leavys-shoes-image.png';
import leavysImage2 from '../assets/Leavys-image-2.png';
import leavysImage3 from '../assets/Leavys-image-3.png';

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [leavysImageIndex, setLeavysImageIndex] = useState(0);
  const experienceRef = useRef(null);

  // Leavys images array
  const leavysImages = [
    leavysShoesImage,
    leavysImage2,
    leavysImage3
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
  
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
  
    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  // Rotate Leavys images every 3 seconds
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setLeavysImageIndex((prevIndex) => (prevIndex + 1) % leavysImages.length);
    }, 3000);

    return () => clearInterval(carouselTimer);
  }, [leavysImages.length]);

  return (
    <section id="experience" ref={experienceRef} className="section experience-section">
      <h2 className="experience-title">Experience</h2>
      <p className="experience-description">My professional experience.</p>
      
      <div className="experience-content">
        {/* Experience Item 1 */}
        <div className="experience-item">
          <a 
            href="https://www.basesite.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`experience-container-left experience-link-container ${isVisible ? 'slide-in-left' : ''}`}
          >
            <iframe
              src="https://www.basesite.com/"
              title="Basesite Website"
              className="experience-iframe"
              allowFullScreen
            />
            <div className="iframe-overlay"></div>
          </a>
          <div className={`experience-content-right ${isVisible ? 'slide-in-right' : ''}`}>
            <h3 className="experience-company-title">Basesite</h3>
            <p className="experience-subtitle">Junior Software Developer Internship</p>
            <p className="experience-dates">Full-time: June 2025 - September 2025 | Part-time: September 2025 - January 2026</p>
            <p className="experience-details">
              Delivered full-stack feature enhancements for FacilityConnect using Angular, TypeScript, and .NET/C#. Built performance monitoring dashboards with real-time analytics and improved user workflows through testing frameworks. Collaborated via GitHub pull requests, code reviews, and maintained code quality with SonarCloud. Utilised AI-assisted development tools to enhance efficiency and participated in ISO 27001 certification processes.
            </p>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="experience-item">
          <a 
            href="https://www.gov.ie/en/department-of-education/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`experience-container-left experience-link-container ${isVisible ? 'slide-in-left' : ''}`}
          >
            <img 
              src={departmentEducationImage} 
              alt="Department of Education Website"
              className="experience-preview-image"
            />
            <div className="iframe-overlay"></div>
          </a>
          <div className={`experience-content-right ${isVisible ? 'slide-in-right' : ''}`}>
            <h3 className="experience-company-title">Department of Education and Youth</h3>
            <p className="experience-subtitle">Primary School Teacher (Full-time, permanent)</p>
            <p className="experience-dates">September 2021 - Present</p>
            <p className="experience-details">
              Planned and delivered curriculum-aligned lessons while managing classroom activities and maintaining discipline. Collaborated with staff, parents, and external professionals to support student learning and behaviour. Conducted assessments, tracked pupil progress, and ensured individual educational needs were met. Fostered strong school-community relationships through active participation in staff meetings and school events.
            </p>
          </div>
        </div>

        {/* Experience Item 3 */}
        <div className="experience-item">
          <a 
            href="https://leavysshoes.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`experience-container-left experience-link-container leavys-carousel-container ${isVisible ? 'slide-in-left' : ''}`}
          >
            {leavysImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Leavys Shoes ${index + 1}`}
                className={`experience-preview-image leavys-carousel-image ${index === leavysImageIndex ? 'active' : ''}`}
              />
            ))}
            <div className="iframe-overlay"></div>
          </a>
          <div className={`experience-content-right ${isVisible ? 'slide-in-right' : ''}`}>
            <h3 className="experience-company-title">Leavys Shoes</h3>
            <p className="experience-subtitle">Sales Associate and Keyholder</p>
            <p className="experience-dates">January 2013 - December 2022</p>
            <p className="experience-details">
              Provided exceptional customer service, managed daily store operations as keyholder, and maintained accurate stock records. Handled financial transactions, processed payments, and managed end-of-day records. Enhanced online presence by updating the business website and managing social media platforms to engage customers and promote products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
