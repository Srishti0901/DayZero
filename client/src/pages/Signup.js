import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUserState } from "../services/userSlice";
import "./login.css";
import { useSignupMutation } from "../services/apiSlice";
import { useDispatch } from "react-redux";

function Signup() {
  const [signup, { isLoading }] = useSignupMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await signup({ name, email, password });
    dispatch(setUserState({ ...res }));
    navigate("/");
  };
  return (
    <div className="superparent">
      <h1>Welcome to DayZero</h1>
      <h4>BLUEPRINT TO BRILLIANCE</h4>
      <div>
        <p>
          A blueprint engine that converts your ideas into execution focused
          plan of action within 6 minutes.
        </p>
      </div>
      <div className="parent">
        <div className="form">
          <h3>Create your account</h3>
          <p>Fill your details to get started</p>
          <form onSubmit={handleSignup} className="form1">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Full Name"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
            />
            <button disabled={isLoading}>Create an account</button>
            <p>
              Do you already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}

export default Signup;
