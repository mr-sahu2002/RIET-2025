import React from "react";
import "../style/ContactUs.css";
import { Mail, Phone, MapPin } from "lucide-react";

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Details</h1>

        <div className="contact-card">
          <div className="contact-header">
            <h2>Organizing Chair, RIET-2025</h2>
            <h3>Dr. Dileep Kumar</h3>
          </div>

          <div className="contact-info">
            <p className="designation">
              Principal of
              <br />
              K. S. INSTITUTE OF TECHNOLOGY, Bengaluru, India.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Phone className="icon" />
                <div>
                  <strong>Contact Numbers:</strong>
                  <p>+91 0123456789 / +91 0123456789</p>
                </div>
              </div>

              <div className="contact-item">
                <Mail className="icon" />
                <div>
                  <strong>Email:</strong>
                  <div className="email-links">
                    <a href="mailto:riet2025@ksit.edu.in">
                      riet2025@ksit.edu.in
                    </a>
                    <span className="email-separator">/</span>
                    <a href="mailto:dilipkumar@ksit.edu.in">
                      dilipkumar@ksit.edu.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <MapPin className="icon" />
                <div>
                  <strong>Address:</strong>
                  <p>
                    K. S. Institute of Technology,
                    <br />
                    #14, Raghuvanahalli, Kanakapura Road,
                    <br />
                    Bengaluru - 560109, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4404420784913!2d77.54172007483966!3d12.879375987427611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ff4059b97c1%3A0x9ae119628bd2e43d!2sKSIT!5e0!3m2!1sen!2sin!4v1731916764158!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KSIT Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
