import React, { useState } from "react";
import "./hospitalsCard.css";
import hospitalCard from "../assets/hospitalCard.png";
import like from "../assets/like.png";
import ExpandedHospitalCard from "./expandedPanel";
import Grid from "@mui/material/Grid";
import { useSnackbar } from 'notistack';

export default function HospitalsCard({ data }) {
  let [expanded, setExpanded] = useState({});
  let [selectedSlots, setSelectedSlots] = useState({});
  // let [selectedDate, setSelectedDate] = useState('');
  // let [selectedTime, setSelectedTime] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (id, hospitalData) => {
  const selected = selectedSlots[id];

  if (selected?.date && selected?.time) {
   const bookingDetails = {
  "Hospital Name": hospitalData["Hospital Name"],
  "Address": hospitalData["Address"],
  "Hospital Type": hospitalData["Hospital Type"],
  "Hospital overall rating": hospitalData["Hospital overall rating"],
  bookingDate: selected.date,
  bookingTime: selected.time,
};

     let previousBookings = JSON.parse(localStorage.getItem("bookings")) || [];

     if (!Array.isArray(previousBookings)) {
      previousBookings = previousBookings ? [previousBookings] : [];
    }

    previousBookings.push(bookingDetails);

    
    localStorage.setItem("bookings", JSON.stringify(previousBookings));
    // window.location.href = "/myBookings"; // navigate to bookings page
    enqueueSnackbar('Appointment Booked Successfully', {variant: 'success'});
  } else {
    // Just toggle expand
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }
};

const handleSlotSelect = (id, date, time) => {
  setSelectedSlots((prev) => ({
    ...prev,
    [id]: { date, time },  // Not a boolean
  }));
};


  return (
    <div className="hospitalsCardContainer">
      <div className="hospitalCard">
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data &&
            data.map((item) => (
              <Grid
                item
                xs={12}
                key={item["Provider ID"]}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  padding: 2,
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div className="hospitalDetails">
                    <div>
                      <img
                        src={hospitalCard}
                        alt="card"
                        style={{ paddingRight: "8px" }}
                      />
                    </div>

                    <div className="details">
                      <h3
                        style={{
                          color: "#14BEF0",
                          marginBottom: "unset",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {item["Hospital Name"]}
                      </h3>

                      <div className="address">
                        <p>{item.Address}</p>
                        <p style={{ fontWeight: "400", fontSize: "14px" }}>
                          {item["Hospital Type"]}
                        </p>
                        <p style={{ fontWeight: "400", fontSize: "14px" }}>
                          more
                        </p>
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
                          Consultation fee at clinic
                        </p>
                      </div>
                      <img
                        src={like}
                        alt="like"
                        style={{ marginTop: "20px" }}
                      />
                    </div>
                  </div>

                  <div className="availability">
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#02A401",
                      }}
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
                      onClick={() => handleClick(item['Provider ID'], item)}
                    >
                      Book FREE Center Visit
                    </button>
                  </div>
                </div>
                <div className="expandedDiv">
                  {expanded[item["Provider ID"]] && (
                    <ExpandedHospitalCard
                      onDateTimeSelect={(date, time) =>
                        handleSlotSelect(item["Provider ID"], date, time)
                      }
                    />
                  )}
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}
