import React from "react";
import "./playStore.css";
import mobileBig from "../../../assets/mobileBig.png";
// import mobileSmall from "../../../assets/mobileSmall.png";
import mobileScreen from "../../../assets/mobileScreen.png";
import Vector from "../../../assets/Vector.png";
import googlePlay from "../../../assets/googlePlay.png";
import appleStore from "../../../assets/appleStore.png";
import countryCode from "../../../assets/countryCode.png";

export default function PlayStore() {
  return (
    <div className="playStoreContainer">
      <div className="mobileImage">
        <div style={{ display: "flex", position: "relative", height: "450px" }}>
          <div className="shifter">
            <div style={{ display: "flex", position: "relative" }}>
              <img
                src={mobileBig}
                alt="pic"
                style={{
                  width: "302px",
                  height: "503px",
                }}
              />
              <img
                src={mobileScreen}
                alt="pic"
                style={{
                  display: "flex",
                  position: "absolute",
                  width: "286px",
                  height: "466px",
                  left: "9px",
                  top: "36px",
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", position: "relative" }}>
          <div style={{ display: "flex", position: "relative" }}>
            <img
              src={mobileBig}
              alt="pic"
              style={{
                // display: "flex",
                // position: "relative",
                width: "302px",
                height: "503px",
              }}
            />
            <img
              src={mobileScreen}
              alt="pic"
              style={{
                display: "flex",
                position: "absolute",
                width: "284px",
                height: "466px",
                left: "10px",
                top: "36px",
              }}
            />
          </div>
        </div>
      </div>

      <img
        src={Vector}
        alt="pic"
        style={{
          width: "56px",
          height: "180px",
          objectFit: "contain",
          objectPosition: "center",
          paddingBottom: '88px'
        }}
      />
      <div className="playStorecontent">
        <div style={{ textAlign: "start" }}>
          <p style={{ fontSize: "48px", fontWeight: "600", color: "#1B3C74", marginBottom: 'unset' }}>
            DownLoad the
          </p>
          <p style={{ display: "flex", gap: "8px", marginTop: 'unset' }}>
            <span
              style={{ fontSize: "48px", fontWeight: "600", color: "#2AA7FF", marginTop: 'unset' }}
            >
              Medify
            </span>
            <span
              style={{ fontSize: "48px", fontWeight: "600", color: "#1B3C74", marginTop: 'unset' }}
            >
              App
            </span>
          </p>
          <p style={{fontSize: '16px', fontWeight: '700', color: '#414146'}}>Get the link to download the app</p>
        </div>
        <div className="inp">
          <div style={{ display: "flex", width: "390px", height: "50px", gap: '2px' }}>
            <img
              src={countryCode}
              alt="img"
              style={{
                width: "55px",
                height: "49px",
                backgroundColor: "#B4B4BE4D",
                border: "1px solid lightGray",
              }}
            />
            <input
              type="text"
              placeholder="Enter phone number"
              style={{ width: "322px", color: "#B4B4BE", paddingLeft: '10px' }}
            />
          </div>
          <button style={{ backgroundColor: "#2AA8FF", color: "white" }}>
            Send SMS
          </button>
        </div>
        <div className="downloadStoreImage">
          <img src={googlePlay} alt="google" />
          <img src={appleStore} alt="apple" />
        </div>
      </div>
    </div>
  );
}
