import React from "react";
import "../style/Committee_members.css";

function CommitteeMemberDetails({ category, onBack }) {
  // Sample committee member data - in a real app, this would come from an API or database
  const committeeMembers = {
    "chief-patron": [
      {
        name: "Dr. B M Sagar",
        title: "Professor & HoD, Department of ISE, RVCE",
        image: "/placeholder.svg?height=400&width=400",
      },
    ],
    patrons: [
      {
        name: "Dr. M Krishna",
        title: "Professor & HoD, Department of Mechanical Engineering, RVCE",
        image: "/placeholder.svg?height=400&width=400",
      },
    ],
    // Add more categories as needed
  };

  const members = committeeMembers[category] || [];

  return (
    <div className="committee-details-container">
      <button onClick={onBack} className="back-button">
        &larr; Back to Committees
      </button>
      <h2 className="committee-category-title">
        {category
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </h2>
      <div className="committee-members-list">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-image-container">
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommitteeMemberDetails;
