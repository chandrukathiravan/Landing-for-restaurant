import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/south indian.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite South Indian Food
          </h1>
          <p className="primary-text">
          South Indian food offers diverse flavors, nutrient-rich ingredients like lentils and vegetables, healthy fats from coconut, probiotic properties from fermented foods, balanced nutrition, and various health benefits from spices. It's also rich in vegetarian options, making it suitable for different dietary preferences.
          </p>
          <button className="secondary-button">
            Upload Picture <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
