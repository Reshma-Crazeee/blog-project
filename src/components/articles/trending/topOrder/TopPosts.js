import React from "react";
import { Link } from "react-router-dom";
import decorate from "../topOrder/TopPosts.module.css";

export default function TopPosts() {
  return (
    <div className={decorate.container}>
      <div className={decorate.image}>
        <div className={decorate.size1}>
          <Link to={"/posts/1"}>
            <p className={decorate.text1}>Title of vertical gallery </p>
          </Link>
          <p className={decorate.date1}>Travel / August 21 2017</p>
        </div>
      </div>
    </div>
  );
}
