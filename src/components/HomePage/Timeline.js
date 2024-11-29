import React from "react";
import "../../style/Timeline.css";

function Timeline() {
  return (
    <div id="timeline" className="timeline-section">
      <h2>Important Dates</h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Last date to submit Full-length Manuscript</h3>
            <p>20th January 2025</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Notification of Acceptance</h3>
            <p>20th March 2025</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Last Date for Registration</h3>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Submission of Camera-ready Manuscript and Copyright Form</h3>
            <p>28th March 2025</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Conference Dates</h3>
            <p>11th and 12th April 2025</p>
          </div>
        </div>
      </div>

      <button className="download-button">
        Download Pre-Conference Schedule
      </button>
    </div>
  );
}

export default Timeline;
