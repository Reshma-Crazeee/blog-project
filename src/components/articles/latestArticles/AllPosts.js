import React from "react";
import { Link } from "react-router-dom";
import DataArticles from "../DataArticles";
import color from "../latestArticles/LatestArticles.module.css";

export default function AllPosts() {
  return (
    <>
      {DataArticles.map(({ id, url, title, context, travel, date }) => (
        <div className={color.display_box} key={id}>
          <hr className={color.hr} />
          <div className={color.box}>
            <div className={color.img}>
              <img src={url} alt="img" className={color.img_url}></img>
            </div>
            <div className={color.content}>
              <Link to={"/posts/" + id}>
                <div className={color.title}>{title}</div>
              </Link>
              <p className={color.context}>{context}</p>
              <p className={color.date}>
                {" "}
                <span className={color.travel}>{travel}</span>
                {date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
