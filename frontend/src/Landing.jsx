import React, { useEffect } from 'react';
import './'; // Assuming you have a CSS file for styling

const LandingPage = () => {
  useEffect(() => {
    const slogan = document.querySelector('.slogan');
    slogan.classList.add('zoomIn');
  }, []);

  return (
    <div className="landing">
      <header className="header">
        <h2 className="slogan" style={{ color: 'blue' }}>Welcome to Zoom</h2>
        <button className="btn">Book a Consultation</button>
      </header>
    </div>
  );
};

export default LandingPage;
