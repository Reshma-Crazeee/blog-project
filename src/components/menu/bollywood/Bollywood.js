import React from "react";
import img1 from "../../images/irish.jpg";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import style from "../bollywood/Bollywood.module.css";

function Bollywood(props) {
  const { category } = props.match.params;

  const data = [
    {
      id: 1,
      url: img1,
      title: "catch waves  with an adventure guide",
      context:
        " Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination.It has a plethora of temples and places ",
      date: " / August 27 2017",
    },
    {
      id: 2,
      url: img1,
      title: "catch waves  with an adventure guide",
      context:
        " Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination.It has a plethora of temples and places ",
      date: " / August 27 2017",
    },
    {
      id: 3,
      url: img1,
      title: "catch waves  with an adventure guide",
      context:
        " Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination.It has a plethora of temples and places ",
      date: " / August 27 2017",
    },
    {
      id: 4,
      url: img1,
      title: "catch waves  with an adventure guide",
      context:
        " Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination.It has a plethora of temples and places ",
      date: " / August 27 2017",
    },
    {
      id: 5,
      url: img1,
      title: "catch waves  with an adventure guide",
      context:
        " Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination.It has a plethora of temples and places ",
      date: " / August 27 2017",
    },
    {
      id: 6,
      url: img1,
      title: "catch waves  with an adventure guide",
      context:
        " Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination.It has a plethora of temples and places ",
      date: " / August 27 2017",
    },
  ];
  return (
    <>
      <div className={style.role}>{category}</div>
      <div className={style.underline} />
      {data.map(({ id, url, title, context, date }) => (
        <div className={style.container_boxs} key={id}>
          <hr className={style.hr} />

          <div className={style.card}>
            <div className={style.category}></div>
            <div classname={style.items}>
              <img
                src={url}
                alt="bolly_image"
                className={style.img_url_style}
              ></img>
            </div>
            <div className={style.content}>
              <Link to={"/posts/" + id}>
                <div className={style.title}>{title}</div>
              </Link>
              <p className={style.context}>{context}</p>
              <p className={style.date}>
                <span className={style.travel}>{category}</span>
                {date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default withRouter(Bollywood);
