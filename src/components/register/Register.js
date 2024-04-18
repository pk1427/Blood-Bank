import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reenterpassword: "",
  });
  const [alreadyExists, setAlreadyExists] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    const { name, email, password, reenterpassword } = user;
    if (name && email && password && password === reenterpassword) {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };

      let bodyContent = JSON.stringify({
        email: user.email,
        password: user.password,
      });

      let response = await fetch(
        "https://adventurous-pleat-lion.cyclic.app/registration",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      let data = await response.json();
      console.log(data)
      console.log(data.message);

      if (data.success) {
        // If registration successful, redirect to login page
        window.location.href = "/login";
      } else {
        // If user already exists, display notification
        setAlreadyExists(true);
      }
    } else {
      alert("Invalid input provided");
    }
  };

  return (
    <div className="wrapper">
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            name="reenterpassword"
            placeholder="Re-enter Password"
            value={user.reenterpassword}
            onChange={handleChange}
            required
          />
        </div>

        <button className="button" onClick={register}>
          Register
        </button>
        {alreadyExists && (
          <p>
            User already registered. Go to <a href="/login">Login</a>.
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
