import React, { useState } from "react";
import faqData from "./Faqs";
import "./faq.css";
import { useNavigate } from "react-router-dom";

function Faq() {
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();
  const toggleAnswer = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handlebtn = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="top-page">
      <div className="first-faq">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "60px",
            fontSize: "70px",
            color: "white",
          }}
        >
          FAQs
        </h1>
        <div className="div-top">
          {/* <div className="faq"> */}
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="header">
                <h3>{item.question}</h3>
                <button onClick={() => toggleAnswer(index)}>
                  {expanded[index] ? "▲" : "▼"}
                </button>
              </div>
              {expanded[index] && <p>{item.answer}</p>}
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
      <div className="main-content">
        <h1>let's turn potential into growth...</h1>
        <p>
          Experience the awe-inspiring magic of our blueprint as your thoughts
          unfold into a structured roadmap, guiding you effortlessly towards
          extraordinary achievement.
        </p>
        <div className="buttom">
          <button onClick={handlebtn} className="btn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
