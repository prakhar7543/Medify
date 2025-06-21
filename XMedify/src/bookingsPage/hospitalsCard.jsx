import React, { useState } from "react";
import "./hospitalsCard.css";
import hospitalCard from "../assets/hospitalCard.png";
import like from "../assets/like.png";
import ExpandedHospitalCard from "./expandedPanel";

export default function HospitalsCard() {
  let [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="hospitalsCardContainer">
      <div className="hospitalCard">
        <div className="cardDetails">
          <div className="hospitalDetails">
            <div>
              <img src={hospitalCard} alt="card" />
            </div>

            <div className="details">
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#14BEF0",
                  marginBottom: "unset",
                }}
              >
                Fortis Hospital Richmond Road
              </p>
              <div className="address">
                <p>Banglore, Karnataka</p>
                <p style={{ fontWeight: "400", fontSize: "14px" }}>
                  Smilessence Center for Advanced Dentistry + 1
                </p>
                <p style={{ fontWeight: "400", fontSize: "14px" }}>more</p>
                <p
                  style={{
                    display: "flex",
                    gap: "8px",
                    fontWeight: "400",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ fontWeight: "400", color: "#02A401" }}>
                    Free
                  </span>
                  <strike>&#x20B9;500</strike>
                  Consultation fee at clinic<span></span>
                </p>
              </div>
              <img src={like} alt="like" style={{ paddingTop: "56px" }} />
            </div>
          </div>
          <div className="availability">
            <p
              style={{ fontWeight: "500", fontSize: "14px", color: "#02A401" }}
            >
              Available Today
            </p>
            <button
              style={{
                width: "212px",
                height: "40px",
                backgroundColor: "#2AA7FF",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "500",
                fontSize: "14px",
              }}
              onClick={() => setIsExpanded(true)}
            >
              Book FREE Center Visit
            </button>
          </div>
        </div>
        <div className="expandedDiv">
          {isExpanded && <ExpandedHospitalCard />}
        </div>
      </div>
    </div>
  );
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// import React, { useState } from "react";
// import "./hospitalsCard.css";
// import hospitalCard from "../assets/hospitalCard.png";
// import like from "../assets/like.png";
// import { Tabs, Tab, Box, Typography, Button } from "@mui/material";

// // This function will show the slot content when tab is active
// function TabPanel({ children, value, index }) {
//   return value === index && (
//     <Box sx={{ p: 2 }}>
//       {children}
//     </Box>
//   );
// }

// export default function HospitalsCard() {
//   const [isExpanded, setIsExpanded] = useState(false); // show/hide expanded slot view
//   const [tabIndex, setTabIndex] = useState(0); // control active tab

//   const handleTabChange = (event, newValue) => {
//     setTabIndex(newValue);
//   };

//   return (
//     <div className="hospitalsCardContainer">
//       {/* Hospital Card */}
//       <div className="hospitalCard">
//         <div className="hospitalDetails">
//           <div>
//             <img src={hospitalCard} alt="card" />
//           </div>

//           <div className="details">
//             <p className="hospitalName">Fortis Hospital Richmond Road</p>
//             <div className="address">
//               <p>Banglore, Karnataka</p>
//               <p className="desc">Smilessence Center for Advanced Dentistry + 1</p>
//               <p className="desc">more</p>
//               <p className="desc">
//                 <span className="free">Free</span> <strike>₹500</strike> Consultation fee at clinic
//               </p>
//             </div>
//             <img src={like} alt="like" style={{ paddingTop: "56px" }} />
//           </div>
//         </div>

//         <div className="availability">
//           <p className="available">Available Today</p>
//           <button className="bookButton" onClick={() => setIsExpanded(!isExpanded)}>
//             Book FREE Center Visit
//           </button>
//         </div>
//       </div>

//       {/* Expanded Tab Section */}
//       {isExpanded && (
//         <Box className="expandedContainer">
//           {/* Tabs */}
//           <Tabs value={tabIndex} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
//             <Tab label="Today" />
//             <Tab label="Tomorrow" />
//             <Tab label="Fri, 5 May" />
//           </Tabs>

//           {/* Tab Content */}
//           <TabPanel value={tabIndex} index={0}>
//             <div className="slotGroup">
//               <p>Morning</p>
//               <div className="slotButtons">
//                 <Button variant="outlined">11:30 AM</Button>
//               </div>
//               <p>Afternoon</p>
//               <div className="slotButtons">
//                 <Button variant="outlined">12:00 PM</Button>
//                 <Button variant="outlined">12:30 PM</Button>
//                 <Button variant="outlined">01:00 PM</Button>
//                 <Button variant="outlined">02:00 PM</Button>
//                 <Button variant="outlined">02:30 PM</Button>
//               </div>
//               <p>Evening</p>
//               <div className="slotButtons">
//                 <Button variant="outlined">06:00 PM</Button>
//                 <Button variant="outlined">06:30 PM</Button>
//                 <Button variant="outlined">07:00 PM</Button>
//                 <Button variant="outlined">07:30 PM</Button>
//               </div>
//             </div>
//           </TabPanel>

//           <TabPanel value={tabIndex} index={1}>
//             <div className="slotButtons">
//               <Button variant="outlined">10:00 AM</Button>
//               <Button variant="outlined">11:30 AM</Button>
//               <Button variant="outlined">01:00 PM</Button>
//               <Button variant="outlined">03:30 PM</Button>
//             </div>
//           </TabPanel>

//           <TabPanel value={tabIndex} index={2}>
//             <div className="slotButtons">
//               <Button variant="outlined">09:00 AM</Button>
//               <Button variant="outlined">12:30 PM</Button>
//               <Button variant="outlined">03:00 PM</Button>
//               <Button variant="outlined">05:00 PM</Button>
//             </div>
//           </TabPanel>
//         </Box>
//       )}
//     </div>
//   );
// }
