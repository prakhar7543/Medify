import React from "react";
import "./myBookingsHeroSection.css";
import MyBookingsHospitalsCard from "./myBookingsHospitalCards";
import offerCard from "../assets/offerCard.png";
import FAQs from "../components/heroSectionComponents/tagHero.jsx/faq";
import PlayStore from "../components/heroSectionComponents/tagHero.jsx/playStore";
import AboutUs from "../components/heroSectionComponents/tagHero.jsx/aboutUs";
import Grid from "@mui/material/Grid";

export default function MyBookingsHeroSection({ data = [] }) {
  return (
    <div className="myBookingsHeroContainer">
      <div
        className="myBookingsmainContent"
        style={{ height: "100%", display: "flex", alignItems: "flex-start" }}
      >
        <div
          className="gridContainer"
          style={{ display: "flex", width: "786px" }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100%",

              "& .MuiGrid-root": {
                flexDirection: "row",
                paddingLeft: "55px",
                // position: 'relative',
                // left: '34px',
              },
            }}
          >
            {data.length > 0 ? (
              data.map((booking, index) => (
                <MyBookingsHospitalsCard key={index} booking={booking} />
              ))
            ) : (
              <div>
                <h1>No Bookings Found!</h1>
              </div>
            )}
          </Grid>
        </div>

        <div className="myBookingsofferCard">
          <img src={offerCard} alt="offerCard" />
        </div>
      </div>
      <div className="myBookingsPageFaq" style={{ backgroundColor: "white" }}>
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
