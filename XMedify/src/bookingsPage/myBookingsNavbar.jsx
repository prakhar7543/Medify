import React from "react";
import medifyIcon from "../assets/medifyIcon.png";
import "./myBookingsNavbar.css";
import TabsNavbar from "../components/tabs";
// import SearchBox from "./searchBox";
import MyBookingsSearchBox from '../bookingsPage/myBookingsSearchBox'
import { useNavigate } from "react-router-dom";

export default function MyBookingsNavbar() {

  let navigate = useNavigate();

  let handleClick = () => {
    navigate('/');
  }

  return (
    <div className="myBookingsNavbarContainer">
      <div className="myBookingsnavbar">
        <img
          src={medifyIcon}
          alt="pic"
          style={{
            width: "92px",
            height: "27px",
            objectFit: "cover",
            objectPosition: "center",
            cursor: 'pointer'
          }}
          onClick={handleClick}
        />
        <div>
          <div className="myBookingstabs">
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
          color: 'white',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center', paddingLeft: '90px'
        }}
      >
        <h1>My Bookings</h1>
      </div>
      <div className="myBookingsSearchBoxDiv">
      <MyBookingsSearchBox />
      </div>

    </div>
  );
}
