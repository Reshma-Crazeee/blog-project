import React from "react";
import styling from "../articles/Article.module.css";
import LatestArticles from "./latestArticles/LatestArticles";
import VerticalPosts from "../articles/verticalPosts/VerticalPosts";

export default function Article() {
  return (
    <>
      <div className={styling.container}>
        <div className={styling.role}>
          Latest Articles
          <div className={styling.underline} />
        </div>
        <div className={styling.direction}>
          <LatestArticles />
          <VerticalPosts />
        </div>
      </div>
    </>
  );
}
