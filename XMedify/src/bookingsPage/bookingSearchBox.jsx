import React, { useState, useEffect } from "react";
import "./bookingSearchBox.css";
import searchBtn from '../assets/searchBtn.png';
// import button_search from "../assets/button_search.png";
import gps from "../assets/gps.png";
import { useNavigate } from "react-router-dom";

export default function BookingSearchBox({
  states = [],

  selectedState = "",
  selectedCity = "",
}) {
  const [selected, setSelected] = useState({
    state: selectedState,
    city: selectedCity,
  });
  const [cityList, setCityList] = useState([]);
   const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  let navigate = useNavigate();

  const fetchCities = async (state) => {
    try {
      let res = await fetch(
        `https://meddata-backend.onrender.com/cities/${state}`
      );
      let data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching cities in BookingSearchBox", error);
    }
  };

 const dropdownStyle = {
  position: 'relative',
  display: 'inline-block',
 width: '274px',
    height: '24px',
  border: '1px solid #ccc',
  padding: '5px',
  cursor: 'pointer',
  listStyle: 'none',
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
  overflowY: 'auto',
  listStyle: 'none',
};

  useEffect(() => {
    setSelected({
      state: selectedState,
      city: selectedCity,
    });

    if (selectedState) {
      fetchCities(selectedState).then((cities) => {
        setCityList(cities);
      });
    }
  }, [selectedState, selectedCity]);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (!event.target.closest('#state')) {
      setShowStateDropdown(false);
    }
    if (!event.target.closest('#city')) {
      setShowCityDropdown(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  let handleStateChange = async (e) => {
    let state = e.target.value;
    setSelected({
      state,
      city: "",
    });

    if (state) {
      const cities = await fetchCities(state);
      setCityList(cities);
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
    if (selected.state && selected.city) {
      navigate("/availableCentersPage", {
        state: {
          state: selected.state,
          city: selected.city,
          states,
          cities: cityList,
        },
      });
      setSelected({
        state: "",
        city: "",
      });
    } else {
      alert("Enter state and city");
    }
  };

  return (
    <div className="BookingsearchContainer">
      <div className="BookingsearchBox" style={{ display: "flex" }}>
        <div className="BookinginputWithIcon">
          <img src={gps} alt="state" className="BookinginputIcon" />
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
        <div className="BookinginputWithIcon">
          <img src={gps} alt="city" className="BookinginputIcon" />
           <div 
    id="city"
    style={dropdownStyle}
    onClick={() => setShowCityDropdown(!showCityDropdown)}
  >
    {selected.city || 'City'}
    {showCityDropdown && (
      <div style={dropdownOptions}>
        {cityList.map(city => (
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
        
               <button 
          id="searchBtn"
          onClick={handleClick}
          style={{ 
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#2AA8FF',
            color: 'white',
            height: '50px',
            width: '120px',
            justifyContent: 'center',
          }}
        >
          <img 
            src={searchBtn}
            alt="search"
            style={{ width: '24px', height: '24px' }}
          />
          <span style={{ marginLeft: '8px' }}>Search</span>
        </button>

      </div>
    </div>
  );
}
