import React from "react";
import "./Firstpage.css";
import img from "../../images/featured.png";
import photo from "../../images/product-video.png";
import { useNavigate } from "react-router-dom";

function Firstpage() {
  const navigate = useNavigate();
  const handlebutton = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <div className="bg-overlay">
        <div className="spze"></div>
        <div className="img-1">
          <a href="https://www.producthunt.com/products/dayzero-2#dayzero-v2">
            <img src={img} alt="" />
          </a>
        </div>
        <h1>we are your decision between vision & execution</h1>
        <p>
          Blueprint engine converting your thoughts into an strategic plan of
          action with expert insights
        </p>
        <button onClick={handlebutton}>Get Started</button>
        <div className="pp"></div>
        <p>Used by the visionaries, on payroll from</p>
        <p className="spac">(obligatory social proof)</p>
      </div>
      <div className="img-section">
        <img src={photo} alt="" />
      </div>
    </>
  );
}

export default Firstpage;
