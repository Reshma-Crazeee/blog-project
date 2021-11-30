import React from "react";
import img from "../images/train.jfif";
import img1 from "../images/water.jpg";
import { Link } from "react-router-dom";
import design from "./Home.module.css";

export default function View() {
  const data = [
    {
      id: 1,
      url: img1,
      text: "South Korea to get world’s first floating city by 2025",
      travel: "Travel",
      date: " / November 21 2021 ",
    },
    {
      id: 2,
      url: img,
      text: "IRCTC to run special ‘Shirdi Yatra’ tourist train",
      travel: "Travel",
      date: " / November 29 2021 ",
    },
  ];
  return (
    <>
      {data.map(({ id, url, text, travel, date }) => (
        <div key={id}>
          <div className={design.col}>
            <div className={design.img_url_travel}>
              <img src={url} alt="img_travel" className={design.col_img} />
            </div>
            <div className={design.size}>
              <Link to={"/posts/" + id}>
                <p className={design.text}>{text}</p>
              </Link>
              <p className={design.date}>
                {travel} {date}
              </p>
              <p className={design.underline}></p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
