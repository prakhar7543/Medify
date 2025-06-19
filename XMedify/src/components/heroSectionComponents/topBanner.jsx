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





//  <Tab label="Find Doctors" {...a11yProps(0)} />
//           <Tab label="Hospitals" {...a11yProps(1)} />
//           <Tab label="Medicines" {...a11yProps(2)} />
//           <Tab label="Surgeries" {...a11yProps(2)} />
//           <Tab label="Software for Provider" {...a11yProps(2)} />
//           <Tab label="Facilities" {...a11yProps(2)} />
//         </Tabs> 