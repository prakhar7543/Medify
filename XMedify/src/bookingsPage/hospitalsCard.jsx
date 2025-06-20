import React from "react";
import "./hospitalsCard.css";
import hospitalCard from "../assets/hospitalCard.png";
import like from "../assets/like.png";

export default function HospitalsCard() {
  return (
    <div className="hospitalsCardContainer">
      <div className="hospitalCard">
        <div className="hospitalDetails">
          <div>
          <img src={hospitalCard} alt="card" />
          </div>

          <div className="details">
            <p style={{fontSize: '20px', fontWeight: '600', color: '#14BEF0', marginBottom: 'unset'}}>Fortis Hospital Richmond Road</p>
            <div className="address">
              <p>Banglore, Karnataka</p>
              <p style={{fontWeight: '400', fontSize: '14px'}}>Smilessence Center for Advanced Dentistry + 1</p>
              <p style={{fontWeight: '400', fontSize: '14px'}}>more</p>
              <p style={{display: 'flex', gap: '8px', fontWeight: '400', fontSize: '14px'}}>
                <span style={{fontWeight: '400', color: '#02A401'}}>
                Free 
                </span><strike>&#x20B9;500</strike>
                Consultation fee at clinic<span></span>
              </p>
            </div>
            <img src={like} alt="like" style={{paddingTop: '56px'}}/>
          </div>
        </div>
        <div className="availability">
          <p style={{fontWeight: '500', fontSize: '14px', color: '#02A401'}}>Available Today</p>
          <button
            style={{
              width: "212px",
              height: "40px",
              backgroundColor: "#2AA7FF",
              color: "white",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '500', fontSize: '14px'
            }}

          >
            Book FREE Center Visit
          </button>
        </div>
      </div>
    </div>
  );
}
