import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";
import { dividerClasses } from "@mui/material";

const LoginForm = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
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
        "https://adventurous-pleat-lion.cyclic.app/login",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      let data = await response.json();
      console.log(data.message);
      setIsLoggedIn(true);
      props.userCallBack({ email: user.email });
      window.location.href = "/";
      // setLoginUser(data.user);

      // axios.post();
    } else {
      alert("invalid input posted");
    }
  };

  return (
    <div className="login-page">
       <div className="wrapper">
      <form action="">
        <h1>LOGIN</h1>

        {console.log("user", user)}
        <div className="input-box">
          <input
            type="text"
            name="email"
            placeholder="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            name="password"
            placeholder="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="remember-forgot">
          <a href="#">Forgot Password</a>

          <button type="submit" onClick={login}>
            Login
          </button>

          <div className="register-link">
            <p>
              doesn't Have Account ? <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </form>
    </div>
    </div>
   
  );
};

export default LoginForm;
