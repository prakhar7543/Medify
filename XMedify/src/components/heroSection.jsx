import React from "react";
import Navbar from "./heroSectionComponents/navbar/navbar";
import TopBanner from "./heroSectionComponents/topBanner";
import TagHero from "./heroSectionComponents/tagHero.jsx/tagHero";
import TagHeroSpecialisation from './heroSectionComponents/tagHero.jsx/tagHeroSpecialisation';
import BookingsNavbar from "../bookingsPage/tabsNavbar";
import BookingsHeroSection from "../bookingsPage/bookingsHeroSection";
import MyBookings from "../bookingsPage/myBookings";

export default function HeroSection() {
  return (
    <div
      className="heroContainer"
      style={{
        width: "100vw",
        height: "100%",
        backgroundImage: "linear-gradient(47deg, #E7F0FF, #E8F1FF78)",
      }}
    >
      {/* <TopBanner />
      <Navbar />
      <TagHero />
      <TagHeroSpecialisation /> */}
      {/* <TopBanner />
      <BookingsNavbar />
      <BookingsHeroSection /> */}
      <MyBookings/>
    </div>
  );
}
