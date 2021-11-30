import React from "react";
import coloring from "../latestArticles/LatestArticles.module.css";
import TopPosts from "../trending/topOrder/TopPosts";
import AllPosts from "./AllPosts";

export default function LatestArticles() {
  return (
    <div className={coloring.flex_direction}>
      <AllPosts />
      <p className={coloring.view}>
        <i className="fas fa-arrow-down" id={coloring.arrow}></i>LOAD MORE
      </p>
      <TopPosts />
    </div>
  );
}
