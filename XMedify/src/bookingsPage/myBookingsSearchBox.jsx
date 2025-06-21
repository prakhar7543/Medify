import React from "react";
import "./myBookingsSearchBox.css";
import button_search from "../assets/button_search.png";
// import gps from "../assets/gps.png";

export default function MyBookingsSearchBox() {
  return (
    <div className="myBookingsSearchContainer">
      <div className="myBookingssearchBox" style={{ display: "flex" }}>
        <input type="text" placeholder="Search By Hospital" />
        {/* <div className="inputWithIcon">
          <img src={gps} alt="state" className="inputIcon" />
          <input type="text" placeholder="State" />
        </div>
        <div className="inputWithIcon">
          <img src={gps} alt="city" className="inputIcon" />
          <input type="text" placeholder="City" />
        </div> */}
        <img src={button_search} alt="btn" />
      </div>
    </div>
  );
}
