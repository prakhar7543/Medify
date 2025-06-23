import React, { useState, useEffect } from "react";
import "./bookingSearchBox.css";
import button_search from "../assets/button_search.png";
import gps from "../assets/gps.png";
import { useNavigate } from "react-router-dom";

export default function BookingSearchBox({
  states = [],
  cities = [],
  selectedState = "",
  selectedCity = "",
}) {
  const [selected, setSelected] = useState({
    state: selectedState,
    city: selectedCity,
  });
  const [cityList, setCityList] = useState([]);

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

  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState).then((cities) => setCityList(cities));
    }
  }, [selectedState]);

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
          <div id="state">
            <select
              onChange={handleStateChange}
              value={selected.state}
              style={{
                width: "220px",
                height: "33px",
                borderStyle: "none",
                color: "#ABB6C7",
                outlineStyle: "none",
              }}
            >
              <option value="">State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="BookinginputWithIcon">
          <img src={gps} alt="city" className="BookinginputIcon" />
          <div id="city">
            <select
              onChange={handleCityChange}
              value={selected.city}
              style={{
                width: "220px",
                height: "33px",
                borderStyle: "none",
                color: "#ABB6C7",
                outlineStyle: "none",
              }}
            >
              <option value="">City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
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
    </div>
  );
}
