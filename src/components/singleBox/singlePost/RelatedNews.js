import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ControlData from "../../main/ControlData";
import style from "../singlePost/SinglePost.module.css";

export default function RelatedNews() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      {ControlData.map(({ id, url, name, written, title, today, readtime }) => (
        <div className={style.card}>
          <div className={style.name}>{name}</div>
          <div className={style.items}>
            <img src={url} alt="" className={style.img_file} />
          </div>
          <div className={style.content}>
            <Link to={"/posts/" + id}>
              <div className={style.title}>{title}</div>
            </Link>
            <div className={style.image}></div>
            <p className={style.travel}>{written}</p>
            <p className={style.date}>
              {today} . {readtime}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
