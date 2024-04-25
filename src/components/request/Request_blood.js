// BloodRequestForm.js

import React, { useState } from "react";

import "./Request_blood.css";

const BloodRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bloodType: "",
    quantity: "",
    urgency: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      bloodType: "",
      quantity: "",
      urgency: "",
      additionalInfo: "",
    });
  };

  return (
    <div className="main-form-rq">
      {" "}
      <div className="blood-req-form">
        <h2>Blood Request Form</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="bloodType">Blood Type:</label>
          <input
            type="text"
            id="bloodType"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            required
          />

          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />

          <label htmlFor="urgency">Urgency:</label>
          <input
            type="text"
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default BloodRequestForm;
