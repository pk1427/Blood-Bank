import ngoImage from "../../assets/images/NGOs.jpg";
import "./NGOPage.css";

import React, { useState } from "react";

const NGOPage = () => {
  const [ngos, setNgos] = useState([
    { name: "NGO 1", email: "ngo1@example.com" },
    { name: "NGO 2", email: "ngo2@example.com" },
    { name: "NGO 3", email: "ngo3@example.com" },
  ]);

  const [newNgo, setNewNgo] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNgo({ ...newNgo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New NGO Data:", newNgo);
    setNewNgo({
      name: "",
      email: "",
    });
  };

  return (
    <div className="ngo">
      <div className="ngo-img">
        <img src={ngoImage}></img>
      </div>
      <div className="ngo-carts">
        <div className="ngo-info">
          <div className="ngo1">
            <h2>Our NGO: Save Lives Foundation</h2>
            <p>
              Welcome to Save Lives Foundation! We are dedicated to saving lives
              through blood donation, medical assistance, and community outreach
              programs.
            </p>
            <div className="details">
              <h3>Details</h3>
              <ul>
                <li>
                  <strong>Founder:</strong> John Smith
                </li>
                <li>
                  <strong>Location:</strong> 123 Main Street, Cityville
                </li>
                <li>
                  <strong>Email:</strong> info@savelivesfoundation.org
                </li>
                <li>
                  <strong>Phone:</strong> +1 (123) 456-7890
                </li>
                <li>
                  <strong>Website:</strong> www.savelivesfoundation.org
                </li>
              </ul>
            </div>
          </div>
          <div className="ngo2">
            <h2>Our NGO: Save Lives Foundation</h2>
            <p>
              Welcome to Save Lives Foundation! We are dedicated to saving lives
              through blood donation, medical assistance, and community outreach
              programs.
            </p>
            <div className="details">
              <h3>Details</h3>
              <ul>
                <li>
                  <strong>Founder:</strong> John Smith
                </li>
                <li>
                  <strong>Location:</strong> 123 Main Street, Cityville
                </li>
                <li>
                  <strong>Email:</strong> info@savelivesfoundation.org
                </li>
                <li>
                  <strong>Phone:</strong> +1 (123) 456-7890
                </li>
                <li>
                  <strong>Website:</strong> www.savelivesfoundation.org
                </li>
              </ul>
            </div>
          </div>

          <div className="ngo3">
            <h2>Our NGO: Save Lives Foundation</h2>
            <p>
              Welcome to Save Lives Foundation! We are dedicated to saving lives
              through blood donation, medical assistance, and community outreach
              programs.
            </p>
            <div className="details">
              <h3>Details</h3>
              <ul>
                <li>
                  <strong>Founder:</strong> John Smith
                </li>
                <li>
                  <strong>Location:</strong> 123 Main Street, Cityville
                </li>
                <li>
                  <strong>Email:</strong> info@savelivesfoundation.org
                </li>
                <li>
                  <strong>Phone:</strong> +1 (123) 456-7890
                </li>
                <li>
                  <strong>Website:</strong> www.savelivesfoundation.org
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="reg-ngo-text">
        <h1>
          Organise your NGO and
          <br></br> facilitate blood procurement
        </h1>
      </div>

      <div className="ngoreg-form">
        <h2>Register New NGO</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">NGO Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newNgo.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">NGO Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newNgo.email}
            onChange={handleChange}
            required
          />

          <button type="submit">Register NGO</button>
        </form>
      </div>
    </div>
  );
};

export default NGOPage;
