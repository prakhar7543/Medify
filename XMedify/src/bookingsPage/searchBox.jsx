import React from "react";
import "./searchBox.css";
import button_search from "../assets/button_search.png";
import gps from "../assets/gps.png";

export default function SearchBox() {
  return (
    <div className="searchContainer">
      <div className="searchBox" style={{ display: "flex" }}>
        <div className="inputWithIcon">
          <img src={gps} alt="state" className="inputIcon" />
          <input type="text" placeholder="State" />
        </div>
        <div className="inputWithIcon">
          <img src={gps} alt="city" className="inputIcon" />
          <input type="text" placeholder="City" />
        </div>
        <img src={button_search} alt="btn" />
      </div>
    </div>
  );
}
