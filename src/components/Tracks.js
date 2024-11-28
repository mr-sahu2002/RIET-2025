import React from "react";
import "../style/Tracks.css";

function Tracks() {
  const tracks = [
    {
      id: 1,
      title: "CSE: Next-Generation Computing",
      topics: [
        "Artificial Intelligence & Automation",
        "Intelligent Sensing",
        "Advances in NLP and Pattern Detection",
        "AR and VR Applications",
        "Wireless Sensor Networks and it's Applications",
        "Cloud Computing and Services",
        "Data Science and Data Mining",
        "Cybersecurity and Cryptography",
        "Multimedia Information Processing",
        "Computer Vision and its Applications",
        "Sentiment Analysis",
        "Biometric Technologies and Forensic Science",
        "Exploring Machine Learning and Deep Learning techniques",
        "Review of Innovations in Computer Science and their Applications",
      ],
    },
    {
      id: 2,
      title: "ECE: Innovations in VLSI, Embedded Systems, and Communication",
      topics: [
        "Advances in Low-Power VLSI and Nano-Technology for ASIC/FPGA",
        "Mixed-Signal Design in VLSI",
        "Energy-Efficient Automotive Embedded Systems: Design, Testing, and Validation",
        "Advanced Wireless Communication Technologies for 5G, 6G, and Free Space Communications",
        "Microwaves for Advanced Communication Systems",
        "Advanced Antennas for Next-Generation Communication Systems",
        "Applications of Machine Learning in Network Security and Hardware Privacy Solutions in Wireless & Optical Communication",
        "Deep Learning Techniques Used in Audio & Biomedical Signal Processing",
        "Pattern Recognition in Computational Imaging",
        "Applications of IoT and Big Data in Industry Automation & Processing",
        "Innovations in Sensor and Sensing Systems in Ad Hoc Networks",
        "Applications of Digital Twin and Metaverse in Communication Systems",
      ],
    },
    {
      id: 3,
      title: "Mechanical Engineering Frontiers: Breakthroughs & Progress",
      topics: [
        "Advances in Robotics for Biomedical Applications",
        "Artificial Intelligence in Design Optimization",
        "Autonomous Driving Systems",
        "Renewable and Sustainable Energy Technologies",
        "Advanced Materials for Functional Applications (Composites, FGMs, Smart Materials, Nanomaterials)",
        "Additive Manufacturing and 3D Printing",
        "Sustainable and Eco-Friendly Manufacturing Practices",
        "Latest Developments in ICE, Battery, and Hybrid Vehicle Technologies",
        "Noise, Vibrations, and Harshness (NVH)",
        "Super Alloys for Aerospace Applications",
        "Analytical and Mathematical Modeling of Thermal Systems",
        "Finite Element Analysis and Simulations",
        "Unmanned Aerial Vehicles",
        "Industrial Waste Management",
        "Industrial Automation and Ergonomics",
      ],
    },
    {
      id: 4,
      title: "Pioneering Innovations in Applied Sciences",
      topics: [
        "Advanced Nanomaterials",
        "Electrochemistry",
        "Computational Chemistry",
        "Sustainable Materials and Green Chemistry",
        "Condensed Matter Physics and Materials Science",
        "Material Characterization Techniques",
        "Renewable Energy and Sustainable Materials",
        "Quantum Computing and its Applications",
        "Fluid Dynamics",
        "Graph Theory",
        "Optimization and Operations Research",
        "Differential Equations",
        "Numerical Analysis",
      ],
    },
  ];

  return (
    <div className="tracks-container">
      <div className="tracks-content">
        <h1>Conference Tracks</h1>

        <div className="tracks-intro">
          <p>
            Authors are invited to submit their original research work in the
            following areas (but not limited to)
          </p>
        </div>

        <div className="tracks-grid">
          {tracks.map((track) => (
            <div key={track.id} className="track-card">
              <h2>
                Track {track.id}: {track.title}
              </h2>
              <ul className="topics-list">
                {track.topics.map((topic, index) => (
                  <li key={index}>
                    <span className="bullet">•</span> {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tracks;
