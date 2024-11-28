import React from "react";
import "../style/CallForPapers.css";

function CallForPapers() {
  return (
    <div className="call-for-papers">
      <div className="paper-card">
        <h1>Call For Papers</h1>

        <div className="notice">
          Conference does not accept/encourage Survey/Review articles.
        </div>

        <div className="submission-info">
          <p>
            Prospective authors are encouraged to submit quality and original
            research papers for presentation at the Conference. Authors are
            requested to submit their manuscripts in PDF format not exceeding 6
            pages in A4 size through online submission at Microsoft CMT - on or{" "}
            <em>
              before 10<sup>th</sup> August 2024
            </em>
            . The manuscript should follow the standard IEEE template. The
            format of the paper could be downloaded in the link below{" "}
            <a href="www.google.com" className="blue-link">
              Manuscript Template Link
            </a>
            .
          </p>

          <p>
            All submissions for the conference will be handled electronically
            and submitted papers will be peer-reviewed by domain experts. To
            submit the papers, use the Microsoft CMT Link mentioned below:
          </p>

          <a href="www.google.com" className="blue-link">
            Paper Submission Link
          </a>
        </div>

        <div className="action-buttons">
          <a href="www.google.com" className="submit-button">
            Submit Your Paper
          </a>
          <a href="www.google.com" className="guidelines-button">
            Download Guidelines for Authors
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallForPapers;
