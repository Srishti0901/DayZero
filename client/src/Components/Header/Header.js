import React from "react";
import { Link } from "react-router-dom";
import image from "../images/logo.png";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="nav">
        <h2>
          <img src={image} alt="" />
          <Link to="/" className="logo">
            DayZero
          </Link>
        </h2>
        <div className="link">
          <>
            <a href="https://www.linkedin.com/in/alankritutkarsh/">Team</a>
            <a href="https://www.linkedin.com/in/alankritutkarsh/">Pricing</a>
            <Link to="/login">Login</Link>
          </>
        </div>
      </div>
    </>
  );
}

export default Header;
