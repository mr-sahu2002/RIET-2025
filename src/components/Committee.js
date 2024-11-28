import React from "react";
import "../style/Committee.css";

function Committee({ onSelectCategory }) {
  const committees = [
    { title: "Chief Patron", link: "chief-patron" },
    { title: "Patrons", link: "patrons" },
    { title: "Conference Chairs", link: "conference-chairs" },
    { title: "Program Chairs", link: "program-chairs" },
    { title: "Technical Program Chairs", link: "technical-program" },
    { title: "Finance Chairs", link: "finance" },
    { title: "Publication Chairs", link: "publication" },
    { title: "Sponsorship Chairs", link: "sponsorship" },
    { title: "Publicity and Media Chairs", link: "publicity" },
    { title: "Organizing Committee", link: "organizing" },
    { title: "Advisory Committee", link: "advisory" },
    { title: "Website Chairs", link: "website" },
    { title: "Conference Convenors", link: "convenors" },
    { title: "Session Management", link: "session" },
    { title: "Hospitality", link: "hospitality" },
    { title: "Transportation", link: "transportation" },
    { title: "Registration Committee", link: "registration" },
  ];

  return (
    <div className="committee-section">
      <div className="announcement-banner">
        <div className="announcement-content">
          <span>Click to download RIET Souvenir</span>
          <span>
            Please find the final program schedule updated as on 5th November
          </span>
        </div>
      </div>

      <div className="committee-container">
        <h1>Committee Structure</h1>
        <div className="committee-grid">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="committee-card"
              onClick={() => onSelectCategory(committee.link)}
              role="button"
              tabIndex={0}
            >
              <div className="committee-content">
                <h3>{committee.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Committee;
