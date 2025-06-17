import React from "react";
import medifyIcon from "../../../assets/medifyIcon.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <img
          src={medifyIcon}
          alt="pic"
          style={{
            width: "92px",
            height: "27px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div>
          <ul>
            <li>Find Doctors</li>
            <li>Hospitals</li>
            <li>Medicines</li>
            <li>Surgeries</li>
            <li>Software for Provider</li>
            <li>Facilities</li>
            <li>
              <button style={{backgroundColor: '#2AA8FF', borderRadius: '8px', color: 'white'}}>My Bookings</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
