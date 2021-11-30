import React from "react";
import { Link } from "react-router-dom";
import style from "../singlePost/SinglePost.module.css";

export default function RelatedNews(props) {
  return (
    <div>
      <div className={style.card}>
        <div className={style.name}>{props.name}</div>
        <div className={style.items}></div>
        <div className={style.content}>
          <Link to={"/posts/1"}>
            <div className={style.title}>
              Joshua Tree
              <br />
              Overnight Adventure
            </div>
          </Link>
          <div className={style.image}></div>
          <p className={style.travel}>Dmitry Nozhenko</p>
          <p className={style.date}>Aug 10 . 4 min read</p>
        </div>
      </div>
    </div>
  );
}
