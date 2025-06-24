import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tagHero.css";
import hero_image from "../../../assets/hero_image.png";
import button_search from "../../../assets/button_search.png";
import Search from "../../../assets/Search.png";
import Hospital from "../../../assets/Hospital.png";
import Drugstore from "../../../assets/Drugstore.png";
import Doctor from "../../../assets/Doctor.png";
import Capsule from "../../../assets/Capsule.png";
import Ambulance from "../../../assets/Ambulance.png";
import offer1 from "../../../assets/offer1.jpg";
import offer2 from "../../../assets/offer2.jpg";

export default function TagHero() {
  let [states, setStates] = useState([]);
  let [cities, setCities] = useState([]);
  let [selected, setSelected] = useState({
    state: "",
    city: "",
  });
  const [showStateDropdown, setShowStateDropdown] = useState(false);
const [showCityDropdown, setShowCityDropdown] = useState(false);

  let navigate = useNavigate();

  const dropdownStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '220px',
  height: '33px',
  border: '1px solid #ccc',
  padding: '5px',
  cursor: 'pointer'
};

const dropdownOptions = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: 'white',
  border: '1px solid #ccc',
  zIndex: 1000,
  maxHeight: '200px',
  overflowY: 'auto'
};

  let fetchStateData = async () => {
    let urlStates = "https://meddata-backend.onrender.com/states";

    try {
      let res1 = await fetch(urlStates);
      let data1 = await res1.json();
      console.log("states data", data1);
      setStates(data1);
    } catch (error) {
      console.error("error in fetching states data");
    }
  };

  let fetchCityData = async (state) => {
    let urlCities = `https://meddata-backend.onrender.com/cities/${state}`;
    try {
      let res2 = await fetch(urlCities);
      let data2 = await res2.json();
      console.log("cities data", data2);
      setCities(data2);
    } catch (error) {
      console.error("error in fetching cities data");
    }
  };

  useEffect(() => {
    fetchStateData();
  }, []);

  let handleStateChange = (e) => {
  let state = e.target.value;
  setSelected({
    state: state,
    city: "",
  });

  if (state) {
    fetchCityData(state);
  }
  setShowStateDropdown(false);
};

  let handleCityChange = (e) => {
  let city = e.target.value;
  setSelected(prev => ({
    ...prev,
    city: city,
  }));
  setShowCityDropdown(false);
};

  let handleClick = () => {
    if (selected.state && selected.city) {
      navigate("/availableCentersPage", {
        state: { state: selected.state, city: selected.city, states, cities },
      });
    } else {
      alert("Enter state and city");
    }
  };

  return (
    <div className="outerContainer">
      <div className="tagContainer">
        <div className="headingContainer">
          <div className="tag">
            <p
              style={{
                fontSize: "27px",
                fontWeight: "500",
                color: "#102851",
                margin: "unset",
                textAlign: "start",
              }}
            >
              Skip the travel! Find Online
            </p>
            <div style={{ display: "flex", gap: "5px" }}>
              <span style={{ color: "black" }}>
                <h1 style={{ margin: "unset", textAlign: "start" }}>Medical</h1>
              </span>
              <span style={{ color: "#2AA7FF" }}>
                <h1 style={{ margin: "unset", textAlign: "start" }}>Centers</h1>
              </span>
            </div>
            <p
              style={{
                fontWeight: "400",
                fontSize: "20px",
                color: "#5C6169",
                textAlign: "justify",
              }}
            >
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <button style={{ backgroundColor: "#2AA7FF", color: "white" }}>
              Find Centers
            </button>
          </div>
        </div>
        <div className="imageContainer">
          <img
            src={hero_image}
            alt="pics"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      <div className="searchContainer">
        <div className="searchBox" style={{ display: "flex" }}>
          <div className="inputWithIcon">
            <img src={Search} alt="state" className="inputIcon" />
            <div 
    id="state" 
    style={dropdownStyle}
    onClick={() => setShowStateDropdown(!showStateDropdown)}
  >
    {selected.state || 'State'}
    {showStateDropdown && (
      <div style={dropdownOptions}>
        {states.map(state => (
          <li 
            key={state} 
            onClick={(e) => {
              e.stopPropagation();
              handleStateChange({ target: { value: state } });
              setShowStateDropdown(false);
            }}
            style={{ padding: '8px', cursor: 'pointer' }}
          >
            {state}
          </li>
        ))}
      </div>
    )}
  </div>
          </div>
          <div className="inputWithIcon">
            <img src={Search} alt="city" className="inputIcon" />
            <div 
    id="city"
    style={dropdownStyle}
    onClick={() => setShowCityDropdown(!showCityDropdown)}
  >
    {selected.city || 'City'}
    {showCityDropdown && (
      <div style={dropdownOptions}>
        {cities.map(city => (
          <li 
            key={city} 
            onClick={(e) => {
              e.stopPropagation();
              handleCityChange({ target: { value: city } });
              setShowCityDropdown(false);
            }}
            style={{ padding: '8px', cursor: 'pointer' }}
          >
            {city}
          </li>
        ))}
      </div>
    )}
  </div>
          </div>
          <img
            id="searchBtn"
            src={button_search}
            alt="search"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
        </div>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "26px",
          }}
        >
          You may be looking for
        </p>

        <div className="category">
          <div>
            <img src={Doctor} alt="img" />
            <p>Doctor</p>
          </div>
          <div>
            <img src={Drugstore} alt="img" />
            <p>Drugstore</p>
          </div>
          <div>
            <img src={Hospital} alt="img" />
            <p>Hospital</p>
          </div>
          <div>
            <img src={Capsule} alt="img" />
            <p>Capsule</p>
          </div>
          <div>
            <img src={Ambulance} alt="img" />
            <p>Ambulance</p>
          </div>
        </div>
      </div>
      <div className="offerContainer">
        <div className="offer">
          <img src={offer1} alt="offerimg" />
          <img src={offer2} alt="offerimg" />
          <img src={offer1} alt="offerimg" />
        </div>
      </div>
    </div>
  );
}
