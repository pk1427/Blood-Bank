import React, { useState } from "react";
import "./Donars.css";

const DonorsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [requestInfo, setRequestInfo] = useState({
    bloodType: "",
    quantity: "",
    urgency: "",
  });

  const handleSearch = () => {};

  const handleSubmitRequest = () => {};

  return (
    <div className="donar-page">
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
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="donor-list">
          <div className="donor-profile">
            <h3>Aniket</h3>
            <p>Blood Type: A+</p>
            <p>Contact: 8876564557</p>
            <p>location:Delhi</p>
          </div>

          <div className="donor-profile">
            <h3>Pavan</h3>
            <p>Blood Type: O+</p>
            <p>Contact: 9022333344</p>
            <p>location:Pune</p>
          </div>

          <div className="donor-profile">
            <h3>Prasad</h3>
            <p>Blood Type: B+</p>
            <p>Contact: 8805678976</p>
            <p>location:Ahemdabad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorsPage;
