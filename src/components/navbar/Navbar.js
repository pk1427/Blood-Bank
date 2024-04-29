import React, { useState } from "react";
import Hero from "../home/Hero"
import LoginForm from "../LoginForm/LoginForm";

import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({user}) => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    setActive(active === "nav_menu" ? "nav_menu nav_active" : "nav_menu");
    setToggleIcon(
      toggleIcon === "nav_toggler" ? "nav_toggler toggle" : "nav_toggler"
    );
  };

  return (
    <div className="nav">
      <a href="#" className="brand">
        b-bank
      </a>

      <ul className={active}>
        <li className="nav_item">
          {" "}
          <a href="/" className="nav_link">
            Home
          </a>
        </li>

        <li className="nav_item">
          {" "}
          <a href="/services" className="nav_link">
            Services
          </a>
        </li>
      </ul>

      <div onClick={navToggle} className="nav_toggler">
        <div className="line1"></div>

        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <div className="signup-login">
        {user.email ? <>{user.email}</> :<NavLink to="/Login" className="signup">
          <button>Login</button>
        </NavLink>}
      </div>
    </div>
  );
};

export default Navbar;
