import React from "react";
import style from "../singlePost/SinglePost.module.css";
import img from "../../images/china.jpg";
import { Link } from "react-router-dom";

export default function MoreFromSiren() {
  const data = [
    {
      id: 1,
      url: img,
      context: "Performance Comparison for 5 javaScript Object iterations",
      author: "Dmitry Nozhenko",
    },
    {
      id: 2,
      url: img,
      context: "Performance Comparison for 5 javaScript Object iterations",
      author: "Dmitry Nozhenko",
    },
    {
      id: 3,
      url: img,
      context: "Performance Comparison for 5 javaScript Object iterations",
      author: "Dmitry Nozhenko",
    },
    {
      id: 4,
      url: img,
      context: "Performance Comparison for 5 javaScript Object iterations",
      author: "Dmitry Nozhenko",
    },
  ];
  return (
    <div>
      {data.map(({ id, url, context, author }) => (
        <div className={style.more_container} key={id}>
          <div className={style.more_content}>
            <Link to={"/posts/" + id}>
              <div className={style.more_context}>{context}</div>
            </Link>
            <div className={style.more - author}>{author}</div>
          </div>
          <div className={style.more_img}>
            <img src={url} alt="more_img" className={style.img_url_more}></img>
          </div>
        </div>
      ))}
    </div>
  );
}
