
import React from "react";
import "./myBookingsHeroSection.css";
import MyBookingsHospitalsCard from "./myBookingsHospitalCards";
import offerCard from "../assets/offerCard.png";
import FAQs from "../components/heroSectionComponents/tagHero.jsx/faq";
import PlayStore from "../components/heroSectionComponents/tagHero.jsx/playStore";
import AboutUs from "../components/heroSectionComponents/tagHero.jsx/aboutUs";

export default function MyBookingsHeroSection({ data = [] }) {
  return (
    <div className="myBookingsHeroContainer">
      <div className="myBookingsmainContent">
        {data.length > 0 ? (
          data.map((booking, index) => (
            <MyBookingsHospitalsCard key={index} booking={booking} />
          ))
        ) : (
          <div><h1>No Bookings Found!</h1></div>
        )}
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