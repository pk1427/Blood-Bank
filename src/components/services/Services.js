// ServicesPage.js
import React from "react";
import "./Services.css";
import { redirect } from "react-router-dom";

const ServiceCard = ({ title, description, icon, Click }) => {
  return (
    <div className="service-card" onClick={Click}>
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

const ServicesPage = () => {
  const handleClick = async (type) => {
    if (type == "donation") {
      console.log("redirect here");
      window.location.href = "/donars";
    }
    if (type == "request") {
      console.log("redirect here");
      window.location.href = "/request";
    }

    if (type == "ngo") {
      console.log("redirect here");
      window.location.href = "/ngo";
    }
  };
  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <div className="services-container">
        <ServiceCard
          title="Blood Donation"
          description="Donate blood to save lives and contribute to the community."
          Click={() => handleClick("donation")}
          //   icon={<IconBloodDonation />}
        />
        <ServiceCard
          title="Donation Requests"
          description="Submit requests for blood donations based on your needs."
          Click={() => handleClick("request")}
          //   icon={<IconDonationRequest />}
        />

        <ServiceCard
          title="NGO"
          description="Register your NGO, And fulfill blood donations on  needs."
          Click={() => handleClick("ngo")}
        />
      </div>

      
    </div>
  );
};

export default ServicesPage;
