import React from "react";
import { Link } from "react-router-dom";
import decorate from "../topOrder/TopPosts.module.css";

export default function TopPosts() {
  return (
    <div className={decorate.container}>
      <div className={decorate.image}>
        <div className={decorate.size1}>
          <Link to={"/posts/44"}>
            <p className={decorate.text1}>Fiji Tour </p>
          </Link>
          <p className={decorate.date1}>Travel / October 21 2021</p>
        </div>
      </div>
    </div>
  );
}
