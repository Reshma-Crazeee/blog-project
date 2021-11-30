import React from "react";
import { Link } from "react-router-dom";
import data from "../main/ControlData";
import style from "./Latest.module.css";

export default function News() {
  return (
    <>
      {data.map((val, index) => (
        <div className={style.card} num={val.id} key={index}>
          <div className={style.items}>
            <img
              src={val.url}
              alt="latest_image"
              className={style.img_url}
            ></img>
          </div>
          <div className={style.content}>
            <Link to={"/posts/" + val.id}>
              <div className={style.title}>{val.title}</div>
            </Link>
            <p className={style.context}>{val.context}</p>
            <p className={style.date}>
              <span className={style.travel}>{val.travel}</span>
              {val.date}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
