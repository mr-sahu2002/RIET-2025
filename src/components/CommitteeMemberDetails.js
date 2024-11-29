import React from "react";
import "../style/Committee_members.css";
import userHoler from "../resources/user-holder.png";

function CommitteeMemberDetails({ category, onBack }) {
  // Sample committee member data - in a real app, this would come from an API or database
  const committeeMembers = {
    "chief-patrons": [
      {
        name: "Sri. R Rajgopal Naidu",
        title: "",
        image: userHoler,
      },
      {
        name: "Sri. R Leela Shankar Rao",
        title: "",
        image: userHoler,
      },
      {
        name: "Sri. T Neerajakshulu Naidu",
        title: "",
        image: userHoler,
      },
    ],
    patrons: [
      {
        name: "Dr. K V A Balaji",
        title: "",
        image: userHoler,
      },
    ],
    "conference-chair": [
      {
        name: "Dr. Dilip Kumar K",
        title: "Principal / Director, KSIT",
        image: userHoler,
      },
    ],
    "chief-convener": [
      {
        name: "Dr. D R Swamy",
        title: "Executive Director, KSRIF",
        image: userHoler,
      },
    ],
    "co-convener": [
      {
        name: "Dr. Nagaprasad K S",
        title: "Associate Professor - MED",
        image: userHoler,
      },
    ],
    "organizing-secretary": [
      {
        name: "Prof. Anilkumar A",
        title: "Assistant Professor - MED",
        image: userHoler,
      },
    ],
    "program-chairs": [
      {
        name: "Dr. P N Sudha",
        title: "Professor & Head, ECE",
        image: userHoler,
      },
      {
        name: "Dr. P Jalaja",
        title: "Professor & Head, Mathematics (Co-Chair)",
        image: userHoler,
      },
      {
        name: "Dr. Rekha N",
        title: "ECE",
        image: userHoler,
      },
      {
        name: "Dr. Sunith Chalageri",
        title: "CSE",
        image: userHoler,
      },
      {
        name: "Dr. Saleem Khan",
        title: "MED",
        image: userHoler,
      },
      {
        name: "Dr. Seeja Krishnan",
        title: "Physics",
        image: userHoler,
      },
      {
        name: "Dr. Sahana Salagare",
        title: "AIML",
        image: userHoler,
      },
    ],
    "technical-program-chairs": [
      {
        name: "Dr. Sneha Girish",
        title: "Professor, AIML",
        image: userHoler,
      },
      {
        name: "Dr. Electa Alice Jayarani.A",
        title: "ECE",
        image: userHoler,
      },
      {
        name: "Prof. Kushal Kumar B N",
        title: "CSE",
        image: userHoler,
      },
    ],
    "finance-chairs": [
      {
        name: "Dr. Chanda V Reddy",
        title: "Professor & Head, CCE",
        image: userHoler,
      },
      {
        name: "Dr. Deepa S R",
        title: "Professor & Head, CSD (Co-Chair)",
        image: userHoler,
      },
      {
        name: "Prof. Bhargavi",
        title: "ECE",
        image: userHoler,
      },
      {
        name: "Prof. Raghavendrachar",
        title: "CSE",
        image: userHoler,
      },
      {
        name: "Y V Kesavan",
        title: "Senior Manager",
        image: userHoler,
      },
      {
        name: "E. Manjula",
        title: "Office Superintendent",
        image: userHoler,
      },
    ],
    "publication-chairs": [
      {
        name: "Dr. Rekha B Venkatapur",
        title: "Professor & Head, CSE",
        image: userHoler,
      },
      {
        name: "Dr. V Bharathi",
        title: "Head, Library & Information Centre (Co-Chair)",
        image: userHoler,
      },
      {
        name: "Dr. Vijayalakshmi Mekali",
        title: "CSE",
        image: userHoler,
      },
    ],
    "sponsorship-chairs": [
      {
        name: "Dr. Sangappa",
        title: "Professor, ECE, Director - Adms & PR",
        image: userHoler,
      },
      {
        name: "Prof. Nagabhushana",
        title: "MED",
        image: userHoler,
      },
      {
        name: "Prof. B R Santhosh Kumar",
        title: "ECE",
        image: userHoler,
      },
    ],
    "publicity-chairs": [
      {
        name: "Dr. Umashankar M",
        title: "Professor - MED, COE",
        image: userHoler,
      },
      {
        name: "Dr. Suresh M B",
        title: "Professor & Head, AIML (Co-Chair)",
        image: userHoler,
      },
      {
        name: "Dr. Devika B",
        title: "ECE",
        image: userHoler,
      },
    ],
    "hospitality-chairs": [
      {
        name: "Dr. Girish T R",
        title: "Associate Professor & Head - MED",
        image: userHoler,
      },
      {
        name: "Prof. K. Prasad",
        title: "MED",
        image: userHoler,
      },
      {
        name: "Prof. T Somasekhar",
        title: "CSE",
        image: userHoler,
      },
    ],
    "registration-committee": [
      {
        name: "Dr. Shashikala B S",
        title: "Associate Professor & Head, Physics",
        image: userHoler,
      },
      {
        name: "Dr. Ganga Holi",
        title: "Professor & Head, CSE, IoT",
        image: userHoler,
      },
      {
        name: "Prof. Ramya K R",
        title: "ECE",
        image: userHoler,
      },
    ],
    "advisory-committee": [
      {
        name: "Dr. S. Hossein Mousavinezhad",
        title: "Professor, Idaho State University, USA",
        image: userHoler,
      },
      {
        name: "Dr. Sachin Kumar",
        title: "Professor, Kyungpook National University Daegu, South Korea",
        image: userHoler,
      },
      {
        name: "Dr. Mohamed M Awad",
        title: "Professor, Mansoura University, Manoura, Egypt",
        image: userHoler,
      },
      {
        name: "Dr. Y Narahari",
        title: "Professor, Indian Institute of Science, Bangalore, India",
        image: userHoler,
      },
      {
        name: "Prof. Srinivasan Natarajan",
        title: "Professor, Indian Institute of Science, Bangalore, India",
        image: userHoler,
      },
      {
        name: "Prof. Ganesan Prabu Sankar",
        title: "Professor, Indian Institute of Technology Hyderabad, India",
        image: userHoler,
      },
      {
        name: "Dr. Mani Sankar",
        title:
          "Professor and Head, Faculty of Mathematics, University of Technology and Applied Sciences (CAS-Ibri), Sultanate of Oman",
        image: userHoler,
      },
      {
        name: "Dr. L. Bhaskar",
        title:
          "Assistant Professor, Indian Institute of Technology Raipur, India",
        image: userHoler,
      },
      {
        name: "Dr. Sivaramakrishnan Sivasubramanian",
        title: "Professor, Indian Institute of Technology Bombay, India",
        image: userHoler,
      },
      {
        name: "Dr. B. S. Panda",
        title: "Professor, Indian Institute of Technology Delhi, India",
        image: userHoler,
      },
      {
        name: "Dr. T N Nagabhushana",
        title:
          "Vice Chancellor, Kishkinda University, Bellary, Karnataka, India",
        image: userHoler,
      },
      {
        name: "Dr. Debahuti Mishra",
        title:
          "Professor, Department of Computer Science, Institute of Technical Education and Research Siksha 'O' Anusandhan University, Odisha, India",
        image: userHoler,
      },
      {
        name: "Dr. Jayadevappa",
        title:
          "Principal, Dr. H N National College Of Engineering, Bangalore, Karnataka, India",
        image: userHoler,
      },
      {
        name: "Dr. Ramesh Kestur",
        title:
          "Adjunct Faculty and Senior Research Fellow, IIIT-B, Bangalore, Karnataka, India",
        image: userHoler,
      },
      {
        name: "Dr. Ramani",
        title: "Senior Lecturer, UTP Malaysia",
        image: userHoler,
      },
      {
        name: "Dr. Vijanth Sagayan A/L Asirvadam",
        title: "Associate Professor, UTP Malaysia",
        image: userHoler,
      },
      {
        name: "Dr. Sivasankar",
        title:
          "Associate Professor, National Institute of Technology, Tiruchirappalli, India",
        image: userHoler,
      },
      {
        name: "Dr. Sivaram Murugan",
        title:
          "Professor, Department of Computer Engineering, Sivas University of Science and Technology, Turkey",
        image: userHoler,
      },
      {
        name: "Dr. Gurumurthy Hegde",
        title:
          "Director, Centre for Advanced Research and Development, Christ University, India",
        image: userHoler,
      },
      {
        name: "Dr. R Prabhu",
        title: "Assistant Professor, IIT Dharwad, Karnataka, India",
        image: userHoler,
      },
      {
        name: "Dr. Uma B R",
        title: "Scientist, ISRO, Bengaluru, Karnataka, India",
        image: userHoler,
      },
      {
        name: "Dr. Mahesh T R",
        title:
          "Professor & Head, Department of CSE, JAIN (Deemed-to-be University), Bangalore, Karnataka, India",
        image: userHoler,
      },
    ],
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
