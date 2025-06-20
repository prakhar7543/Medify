import React from "react";
import "./bookingsHeroSection.css";
import okTick from "../assets/okTick.png";
import HospitalsCard from "./hospitalsCard";
import offerCard from "../assets/offerCard.png";
import FAQs from "../components/heroSectionComponents/tagHero.jsx/faq";
import PlayStore from "../components/heroSectionComponents/tagHero.jsx/playStore";
import AboutUs from "../components/heroSectionComponents/tagHero.jsx/aboutUs";

export default function BookingsHeroSection() {
  return (
    <div className="bookingsHeroContainer">
      <div className="heroHeader">
        <p
          style={{
            fontSize: "24px",
            fontWeight: "500",
            color: "black",
            marginBottom: "unset",
            paddingLeft: "105px",
            textAlign: "start",
          }}
        >
          15 medical centers available in Alaska
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "100px",
            marginTop: "unset",
          }}
        >
          <span>
            <img
              src={okTick}
              alt="ok"
              style={{ width: "23px", height: "22px" }}
            />
          </span>
          <span>
            <p
              style={{
                width: "600px",
                height: "24px",
                color: "#787887",
                display: "flex",
                textAlign: "start",
                paddingLeft: "25px",
              }}
            >
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </span>
        </p>
      </div>
      <div className="mainContent">
        <HospitalsCard />
        <div className="offerCard">
          <img src={offerCard} alt="offerCard" />
        </div>
      </div>
      <div className="bookingsPageFaq" style={{backgroundColor: 'white'}}>
        <FAQs />
      </div>

      <div>
        <PlayStore />
      </div>

      <div>
        <AboutUs />
      </div>

    </div>
  );
}
