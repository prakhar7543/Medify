import React from "react";
import TopBanner from '../components/heroSectionComponents/topBanner'
// import BookingsNavbar from '../bookingsPage/tabsNavbar'
import MyBookingsNavbar from '../bookingsPage/MyBookingsNavbar';
import MyBookingsHeroSection from '../bookingsPage/myBookingsHeroSection'

export default function MyBookings(){
    return(
        <div className="myBookingsContainer">
         <TopBanner />  
         <MyBookingsNavbar /> 
        <MyBookingsHeroSection/>
        </div>
    )
}