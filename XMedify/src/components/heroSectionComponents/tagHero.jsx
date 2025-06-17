import React from "react";
import "./tagHero.css";

export default function TagHero() {
  return (
    <div className="tagContainer">
      <div className="tag">
        <p
          style={{
            fontSize: "27px",
            fontWeight: "500",
            color: "#102851",
            margin: "unset",
            textAlign: "start",
          }}
        >
          Skip the travel! Find Online
        </p>
        <div style={{ display: "flex", gap: "5px" }}>
          <span style={{ color: "black" }}>
            <h1 style={{ margin: "unset", textAlign: "start" }}>Medical</h1>
          </span>
          <span style={{ color: "#2AA7FF" }}>
            <h1 style={{ margin: "unset", textAlign: "start" }}>Centers</h1>
          </span>
        </div>
        <p style={{ fontWeight: "400", fontSize: "20px", color: "#5C6169", textAlign: 'justify' }}>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
      </div>
    </div>
  );
}
