import React, { useState } from "react";
import "./Hero.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [suggestions, setSuggestions] = useState([{}]);

  const handleSearch = () => {
    // You can perform the search logic here based on searchInput and bloodType
    // For demonstration, let's just log the values
    console.log("Search Input:", searchInput);
    console.log("Selected Blood Type:", bloodType);
  };

  const handleLocationChange = async (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${e.target.value}&filter=countrycode:in&apiKey=b8568cb9afc64fad861a69edbddb2658&type=locality&limit=5`
    )
      .then((response) => response.json())
      .then((result) => {
        const {features} = result;
        setSuggestions(features);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="hero">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for location..."
          value={searchInput}
          onChange={handleLocationChange}
        />
        {
          suggestions?.map((loc, index)=>(
            <div key={index}>
              {loc?.properties?.city}
            </div>
          ))
        }
        <select
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        >
          <option value="">Select Blood Type</option>
          <option value="A">A+</option>
          <option value="A+">A-</option>
          <option value="B">B+</option>
          <option value="B+">B-</option>
          <option value="B+">o+</option>
          <option value="B+">o-</option>
          <option value="B+">AB+</option>
          <option value="B+">AB-</option>
          {/* Add more blood types as needed */}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
