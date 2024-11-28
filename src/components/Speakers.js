import React from "react";
import "../style/Speakers.css";
import userHoler from "../resources/user-holder.png";

function Speakers() {
  const speakers = [
    {
      name: "Sri. S S Iyengar",
      title:
        "Distinguished University Professor, Florida International University (FIU), Miami",
      image: userHoler,
    },
    {
      name: "Chaitra Vedullapalli",
      title: "Cofounder & CMO, Meylah",
      image: userHoler,
    },
    {
      name: "Prof. Dr.-Ing. Vinod Rajamani",
      title: "Professor, University of Applied Sciences and Arts Dortmund",
      image: userHoler,
    },
  ];

  return (
    <section className="speakers-section">
      <h2 className="speakers-title">Keynote Speakers</h2>
      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <div className="speaker-image-wrapper">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="speaker-image"
              />
            </div>
            <div className="speaker-info">
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">{speaker.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Speakers;
