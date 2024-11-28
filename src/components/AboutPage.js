import React from "react";
import "../style/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About RIET-2025</h1>
      <section>
        <h2>Our Mission</h2>
        <p>
          The International Conference On Recent Innovations In Engineering
          Science And Technology (RIET) aims to bring together leading
          academicians, scientists, researchers, and scholars to exchange and
          share their experiences and research results about all aspects of
          Computational Systems and Information Technology.
        </p>
      </section>
      <section>
        <h2>Conference Objectives</h2>
        <ul>
          <li>
            To provide a premier interdisciplinary platform for researchers,
            practitioners, and educators
          </li>
          <li>
            To present and discuss the most recent innovations, trends, and
            concerns in the fields of Computational Systems and Information
            Technology
          </li>
          <li>
            To promote collaboration between academia and industry for
            sustainable solutions
          </li>
          <li>
            To foster networking opportunities with eminent personalities and
            experts in the field
          </li>
        </ul>
      </section>
      <section>
        <h2>About K S Institute Of Technology</h2>
        <p>
          The Kammavari Sangham, a multi-activity non-profit oriented voluntary
          service organization, was established in the year 1952 with the sole
          objective of providing charitable service to community and society.
          Enthused with this success of its foray into technical education, the
          Sangham moved forward by starting the K.S Institute of Technology
          (KSIT) Its Engineering College in the year 1999. In the years that
          followed, KSIT quickly earned an outstanding reputation for academic
          excellence.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
