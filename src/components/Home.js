import React from "react";
import "./styles/Home.css"
import logo from "./styles/images/logo.png"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img src={logo} alt="Ma and Pa's Pizza Shop" className="logo" />
      <p className="subtitle">Nothing quite like a home-cooked meal!</p>
      <div className="button-container">
        <Link to="/sign-in">
          <button className="button">Sign In</button>
        </Link>
        <Link to="/register">
          <button className="button">Register</button>
        </Link>
        <Link to="/menu">
          <button className="guest-button">Continue as Guest</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
