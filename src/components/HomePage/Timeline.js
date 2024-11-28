import React from "react";
import "../../style/Timeline.css";

function Timeline() {
  return (
    <div className="timeline-section">
      <h2>Important Dates</h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Submission of Full-length Manuscript (opens from)</h3>
            <p>1st January 2025</p>
          </div>
        </div>

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
            {/* <p className="strikethrough">28th August 2024</p> */}
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Early Bird Registration</h3>
            <p>Before 18th febuary 2025</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Last Date for Registration</h3>
            <p className="strikethrough">28th March 2025</p>
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
            <h3>Pre-Conference Tutorial</h3>
            <p>7th November 2024</p>
            <p className="venue-info">
              Venue: ISE Department | Time: 8:30 AM - 9:30 AM
            </p>

            <div className="track-info">
              <h4>
                Track 1: AI for All - MV Seminar Hall (Dept. of Civil Engg., 3rd
                Floor)
              </h4>
              <div className="session">
                <p>9:30 AM - 11:00 AM</p>
                <p className="speaker">Mr. Raj Pagaku</p>
                <p className="topic">
                  Topic: Inclusive AI: Shaping the Future for Everyone
                </p>
              </div>

              <div className="break">
                <p>11:00 AM - 11:30 AM</p>
                <p>Tea Break</p>
              </div>

              <div className="session">
                <p>11:30 AM - 1:00 PM</p>
                <p className="speaker">Dr. Nagaraju G</p>
                <p className="topic">Topic: AI in Health Care</p>
              </div>
            </div>

            <div className="track-info">
              <h4>
                Track 2: Digital Transformation - ET Seminar Hall (Dept. of
                Electronics & Telecom. Engg., Ground Floor)
              </h4>
              <div className="session">
                <p>9:30 AM - 11:00 AM</p>
                <p className="speaker">Dr. K B Shyam Prasad</p>
                <p className="topic">
                  Topic: Accelerate Innovation through Digital Tools
                </p>
              </div>

              <div className="break">
                <p>11:00 AM - 11:30 AM</p>
                <p>Tea Break</p>
              </div>

              <div className="session">
                <p>11:30 AM - 1:00 PM</p>
                <p className="speaker">Mr. Abhi Anand</p>
                <p className="topic">Topic: Sustainable AI Applications</p>
              </div>
            </div>
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
