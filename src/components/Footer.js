import React from "react";
import "../style/Footer.css";
import ksitlogo from "../resources/ksit.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="logo-section">
          <img
            src={ksitlogo}
            alt="K S Institute Of Technology Logo"
            className="footer-logo"
          />
          <p className="tagline">Go, change the world</p>
        </div>

        <div className="college-info">
          <h3 className="college-name">K S Institute Of Technology</h3>
          <address className="college-address">
            No.14, Raghuvanahalli, Kanakapura Road, Bengaluru - 560109
          </address>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2024-2025 IEEE RIET</p>
          <p className="credits">
            Developed by <span className="team-name">IEEE KSIT SE Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
