import React from "react";
import style from "../singlePost/SinglePost.module.css";
import { Link } from "react-router-dom";
import DataArticles from "../../articles/DataArticles";

export default function MoreFromSiren() {
  return (
    <div>
      {DataArticles.map(({ id, url, title, authorName }) => (
        <div className={style.more_container} key={id}>
          <div className={style.more_content}>
            <Link to={"/posts/" + id}>
              <div className={style.more_context}>{title}</div>
            </Link>
            <div className={style.more_author}>{authorName}</div>
          </div>
          <div className={style.more_img}>
            <img src={url} alt="more_img" className={style.img_url_more}></img>
          </div>
        </div>
      ))}
    </div>
  );
}
