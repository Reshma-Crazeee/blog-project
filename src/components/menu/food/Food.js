import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import img from "../../images/irish.jpg";
import color from "../food/Food.module.css";
import DataArticles from "../../articles/DataArticles";

function Food() {
  return (
    <div>
      {DataArticles.map(({ id, url, title, date, travel, num }) => (
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
                <span className={color.travel}>{travel}</span>
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
