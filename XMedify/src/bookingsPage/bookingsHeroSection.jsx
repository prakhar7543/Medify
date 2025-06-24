import React from "react";
import "./bookingsHeroSection.css";
import okTick from "../assets/okTick.png";
import HospitalsCard from "./hospitalsCard";
import offerCard from "../assets/offerCard.png";
import FAQs from "../components/heroSectionComponents/tagHero.jsx/faq";
import PlayStore from "../components/heroSectionComponents/tagHero.jsx/playStore";
import AboutUs from "../components/heroSectionComponents/tagHero.jsx/aboutUs";

export default function BookingsHeroSection({data, city}) {
  return (
    <div className="bookingsHeroContainer">
      <div className="heroHeader">
       
          <h1 style={{  color: "black",
            marginBottom: "unset",
            paddingLeft: "142px",
            textAlign: "start",}}>{data.length} medical centers available in {city}</h1>

        {/* </p> */}
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "125px",
            marginTop: "15px",
          }}
        >
          <span>
            <img
              src={okTick}
              alt="ok"
              style={{ width: "23px", height: "22px", paddingTop: '7px' }}
            />
          </span>
          <span  style={{
                width: "600px",
                height: "24px",
                color: "#787887",
                display: "flex",
                textAlign: "start",
                paddingLeft: "25px",
              }}>
                Book appointments with minimum wait-time & verified doctor details
          
          </span>
        </p>
      </div>
      <div className="mainContent">
        <HospitalsCard data={data} />
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
