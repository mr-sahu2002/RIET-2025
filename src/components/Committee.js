import React from "react";
import "../style/Committee.css";

function Committee({ onSelectCategory }) {
  const committees = [
    { title: "Chief Patrons", link: "chief-patrons" },
    { title: "Patrons", link: "patrons" },
    { title: "Conference Chair", link: "conference-chair" },
    { title: "Chief Convener", link: "chief-convener" },
    { title: "Co-Convener", link: "co-convener" },
    { title: "Organizing Secretary", link: "organizing-secretary" },
    { title: "Program Chairs", link: "program-chairs" },
    { title: "Technical Program Chairs", link: "technical-program-chairs" },
    { title: "Finance Chairs", link: "finance-chairs" },
    { title: "Publication Chairs", link: "publication-chairs" },
    { title: "Sponsorship Chairs", link: "sponsorship-chairs" },
    { title: "Publicity Chairs", link: "publicity-chairs" },
    { title: "Hospitality Chairs", link: "hospitality-chairs" },
    { title: "Registration Committee", link: "registration-committee" },
    { title: "Advisory Committee", link: "advisory-committee" },
  ];

  const handleSelectCategory = (link) => {
    onSelectCategory(link);
    // Scroll to the top after the category is selected
    window.scrollTo(0, 0);
  };

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
              onClick={() => handleSelectCategory(committee.link)}
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
