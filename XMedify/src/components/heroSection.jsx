import React from "react";
import Navbar from "./heroSectionComponents/navbar/navbar";
import TopBanner from "./heroSectionComponents/topBanner";
import TagHero from "./heroSectionComponents/tagHero/tagHero";
import TagHeroSpecialisation from './heroSectionComponents/tagHero/tagHeroSpecialisation';

export default function HeroSection() {
  return (
    <div
      className="heroContainer"
      style={{
        width: "100vw",
        height: "830px",
        backgroundImage: "linear-gradient(47deg, #E7F0FF, #E8F1FF78)",
      }}
    >
      <TopBanner />
      <Navbar />
      <TagHero />
      <TagHeroSpecialisation />
    </div>
  );
}
