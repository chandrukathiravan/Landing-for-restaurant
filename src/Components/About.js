import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/non veg.jpg";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        Food is essential for a balanced diet because it provides vital nutrients, energy, and supports overall health and well-being.
        </p>
        <p className="primary-text">
        food can be considered the best medicine because it provides nutrients that support overall health and well-being, helping to prevent and manage various health conditions.
        </p>
        
      </div>
    </div>
  );
};

export default About;
