import React from "react";
import { Link } from "react-router-dom";
import "../login/Login.css";

export default function Login() {
  return (
    <div className="login_container">
      <div className="title">Login</div>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email..."
          className="loginInput"
        />
        <label>Password</label>
        <input
          type="pajustify_centerssword"
          placeholder="Enter your Password..."
          className="loginInput"
        />
        <div className="align_center">
          <input type="checkbox" className="checkboxLogin" />
          Remember Me
        </div>
        <p className="forgotpswd">Forgot Password</p>
        <button className="loginButton">Login</button>
      </form>
      <div className="">
        <div className="acc_">
          Don't have an account
          <button className="signupButton">
            <Link className="link" to="/signup">
              SignUp
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
