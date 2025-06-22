import React, { useEffect, useState } from "react";
import TopBanner from "../src/components/heroSectionComponents/topBanner";
import BookingsNavbar from "./bookingsPage/tabsNavbar";
import BookingsHeroSection from "./bookingsPage/bookingsHeroSection";
import { useLocation } from "react-router-dom";

export default function AvailableCentersPage() {
  let [data, setData] = useState([]);
  let location = useLocation();
  let { state, city } = location.state;

  let fetchHospitalData = async () => {
    try {
      if (state && city) {
        let medicalCentersUrl = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
        let res = await fetch(medicalCentersUrl);
        let result = await res.json();
        console.log("data of hospital centers available", result);
        setData(result);
      }
    } catch (error) {
      console.error("error in fetching hospitals data");
    }
  };

  useEffect(() => {
    fetchHospitalData();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <TopBanner />
      <BookingsNavbar />
      <BookingsHeroSection data={data} />
    </div>
  );
}
