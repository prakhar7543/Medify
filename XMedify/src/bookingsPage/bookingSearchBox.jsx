import React, {useState} from "react";
import "./bookingSearchBox.css";
import button_search from "../assets/button_search.png";
import gps from "../assets/gps.png";
import { useNavigate } from "react-router-dom";

export default function BookingSearchBox({ states=[], cities=[] }) {
  // let [states, setStates] = useState([]);
  // let [cities, setCities] = useState([]);
  let [cityList, setCityList] = useState([]);
  let [selected, setSelected] = useState({
    state: "",
    city: "",
  });

let navigate = useNavigate();

  let handleStateChange = async (e) => {
  let state = e.target.value;
  setSelected({
    state: state,
    city: "",
  });

  if (state) {
    try {
      let res = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
      let data = await res.json();
      setCityList(data); // Update local cities
    } catch (error) {
      console.error("Error fetching cities in BookingSearchBox", error);
    }
  }
};

   

  let handleCityChange = (e) => {
    let city = e.target.value;
    setSelected((prev) => ({
      ...prev,
      city: city,
    }));
  };

  let handleClick = () => {
    if(selected.state && selected.city){
      
    navigate('/availableCentersPage', {
      state: {state: selected.state, city: selected.city, states, cities: cityList},
    });
    setSelected({
      state: "",
      city: "",
    });
  }else{
    alert('Enter state and city');
  }
  }

  // setSelected({
  //     state: '',
  //     city: '',
  //   })

  return (
    <div className="BookingsearchContainer">
      <div className="BookingsearchBox" style={{ display: "flex" }}>
        <div className="BookinginputWithIcon">
          <img src={gps} alt="state" className="BookinginputIcon" />
          <select
            id="state"
              onChange={handleStateChange}
              value={selected.state}
              style={{
                width: "220px",
                height: "33px",
                borderStyle: "none",
                color: "#ABB6C7",
                outlineStyle: 'none',
              }}
            >
              <option value="">State</option>
              {states && states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
        </div>
        <div className="BookinginputWithIcon">
          <img src={gps} alt="city" className="BookinginputIcon" />
          <select
            id="city"
              onChange={handleCityChange}
              value={selected.city}
              style={{
                width: "220px",
                height: "33px",
                borderStyle: "none",
                color: "#ABB6C7",
                outlineStyle: 'none',
              }}
            >
              <option value="">City</option>
              {cityList && cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
        </div>
        <img src={button_search} alt="btn" style={{cursor: 'pointer'}} onClick={handleClick}/>
      </div>
    </div>
  );
}
