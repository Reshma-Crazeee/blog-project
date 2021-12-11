import React from "react";
import { Link } from "react-router-dom";
import elements from "../topOrder/TopPosts.module.css";

export default function List() {
  return (
    <div>
      <div className={elements.img}></div>
      <div className={elements.display_flex}>
        <div className={elements.content}>
          <Link to={"/posts/11"}>
            <div className={elements.title}>
              Dozens of people have been trapped in a remote UK pub for 3 nights
              with an Oasis tribute band after heavy snow
            </div>
          </Link>
          <p className={elements.date}>
            {" "}
            <span className={elements.travel}>World </span>/ November 21 2021
          </p>
        </div>
        <p className={elements.number}>1</p>
      </div>
    </div>
  );
}
