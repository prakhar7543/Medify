import React from "react";
import medifyIcon from "../assets/medifyIcon.png";
import "./tabsNavbar.css";
import TabsNavbar from "../components/tabs";
import BookingSearchBox from "./bookingSearchBox";

export default function BookingsNavbar() {
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
          <div className="tabs">
            <TabsNavbar />
            <button
              style={{
                backgroundColor: "#2AA8FF",
                borderRadius: "8px",
                color: "white",
              }}
            >
              My Bookings
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "110px",
          backgroundColor: "#0C8CE5",
          borderBottomRightRadius: "16px",
          borderBottomLeftRadius: "16px",
        }}
      ></div>
      <BookingSearchBox />
    </div>
  );
}
