import React from "react";
import "../../style/Hero.css";
import ksitLogo from "../../resources/ksit.png";
import ieeeLogo from "../../resources/ieee.png";
import brochure from "../../resources/KSIT Brochure (RIET-2025).pdf";

function Hero() {
  const handleTimelineClick = () => {
    const timelineSection = document.getElementById("timeline");
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadClick = () => {
    // Path to your brochure PDF file
    const pdfUrl = brochure; // Assuming the PDF is in the public folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "RIET_Brochure.pdf"; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="logos">
          <img src={ksitLogo} alt="KSIT College" className="institution-logo" />
          <img src={ieeeLogo} alt="IEEE" className="ieee-logo" />
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
            <button className="action-btn" onClick={handleTimelineClick}>
              TIMELINE
            </button>
            <button className="action-btn" onClick={handleDownloadClick}>
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
