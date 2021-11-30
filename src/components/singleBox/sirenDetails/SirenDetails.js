import React from "react";
import Footer from "../sirenDetails/Footer";
import "../sirenDetails/SirenDetails.css";
import AppDetails from "./AppDetails";

export default function SirenDetails() {
  return (
    <div>
      <div className="title_name">5 ways to animate a react app.</div>
      <div className="socialMedia">
        <div className="profile"></div>
        <div className="select_box">
          <p className="auth_name">Dmitry Nohosaufuf</p>
          <p className="date">jan 28, 2019 . 10 min read</p>
        </div>
        <div className="socialApps">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-youtube-square"></i>
        </div>
      </div>
      <AppDetails />
      <Footer />
    </div>
  );
}
