import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-message">
        <p>
          Wobb is an influencer marketing platform that connects influencers
          with brands. We help influencers collaborate with the right brands and
          create meaningful partnerships.
        </p>
      </div>
      <div className="about-cta">
        <p>Join us today to expand your reach and grow with top brands!</p>
        <a href="/signup" className="cta-button">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default About;
