import React from "react";
import "./description.css";
import yellowLab from "../../../assets/yellowLab.png";
import redHospital from "../../../assets/redHospital.png";
import heart from "../../../assets/heart.png";
import greenDoctor from "../../../assets/greenDoctor.png";

export default function Description() {
  return (
    <div
      className="descriptionContainer"
      style={{ backgroundImage: "linear-gradient(47deg, #E7F0FF, #E8F1FF78)" }}
    >
      <div className="description">
        <div className="readingContent">
          <p style={{ fontSize: "17px", fontWeight: "600", color: "#2AA7FF", margin: 'unset' }}>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </p>
          <p style={{ fontSize: "48px", fontWeight: "600", color: "#1B3C74", margin: 'unset' }}>
            Our Families
          </p>
          <p style={{ fontSize: "17px", fontWeight: "400", color: "#77829D", width: '530px', height: '200px' }}>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
        <div className="cardContent">
          <div className="firstCardPanel">
            <div>
              <img src={heart} alt="pic" />
              <p
                style={{
                  fontSize: "48px",
                  fontWeight: "600",
                  color: " #1B3C74",
                  margin: "0px",
                  textAlign: "center",
                }}
              >
                5000+
              </p>
              <p style={{ color: "#77829D" }}>Happy Patients</p>
            </div>
            <div>
              <img src={yellowLab} alt="pic" />
              <p
                style={{
                  fontSize: "48px",
                  fontWeight: "600",
                  color: " #1B3C74",
                  margin: "0px",
                  textAlign: "center",
                }}
              >
                1000+
              </p>
              <p style={{ color: "#77829D" }}>Laboratories</p>
            </div>
          </div>
          <div className="secondCardPanel">
            <div>
              <img src={redHospital} alt="pic" />
              <p
                style={{
                  fontSize: "48px",
                  fontWeight: "600",
                  color: " #1B3C74",
                  margin: "0px",
                  textAlign: "center",
                }}
              >
                200+
              </p>
              <p style={{ color: "#77829D" }}>Hospitals</p>
            </div>
            <div>
              <img src={greenDoctor} alt="pic" />
              <p
                style={{
                  fontSize: "48px",
                  fontWeight: "600",
                  color: " #1B3C74",
                  margin: "0px",
                  textAlign: "center",
                }}
              >
                700+
              </p>
              <p style={{ color: "#77829D" }}>Expert Doctors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
