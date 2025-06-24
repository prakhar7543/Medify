import React, { useEffect, useState } from "react";
import TopBanner from '../components/heroSectionComponents/topBanner';
import MyBookingsNavbar from './myBookingsNavbar';
import MyBookingsHeroSection from '../bookingsPage/myBookingsHeroSection';

export default function MyBookings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem('bookings'));
    console.log("Fetched from localStorage:", bookingData);

    if (bookingData) {
      setData([bookingData]); // wrap in array so `.map()` works
    } else {
      setData([]);
    }
  }, []);

  return (
    <div className="myBookingsContainer">
      <TopBanner />
      <MyBookingsNavbar />
      <MyBookingsHeroSection data={data} />
    </div>
  );
}
