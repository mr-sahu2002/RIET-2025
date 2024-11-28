import React from "react";
import "../style/Registration.css";

function Registration() {
  const bankDetails = [
    { label: "Name", value: "IETE" },
    { label: "Bank Account Number", value: "149010100074011" },
    { label: "Bank Name", value: "Union Bank of India" },
    { label: "Branch Name", value: "Raghavanahalli" },
    { label: "IFSC Code", value: "UBIN0814903" },
    { label: "SWIFT Code", value: "-" },
  ];

  return (
    <div className="registration-container">
      <div className="registration-content">
        <h1>Registration</h1>

        <div className="registration-info">
          <p>
            Authors and participants are requested to download the registration
            form from the conference website and submit the filled form to the{" "}
            <strong>Email ID: </strong>
            <a href="mailto:riet2025@ksit.edu.in" className="email-link">
              riet2025@ksit.edu.in
            </a>
          </p>
        </div>

        <div className="fee-section">
          <h2>Registration Fee</h2>

          <div className="fee-table-container">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Categories</th>
                  <th>Early Bird</th>
                  <th colSpan="2">Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Indian Authors member</td>
                  <td>
                    <div>IEEE Member</div>
                    <div className="fee">Rs.5,000/-</div>
                  </td>
                  <td>
                    <div>IEEE Member</div>
                    <div className="fee">Rs. 6000/-</div>
                  </td>
                  <td>
                    <div>Non IEEE Member</div>
                    <div className="fee">Rs. 7000/-</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Graduate student/Research scholar/Academician/Industry
                  </td>
                  <td>Rs.5,000/-</td>
                  <td>Rs. 6000/-</td>
                  <td>Rs. 7000/-</td>
                </tr>
                <tr>
                  <td>Foreign Author's</td>
                  <td>$80</td>
                  <td>$100</td>
                  <td>$150</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="payment-section">
          <div className="bank-details">
            <h2>Bank Details</h2>
            <div className="details-grid">
              {bankDetails.map((detail, index) => (
                <div key={index} className="detail-item">
                  <span className="detail-label">{detail.label}:</span>
                  <span className="detail-value">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="qr-scanner">
            <h2>Scanner</h2>
            <div className="qr-placeholder">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="QR Code Scanner"
                className="qr-code"
              />
            </div>
          </div>
        </div>

        <div className="registration-actions">
          <button className="download-form-btn">
            Download Registration Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
