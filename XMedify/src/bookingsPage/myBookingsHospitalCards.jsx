import React from "react";
import "./myBookingsHospitalCards.css";
import hospitalCard from "../assets/hospitalCard.png";
import like from "../assets/like.png";
import Grid from "@mui/material/Grid";


export default function MyBookingsHospitalsCard({booking}) {
  

  function formatDate(isoDate) {
  if (!isoDate) return '';
  const dateObj = new Date(isoDate);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return dateObj.toLocaleDateString('en-US', options);
}


  return (
    <div className="myBookingshospitalsCardContainer">
      <div className="myBookingshospitalCard">
        <div className="myBookingscardDetails">
          {/* <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            height: '100%',

            '& .MuiGrid-root': {
              flexDirection: 'row'
            }
          }}
        > */}
          {booking && (
                <Grid
                item
                xs={12}
                key={booking["Provider ID"] || booking["hospitalName"]}
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
                
          <div className="myBookingshospitalDetails">
            <div>
              <img src={hospitalCard} alt="card" />
            </div>

            <div className="myBookingsdetails">
             
                <h3  style={{
                 
                  color: "#14BEF0",
                  marginBottom: "unset",
                }}>{booking['Hospital Name']}</h3>
            
              <div className="myBookingsaddress">
                <p>{booking['Address']}</p>
                <p style={{ fontWeight: "400", fontSize: "14px" }}>
                  {booking['Hospital Type']}
                </p>
                <p style={{ fontWeight: "400", fontSize: "14px" }}>more</p>
              </div>
              <img src={like} alt="like" style={{ paddingTop: "56px" }} />
            </div>
          </div>
          <div
            className="appointmentDate"
            style={{ height: "220px", width: "210px" }}
          >
            <p
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                paddingTop: "8px",
              }}
            >
              <span
                style={{
                  border: "1px solid #2AA7FF",
                  color: "#2AA7FF",
                  backgroundColor: "white",
                  padding: '5px',
                  borderRadius: '5px',
                }}
              >
                {booking['bookingTime']}
              </span>
              <span
                style={{
                  border: "1px solid #00A500",
                  color: "#00A500",
                  backgroundColor: "white",
                  padding: '5px',
                  borderRadius: '5px',
                }}
              >
                {formatDate(booking['bookingDate'])}
              </span>
            </p>
          </div>
              </Grid>
          )}
        {/* </Grid> */}
          
        </div>
      </div>
    </div>
  );
}


