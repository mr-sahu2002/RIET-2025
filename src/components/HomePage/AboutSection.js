import React from "react";
import "../../style/AboutSection.css";
import Brocher_front from "../../resources/Brocher_front.png";

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About RIET</h2>
          <p>
            Welcome to the international conference on recent innovations in
            engineering sciences and technology RIET 2025 being organized by
            department of computer science & Engg., Electronics communication
            Engg , Mechanical engg, Applied science & humanity in association
            with KSRIF . The conference RIET-2025 Offers a platform for leading
            academicians, researchers, industry professionals, postgraduate
            fellows, research scholars and students to present & discus their
            innovative ideas , research findings and practical experiences. As a
            part of Continuous Knowledge sharing process,RIET-25 ensures that
            international speaker will deliver keynote talks on recent
            technologies and potential product development all peer reviewed,
            selected and presented papers from the conference will be submitted
            for inclusion in …………..journal. We look forward to seeing you at the
            conference.
          </p>
          <button className="submit-button">Submit Paper →</button>
        </div>

        <div className="award-poster">
          <img
            src={Brocher_front}
            alt="Award Poster"
            className="award-poster-image"
          />
        </div>
      </div>

      <div className="association-section">
        <h3>In association with</h3>
        <div className="partner-logos">
          {/* <img
            src="/placeholder.svg?height=80&width=200"
            alt="Florida International University"
            className="partner-logo"
          />
          <img
            src="/placeholder.svg?height=80&width=200"
            alt="Fachhochschule Dortmund"
            className="partner-logo"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
