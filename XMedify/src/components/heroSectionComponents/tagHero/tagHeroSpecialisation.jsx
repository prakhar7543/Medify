import React from "react";
import ReadingContent from "./readingContent";
import BlogsNews from "./blogs&news";
import "./tagHeroSpecialisation.css";
import denistry from "../../../assets/denistry.png";
import primarycare from "../../../assets/primarycare.png";
import cardiology from "../../../assets/cardiology.png";
import bloodTest from "../../../assets/bloodTest.png";
import mriResource from "../../../assets/mriResource.png";
import psycologist from "../../../assets/psycologist.png";
import xray from "../../../assets/xray.png";
import laboratory from "../../../assets/laboratory.png";
import Specialist from './specialist';

export default function TagHeroSpecialisation() {
  return (
    <div className="container">
      <div className="specialisationContainer">
        <p
          style={{
            fontWeight: "600",
            fontSize: "48px",
            color: "#1B3C74",
            paddingTop: "30px",
          }}
        >
          Find by specialisation
        </p>
        <div className="specialisation">
          <div>
            <img src={denistry} alt="img" />
            {/* <p>Denistry</p> */}
          </div>
          <div>
            <img src={primarycare} alt="img" />
            {/* <p>Primary Care</p> */}
          </div>
          <div>
            <img src={cardiology} alt="img" />
            {/* <p>Cardiology</p> */}
          </div>
          <div>
            <img src={mriResource} alt="img" />
            {/* <p>Mri Resonance</p> */}
          </div>
          <div>
            <img src={bloodTest} alt="img" />
            {/* <p>Blood Test</p> */}
          </div>
          <div>
            <img src={psycologist} alt="img" />
            {/* <p>Piscologist</p> */}
          </div>
          <div>
            <img src={laboratory} alt="img" />
            {/* <p>Laboratory</p> */}
          </div>
          <div>
            <img src={xray} alt="img" />
            {/* <p>X- Ray</p> */}
          </div>
        </div>
        <button
          style={{
            backgroundColor: "#2AA8FF",
            borderRadius: "8px",
            color: "white",
            marginTop: "20px",
          }}
        >
          View All
        </button>
      </div>

      <div className="specialistContainer">
        <p style={{ fontWeight: "600", fontSize: "48px", color: "#1B3C74" }}>
          Our Medical Specialist
        </p>
        <div className="carousal">
            <Specialist />
        </div>
      </div>
      <div className="ReadingContentContainer">
        <div className="readingContent" style={{width: '100%', height: '600px'}}>
            <ReadingContent />
           
        </div>
        <div className="blogs&newsContent">
             <BlogsNews />
        </div>
      </div>
    </div>
  );
}
