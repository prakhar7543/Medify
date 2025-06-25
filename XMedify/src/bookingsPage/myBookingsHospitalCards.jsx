import React from "react";
import "./myBookingsHospitalCards.css";
import hospitalCard from "../assets/hospitalCard.png";
import like from "../assets/like.png";
import Grid from "@mui/material/Grid";


export default function MyBookingsHospitalsCard({booking}) {
  

  return (
    <div className="myBookingshospitalsCardContainer">
      <div className="myBookingshospitalCard">
        <div className="myBookingscardDetails">
          <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            height: '100%',

            '& .MuiGrid-root': {
              flexDirection: 'row'
            }
          }}
        >
          {booking && booking.map((item) => (
                <Grid
                item
                xs={12}
                key={item["Provider ID"]}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  padding: 2,
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  justifyContent: "center",
                }}
              >
                
          <div className="myBookingshospitalDetails">
            <div>
              <img src={hospitalCard} alt="card" />
            </div>

            <div className="myBookingsdetails">
             
                <h3  style={{
                 
                  color: "#14BEF0",
                  marginBottom: "unset",
                }}>{item['hospitalName']}</h3>
            
              <div className="myBookingsaddress">
                <p>{item['address']}</p>
                <p style={{ fontWeight: "400", fontSize: "14px" }}>
                  {item['hospitalType']}
                </p>
                <p style={{ fontWeight: "400", fontSize: "14px" }}>more</p>
              </div>
              <img src={like} alt="like" style={{ paddingTop: "56px" }} />
            </div>
          </div>
          <div
            className="appointmentDate"
            style={{ height: "220px", width: "210px" }}
          >
            <p
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                paddingTop: "8px",
              }}
            >
              <span
                style={{
                  border: "1px solid #2AA7FF",
                  color: "#2AA7FF",
                  backgroundColor: "white",
                  padding: '5px',
                  borderRadius: '5px',
                }}
              >
                {item['time']}
              </span>
              <span
                style={{
                  border: "1px solid #00A500",
                  color: "#00A500",
                  backgroundColor: "white",
                  padding: '5px',
                  borderRadius: '5px',
                }}
              >
                {item['date']}
              </span>
            </p>
          </div>
              </Grid>
          ))}
        </Grid>
          
        </div>
      </div>
    </div>
  );
}



// import React from "react";
// import "./myBookingsHospitalCards.css";
// import hospitalCard from "../assets/hospitalCard.png";
// import like from "../assets/like.png";
// import Grid from "@mui/material/Grid";

// export default function MyBookingsHospitalsCard({ booking }) {
//   return (
//     <div>

//     <Grid
//       item
//       xs={12}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         backgroundColor: "white",
//         padding: 2,
//         borderRadius: "10px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//         justifyContent: "center",
//         marginBottom: "20px",
//       }}
//     >
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
       
//         <div style={{ display: "flex", width: "70%" }}>
//           <div>
//             <img
//               src={hospitalCard}
//               alt="hospital"
//               style={{ paddingRight: "12px", height: "160px" }}
//             />
//           </div>

//           <div>
//             <h3
//               style={{
//                 color: "#14BEF0",
//                 marginBottom: "8px",
//               }}
//             >
//               {booking['hospitalName']}
//             </h3>
//             <div>
//               <p>{booking.address}</p>
//               <p style={{ fontSize: "14px" }}>{booking.hospitalType}</p>
//               <p style={{ fontSize: "14px" }}>more</p>
            
//             </div>
//             <img src={like} alt="like" style={{ marginTop: "10px" }} />
//           </div>
//         </div>

       
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             width: "30%",
//           }}
//         >
          
//           <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
//             <span
//               style={{
//                 border: "1px solid #2AA7FF",
//                 color: "#2AA7FF",
//                 padding: "5px 10px",
//                 borderRadius: "6px",
//                 backgroundColor: "white",
//               }}
//             >
//               {booking.time}
//             </span>
//             <span
//               style={{
//                 border: "1px solid #00A500",
//                 color: "#00A500",
//                 padding: "5px 10px",
//                 borderRadius: "6px",
//                 backgroundColor: "white",
//               }}
//             >
//               {booking.date}
//             </span>
//           </div>
//         </div>
//       </div>
//     </Grid>
//     </div>
//   );
// }

