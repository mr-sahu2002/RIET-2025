import React from "react";
import "../../style/AboutSection.css";

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About RIET</h2>
          <p>
            International Conference On Recent Innovations In Engineering
            Science And Technology (RIET-2025) is intended to provide a common
            platform to Research Scholars, Academicians, Scientists, Industrial
            Practitioners and Engineers in frontline evolutionary and
            challenging fields. RIET-2025 will act as a premier forum for
            researchers and practitioners interested in advances and
            applications of Knowledge Engineering, Image Processing and
            Communication Systems. It is an opportunity to observe the latest
            research trends and recent ideas in these areas. RIET-2025 aims to
            strengthen relationships between Industries, Organizations and
            Institutions.
          </p>
          <p>
            The foremost objective is to create a networking stage for
            intellectuals, to exchange their ideas and findings for
            technological evolution to benefit society. It is expected to bring
            the global researcher community together for knowledge sharing,
            innovation and technological achievements. Authors are solicited to
            contribute to the conference by submitting articles that illustrate
            research results, projects, experiment works and industrial
            experiences that describe significant advances within the scope of
            the conference
          </p>
          <button className="submit-button">Submit Paper →</button>
        </div>

        {/* <div className="award-poster">
          <div className="award-content">
            <h3>Best Ph.D. Thesis Award CSITSS-2024</h3>
            <div className="trophy-section">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Trophy Icon"
                className="trophy-icon"
              />
            </div>
            <div className="award-details">
              <div className="eligibility">
                <h4>ELIGIBILITY</h4>
                <p>Ph.D. awarded between June 1, 2023, and May 31, 2024</p>
              </div>
              <div className="submission">
                <h4>SUBMISSION REQUIREMENTS</h4>
                <p>Submit your Ph.D. Thesis in PDF format</p>
              </div>
              <div className="fee">
                <h4>APPLICATION FEE: ₹1000/-</h4>
                <p>Scan the QR below for payments</p>
              </div>
            </div>
          </div>
        </div> */}
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
