import React from "react";
import freeConsultation from "../../../assets/freeConsultation.png";
import "./readingContent.css";
import tick from "../../../assets/tick.png";

export default function ReadingContent() {
  return (
    <div
      className="container"
      style={{
        width: "100%",
        height: "600px",
        backgroundImage: "linear-gradient(47deg, #E7F0FF, #E8F1FF78)",
      }}
    >
      <div className="content">
        <img src={freeConsultation} alt="pic" />
        <div className="readingContent">
          <p style={{ marginBottom: "unset", color: "#2AA7FF" }}>
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </p>
          <div
            style={{
              marginTop: "unset",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              height: "48px",
            }}
          >
            <span>
              <h1 style={{ color: "#1B3C74" }}>Patient</h1>
            </span>
            <span>
              <h1 style={{ color: "#2AA7FF" }}>Caring</h1>
            </span>
          </div>

          <p style={{ marginTop: "30px" }}>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>

            <div className="points">
                <div>
          <p>
            <span>
              <img
                src={tick}
                alt="tick"
                style={{ width: "20px", height: "20px" }}
              />
            </span>
            <span>Stay Updated About Your Health</span>
          </p>
                </div>

                <div>
          <p>
            <span>
              <img
                src={tick}
                alt="tick"
                style={{ width: "20px", height: "20px" }}
              />
            </span>
            <span>Check Your Results Online</span>
          </p>

                </div>

                <div>
          <p>
            <span>
              <img
                src={tick}
                alt="tick"
                style={{ width: "20px", height: "20px" }}
              />
            </span>
            <span>Manage Your Appointments</span>
          </p>

                </div>

            </div>

        </div>
      </div>
    </div>
  );
}
