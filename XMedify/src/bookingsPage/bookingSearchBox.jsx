import React from "react";
import "./bookingSearchBox.css";
import button_search from "../assets/button_search.png";
import gps from "../assets/gps.png";

export default function BookingSearchBox() {
  return (
    <div className="BookingsearchContainer">
      <div className="BookingsearchBox" style={{ display: "flex" }}>
        <div className="BookinginputWithIcon">
          <img src={gps} alt="state" className="BookinginputIcon" />
          <input type="text" placeholder="State" />
        </div>
        <div className="BookinginputWithIcon">
          <img src={gps} alt="city" className="BookinginputIcon" />
          <input type="text" placeholder="City" />
        </div>
        <img src={button_search} alt="btn" />
      </div>
    </div>
  );
}
