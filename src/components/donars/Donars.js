import React, { useState } from "react";
import "./Donars.css"

const DonorsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [requestInfo, setRequestInfo] = useState({
    bloodType: "",
    quantity: "",
    urgency: "",
  });

  const handleSearch = () => {
    // Implement search logic here
  };

  const handleSubmitRequest = () => {
    // Implement form submission logic for blood request
  };

  return (
    <div className="donors-page">
      <h2>Find Donors</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for donors..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <select
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        >
          <option value="">Select Blood Type</option>
          <option value="A">A</option>
          <option value="B">B</option>
          {/* Add more blood types as needed */}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="donor-list">
        <div className="donor-profile">
          <h3>John Doe</h3>
          <p>Blood Type: A+</p>
          <p>Contact: 1234567890</p>
        </div>

        
        <div className="donor-profile">
          <h3>John Doe</h3>
          <p>Blood Type: A+</p>
          <p>Contact: 1234567890</p>
        </div>


        <div className="donor-profile">
          <h3>John Doe</h3>
          <p>Blood Type: A+</p>
          <p>Contact: 1234567890</p>
        </div>

        {/* Render multiple instances of DonorProfile component */}
      </div>
      <h2>Donation History</h2>
      <div className="donation-history">
        {/* Display donation history here */}
      </div>
      
    </div>
  );
};

export default DonorsPage;
