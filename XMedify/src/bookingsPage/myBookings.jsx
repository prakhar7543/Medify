import React from "react";
import TopBanner from '../components/heroSectionComponents/topBanner'
// import BookingsNavbar from '../bookingsPage/tabsNavbar'
import MyBookingsNavbar from './myBookingsNavbar';
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