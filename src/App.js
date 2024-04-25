import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import Donars from "./components/donars/Donars";
import NGOPage from "./components/ngo/NGOPage";
import Register from "./components/register/Register";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/services/Services";

import Request_blood from "./components/request/Request_blood";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div>
      <Router>
        <Navbar user={user} />
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}

          <Route path="/" element={<Hero />} />

          <Route
            exact
            path="/Login"
            element={
              user.email ? (
                <></>
              ) : (
                <LoginForm userCallBack={(user) => setLoginUser(user)} />
              )
            }
          />

          <Route path="/services" element={<Services />} />
          <Route
            path="/LoginForm"
            element={<LoginForm setLoginUser={setLoginUser} />}
          />

          <Route path="/register" element={<Register />} />

          <Route path="/donars" element={<Donars />} />

          <Route path="/ngo" element={<NGOPage />} />

          <Route path="/request" element={<Request_blood />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
