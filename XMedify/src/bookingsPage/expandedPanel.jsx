import React, {useState} from "react";
import "./expandedPanel.css";
// import as React from 'react';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

export default function ExpandedHospitalCard({onDateTimeSelect}) {
  const [value, setValue] = useState("Today");
  // let [selectedDate, setSelectedDate] = useState('');
  let [selectedTime, setSelectedTime] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedTime('')
  };

  const handleTimeClick = (time) => {
  setSelectedTime(time);

  const today = new Date();
  let actualDate = "";

  if (value === "Today") {
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();
    actualDate = `${day} ${month} ${year}`;
  } else if (value === "Tomorrow") {
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const day = tomorrow.getDate();
    const month = tomorrow.toLocaleString("default", { month: "long" });
    const year = tomorrow.getFullYear();
    actualDate = `${day} ${month} ${year}`;
  } else {
    const customDate = new Date(`${value}, ${today.getFullYear()}`);
    const day = customDate.getDate();
    const month = customDate.toLocaleString("default", { month: "long" });
    const year = customDate.getFullYear();
    actualDate = `${day} ${month} ${year}`;
  }

  // Send formatted date and time back to parent
//  const formattedDisplayDate = actualDate; 
const isoDate = new Date(actualDate).toISOString().split('T')[0]; // "2025-06-25"

onDateTimeSelect(isoDate, time);  // Send only ISO to parent

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
              value="Today"
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
              value="Tomorrow"
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
              value="Friday, 5 May"
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


       
        <TabPanel value="Today" sx={{width: '96%', padding: '20px'}}>
          <div className="todaySlotsContainer">
            <div className="morningSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Morning</p>
              <button onClick={() => handleTimeClick('11:30 AM')}>11:30 AM</button>
            </div>
            <div className="afternoonSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Afternoon</p>
              <button onClick={() => handleTimeClick('12:00 PM')}>12:00 PM</button>
              <button onClick={() => handleTimeClick('12:30 PM')}>12:30 PM</button>
              <button onClick={() => handleTimeClick('01:30 PM')}>01:30 PM</button>
              <button onClick={() => handleTimeClick('02:00 PM')}>02:00 PM</button>
              <button onClick={() => handleTimeClick('02:30 PM')}>02:30 PM</button>
            </div>
            <div className="eveningSlot" style={{ display: "flex",backgroundColor: '#F0F0F5' }}>
              <p>Evening</p>
              <button onClick={() => handleTimeClick('06:00 PM')}>06:00 PM</button>
              <button onClick={() => handleTimeClick('06:30 PM')}>06:30 PM</button>
              <button onClick={() => handleTimeClick('07:00 PM')}>07:00 PM</button>
              <button onClick={() => handleTimeClick('07:30 PM')}>07:30 PM</button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="Tommorrow" sx={{width: '96%', padding: '20px'}}>
          <div className="tommorrowSlotsContainer">
            <div className="morningSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Morning</p>
              <button onClick={() => handleTimeClick('11:30 AM')}>11:30 AM</button>
            </div>
            <div className="afternoonSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Afternoon</p>
              <button onClick={() => handleTimeClick('12:00 PM')}>12:00 PM</button>
              <button onClick={() => handleTimeClick('12:30 PM')}>12:30 PM</button>
              <button onClick={() => handleTimeClick('01:30 PM')}>01:30 PM</button>
              <button onClick={() => handleTimeClick('02:00 PM')}>02:00 PM</button>
              <button onClick={() => handleTimeClick('02:30 PM')}>02:30 PM</button>
            </div>
            <div className="eveningSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Evening</p>
              <button onClick={() => handleTimeClick('06:00 PM')}>06:00 PM</button>
              <button onClick={() => handleTimeClick('06:30 PM')}>06:30 PM</button>
              <button onClick={() => handleTimeClick('07:00 PM')}>07:00 PM</button>
              <button onClick={() => handleTimeClick('07:30 PM')}>07:30 PM</button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="Friday" sx={{width: '96%', padding: '20px'}}>
          <div className="fridaySlotsContainer">
            <div className="morningSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Morning</p>
              <button onClick={() => handleTimeClick('11:30 AM')}>11:30 AM</button>
            </div>
            <div className="afternoonSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Afternoon</p>
              <button onClick={() => handleTimeClick('12:00 PM')}>12:00 PM</button>
              <button onClick={() => handleTimeClick('12:30 PM')}>12:30 PM</button>
              <button onClick={() => handleTimeClick('01:30 PM')}>01:30 PM</button>
              <button onClick={() => handleTimeClick('02:00 PM')}>02:00 PM</button>
              <button onClick={() => handleTimeClick('02:30 PM')}>02:30 PM</button>
            </div>
            <div className="eveningSlot" style={{ display: "flex", backgroundColor: '#F0F0F5' }}>
              <p>Evening</p>
              <button onClick={() => handleTimeClick('06:00 PM')}>06:00 PM</button>
              <button onClick={() => handleTimeClick('06:30 PM')}>06:30 PM</button>
              <button onClick={() => handleTimeClick('07:00 PM')}>07:00 PM</button>
              <button onClick={() => handleTimeClick('07:30 PM')}>07:30 PM</button>
            </div>
          </div>
        </TabPanel>
       
      </TabContext>
    </Box>
  );
}
