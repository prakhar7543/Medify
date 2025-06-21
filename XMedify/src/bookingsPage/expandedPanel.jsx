import React from "react";
import "./expandedPanel.css";
// import as React from 'react';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

export default function ExpandedHospitalCard() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "745px", height: "278px", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{ display: "flex", justifyContent: "space-around", alignItems: 'center', '& .MuiTabs-list': {
            display: "flex",
            justifyContent: "space-around",
            alignItems: 'center',
          } }}
          >
            <img
              src={leftArrow}
              alt="left"
              style={{
                width: "48px",
                height: "48px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Tab
              label={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span style={{fontSize: '16px', fontWeight: '700', color: '#414146'}}>Today</span>
                  <span style={{fontSize: '12px', fontWeight: '400', color: '#01A400'}}>11 Slots Available</span>
                </div>
              }
              value="1"
            />
            <Tab
              label={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span style={{fontSize: '16px', fontWeight: '700', color: '#414146'}}>Tomorrow</span>
                  <span style={{fontSize: '12px', fontWeight: '400', color: '#01A400'}}>17 Slots Available</span>
                </div>
              }
              value="2"
            />
            <Tab
              label={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span style={{fontSize: '16px', fontWeight: '700', color: '#414146'}}>Friday, 5 May</span>
                  <span style={{fontSize: '12px', fontWeight: '400', color: '#01A400'}}>18 Slots Available</span>
                </div>
              }
              value="3"
            />
            <img
              src={rightArrow}
              alt="right"
              style={{
                width: "48px",
                height: "48px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </TabList>
        </Box>


       
        <TabPanel value="1" sx={{width: '96%', padding: '20px'}}>
          <div className="todaySlotsContainer">
            <div className="morningSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Morning</p>
              <button>11:30 AM</button>
            </div>
            <div className="afternoonSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Afternoon</p>
              <button>12:00 PM</button>
              <button>12:30 PM</button>
              <button>01:30 PM</button>
              <button>02:00 PM</button>
              <button>02:30 PM</button>
            </div>
            <div className="eveningSlot" style={{ display: "flex",backgroundColor: '#F0F0F5' }}>
              <p>Evening</p>
              <button>06:00 PM</button>
              <button>06:30 PM</button>
              <button>07:00 PM</button>
              <button>07:30 PM</button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2" sx={{width: '96%', padding: '20px'}}>
          <div className="tommorrowSlotsContainer">
            <div className="morningSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Morning</p>
              <button>11:30 AM</button>
            </div>
            <div className="afternoonSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Afternoon</p>
              <button>12:00 PM</button>
              <button>12:30 PM</button>
              <button>01:30 PM</button>
              <button>02:00 PM</button>
              <button>02:30 PM</button>
            </div>
            <div className="eveningSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Evening</p>
              <button>06:00 PM</button>
              <button>06:30 PM</button>
              <button>07:00 PM</button>
              <button>07:30 PM</button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="3" sx={{width: '96%', padding: '20px'}}>
          <div className="fridaySlotsContainer">
            <div className="morningSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Morning</p>
              <button>11:30 AM</button>
            </div>
            <div className="afternoonSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Afternoon</p>
              <button>12:00 PM</button>
              <button>12:30 PM</button>
              <button>01:30 PM</button>
              <button>02:00 PM</button>
              <button>02:30 PM</button>
            </div>
            <div className="eveningSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Evening</p>
              <button>06:00 PM</button>
              <button>06:30 PM</button>
              <button>07:00 PM</button>
              <button>07:30 PM</button>
            </div>
          </div>
        </TabPanel>
       
      </TabContext>
    </Box>
  );
}
