import React from "react";
import "../../style/Hero.css";
import ksitLogo from "../../resources/ksit.png";
import ieeeLogo from "../../resources/ieee.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="logos">
          <img src={ksitLogo} alt="KSIT College" className="institution-logo" />
          <img src={ieeeLogo} alt="IEEE" className="ieee-logo" />
          {/* <img
            src="/placeholder.svg?height=80&width=200"
            alt="Fachhochschule"
            className="institution-logo"
          /> */}
        </div>

        <div className="hero-content">
          <h1>WELCOME TO RIET-2025</h1>
          <p className="subtitle">
            WELCOME TO INTERNATIONAL CONFERENCE ON RECENT INNOVATIONS IN
            ENGINEERING SCIENCE AND TECHNOLOGY
          </p>
          <p className="organized-by">
            Organized by K S INSTITUTE OF TECHNOLOGY®
          </p>

          <div className="action-buttons">
            <button className="action-btn">SUBMIT PAPER</button>
            <button className="action-btn">TIMELINE</button>
            <button className="action-btn">DOWNLOAD BROCHURE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
