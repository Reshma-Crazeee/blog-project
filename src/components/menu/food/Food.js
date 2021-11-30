import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import img from "../../images/irish.jpg";
import color from "../food/Food.module.css";

function Food(props) {
  const { category } = props.match.params;
  const topPostNumber = [
    {
      id: 1,
      url: img,
      title: " Joshua Tree Overnight Adventure",
      date: " /  August 21 2017",
      num: 2,
    },
    {
      id: 2,
      url: img,
      title: " Joshua Tree Overnight Adventure",
      date: " /  August 21 2017",
      num: 3,
    },
    {
      id: 3,
      url: img,
      title: " Joshua Tree Overnight Adventure",
      date: " /  August 21 2017",
      num: 4,
    },
  ];
  return (
    <div>
      {topPostNumber.map(({ id, url, title, date, num }) => (
        <div key={id}>
          <hr className={color.hr} />

          <div className={color.container}>
            <div className={color.img}>
              <img src={url} alt="img" className={color.img_url}></img>
            </div>
            <div className={color.content}>
              <Link to={"/posts/" + id}>
                <div className={color.title}>{title}</div>
              </Link>
              <p className={color.date}>
                {" "}
                <span className={color.travel}>{category}</span>
                {date}
              </p>
            </div>
            <p className={color.number}>{num}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default withRouter(Food);
