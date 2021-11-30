import React from "react";
import { Link } from "react-router-dom";
import "../signup/SignUp.css";

export default function SignUp() {
  return (
    <div className="SignUp_container">
      <div className="title">SignUp</div>
      <form className="SignUpForm">
        <label>UserName</label>
        <input
          type="text"
          placeholder="Enter your Name..."
          className="SignUpInput"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email..."
          className="SignUpInput"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your Password..."
          className="SignUpInput"
        />
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password..."
          className="SignUpInput"
        />
        <button className="SignUpButton">SignUp</button>
        <p className="acc">or</p>
        <button className="login_Button">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
}
