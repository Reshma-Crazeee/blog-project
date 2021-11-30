import React from "react";
import "../sirenDetails/SirenDetails.css";

export default function Footer() {
  return (
    <div className="footer_end">
      <div className="box_footer">
        <div className="box1">React</div>
        <div className="box1">javascript</div>
        <div className="box1">Animation</div>
      </div>
      <div className="image_claps">
        <p className="space">9.3k&nbsp;&nbsp;Claps</p>
      </div>
      <hr className="line" />
      <div className="socialMedia">
        <div className="profile"></div>
        <div className="select_box">
          <p className="written">Written By</p>
          <p className="fname">Dmitry Nohosaufuf</p>
          <p className="date">jan 28, 2019 . 10 min read</p>
        </div>
      </div>
      <hr className="line1" />
    </div>
  );
}
