import React from "react";
import "./aboutUs.css";
import arrow from "../../../assets/arrow.png";
import medifyIcon from "../../../assets/medifyIcon.png";
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter.png";
import youtube from "../../../assets/youtube.png";
import pinterest from "../../../assets/pinterest.png";

export default function AboutUs() {
  return (
    <div className="footerContainer"> 

    <div className="aboutContainer">
      <div className="socialMediaImages">
        <img
          src={medifyIcon}
          alt="medify"
          style={{ width: "126px", height: "36px" }}
        />
        <div>
          <img
            src={facebook}
            alt="media"
            style={{ width: "35px", height: "35px" }}
          />
          <img
            src={twitter}
            alt="media"
            style={{ width: "35px", height: "35px" }}
          />
          <img
            src={youtube}
            alt="media"
            style={{ width: "35px", height: "35px" }}
          />
          <img
            src={pinterest}
            alt="media"
            style={{ width: "35px", height: "35px" }}
          />
        </div>
      </div>

      <div className="aboutCompany">
        <ul>
         
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>About Us</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Our Pricing</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Our Gallery</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Appointment</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Privacy Policy</span>
          </li>

        </ul>
            
      </div>
      <div className="profession">
        <ul>
         
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Orthology</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Neurology</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Dental Care</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Opthalmology</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Cardiology</span>
          </li>

        </ul>
            
      </div>
      <div className="aboutCompany">
        <ul>
         
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>About Us</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Our Pricing</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Our Gallery</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Appointment</span>
          </li>
          <li style={{ display: "flex", gap: '8px' }}>
            <span>
            <img
              src={arrow}
              alt="arrow"
              style={{ width: "10px", height: "15px", color: "#FFFFFF" }}
            />
            </span>
            <span>Privacy Policy</span>
          </li>

        </ul>
            
      </div>
    </div>
      <div className="footer">
        <hr />
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  );
}
