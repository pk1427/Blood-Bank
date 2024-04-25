import React, { useState } from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    console.log("Search Input:", searchInput);
    console.log("Selected Blood Type:", bloodType);
  };

  const handleLocationChange = async (e) => {
    setSearchInput(e.target.value);

    await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${e.target.value}&filter=countrycode:in&apiKey=b8568cb9afc64fad861a69edbddb2658&type=locality&limit=5`
    )
      .then((response) => response.json())
      .then((result) => {
        const { features } = result;
        setSuggestions(features);
      })
      .catch((error) => console.log("error", error));
  };

  const handleSuggestionClick = (city) => {
    setSearchInput(city);
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div className="hero">
      <div className="main-text">
        <h1>A DROP OF BLOOD CAN SAVES ONES LIFE</h1>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for location..."
          value={searchInput}
          onChange={handleLocationChange}
        />
        {suggestions?.length > 0 && (
          <div className="suggestions">
            {suggestions?.map((loc, index) => {
              const city = loc.properties.city;
              return (
                <div
                  key={index}
                  className="suggestion"
                  onClick={() => handleSuggestionClick(city)}
                >
                  {city}
                </div>
              );
            })}
          </div>
        )}
        <select
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        >
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <NavLink to="/ngo">
          <button onClick={handleSearch}>Search</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchBar;
