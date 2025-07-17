import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CV from './components/CV';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './components/styles/common.css';
import './components/styles/media.css';

function App() {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Define scrollToSection function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id ${sectionId} not found`);
    }
  };

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set fadeIn to true, triggering the animation
    setFadeIn(true);
  }, []);

  return (
    <div className="App">
      {/* Pass scrollToSection to Navbar */}
      <Navbar scrollToSection={scrollToSection} />
      <Home scrollToSection={scrollToSection} />
      <About />
      <CV />
      <Portfolio />
      {/* Pass scrollToSection to Contact */}
      <Contact scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;