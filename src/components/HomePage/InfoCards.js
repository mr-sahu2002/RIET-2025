import React from "react";
import "../../style/InfoCards.css";

function InfoCards() {
  return (
    <div className="info-cards">
      <div className="card date-card">
        <div className="card-content">
          <h3>April 11-12, 2025</h3>
          <p>Date</p>
        </div>
      </div>

      <div className="card venue-card">
        <div className="card-content">
          <h3>K S Institute Of Technology</h3>
          <p>Venue</p>
        </div>
      </div>

      <div className="card conference-card">
        <div className="card-content">
          <h3>IEEE Approved Conference</h3>
          <p>Conference Number: 64042</p>
        </div>
      </div>

      <div className="card participation-card">
        <div className="card-content">
          <h3>Global Participation</h3>
          <p>Researchers from Around the World</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
