import React, { useEffect, useState } from "react";
import TopBanner from '../components/heroSectionComponents/topBanner';
import MyBookingsNavbar from './myBookingsNavbar';
import MyBookingsHeroSection from '../bookingsPage/myBookingsHeroSection';

export default function MyBookings() {
  const [data, setData] = useState([]);

  useEffect(() => {
  const bookingData = JSON.parse(localStorage.getItem('bookings'));
  if (Array.isArray(bookingData)) {
    setData(bookingData); 
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
