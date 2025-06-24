import React from "react";
import "./myBookingsHospitalCards.css";
import hospitalCard from "../assets/hospitalCard.png";
import like from "../assets/like.png";
// import ExpandedHospitalCard from "./expandedPanel";

export default function MyBookingsHospitalsCard({booking}) {
  //   let [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="myBookingshospitalsCardContainer">
      <div className="myBookingshospitalCard">
        <div className="myBookingscardDetails">
          <div className="myBookingshospitalDetails">
            <div>
              <img src={hospitalCard} alt="card" />
            </div>

            <div className="myBookingsdetails">
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#14BEF0",
                  marginBottom: "unset",
                }}
              >
                {booking['hospitalName']}
              </p>
              <div className="myBookingsaddress">
                <p>{booking['address']}</p>
                <p style={{ fontWeight: "400", fontSize: "14px" }}>
                  {booking['hospitalType']}
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
                {booking['time']}
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
                {booking['date']}
              </span>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
