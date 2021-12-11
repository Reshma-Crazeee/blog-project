import React from "react";
import { Link } from "react-router-dom";
import img from "../../../images/gold.jpg";
import img1 from "../../../images/bjp.jpg";
import img2 from "../../../images/cricket.jfif";
import fix from "../list/List.module.css";

export default function ListOrder() {
  const topPostNumber = [
    {
      id: 12,
      url: img,
      title: " Gold smuggler arrested by ED while attending wedding in Pune",
      date: " /  November 29 2021",
      travel: " Travel ",
      num: 2,
    },
    {
      id: 13,
      url: img1,
      title: " BJP sweeps Tripura civic polls,bags 329 of 334 seats; TMC gains",
      date: " /  November 27 2021",
      travel: " Politics ",
      num: 3,
    },
    {
      id: 14,
      url: img2,
      title: " India fight back, Shreyas shines again",
      date: " /  November 30 2021",
      travel: " Sports ",
      num: 4,
    },
  ];
  return (
    <>
      {topPostNumber.map(({ id, url, title, travel, date, num }) => (
        <div key={id}>
          <hr className={fix.hr} />
          <div className={fix.display_flex}>
            <div className={fix.img}>
              <img src={url} alt="img" className={fix.img_url}></img>
            </div>
            <div className={fix.content}>
              <Link to={"/posts/" + id}>
                <div className={fix.title}>{title}</div>
              </Link>
              <p className={fix.date}>
                {" "}
                <span className={fix.travel}>{travel}</span>
                {date}
              </p>
            </div>
            <p className={fix.number}>{num}</p>
          </div>
        </div>
      ))}
    </>
  );
}
