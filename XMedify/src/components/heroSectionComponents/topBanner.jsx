import React from "react";

export default function TopBanner() {
  return (
    <div className="bannnerContainer" style={{ width: "100vw", height: "40px" }}>
      <div
        className="banner"
        style={{
          backgroundColor: "#2AA7FF",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "16px",
            fontWeight: "400",
            margin: "0px",
          }}
        >
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </div>
    </div>
  );
}
