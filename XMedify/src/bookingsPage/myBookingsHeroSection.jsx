import React from "react";
import "./myBookingsHeroSection.css";
// import okTick from "../assets/okTick.png";
import MyBookingsHospitalsCard from "./myBookingsHospitalCards";
import offerCard from "../assets/offerCard.png";
import FAQs from "../components/heroSectionComponents/tagHero.jsx/faq";
import PlayStore from "../components/heroSectionComponents/tagHero.jsx/playStore";
import AboutUs from "../components/heroSectionComponents/tagHero.jsx/aboutUs";



export default function MyBookingsHeroSection() {
  return (
    <div className="myBookingsHeroContainer">
      
      <div className="myBookingsmainContent">
        <MyBookingsHospitalsCard />
        <div className="myBookingsofferCard">
          <img src={offerCard} alt="offerCard" />
        </div>
      </div>
      <div className="myBookingsPageFaq" style={{backgroundColor: 'white'}}>
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