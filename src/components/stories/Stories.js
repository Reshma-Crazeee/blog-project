import React from "react";
import LatestStory from "../stories/LatestStory";
import color from "./Stories.module.css";

export default function Stories() {
  return (
    <div className={color.container}>
      <div className={color.role}>
        Latest Stories
        <div className={color.underline} />
      </div>
      <hr className={color.str_hr} />
      <div className={color.align_row}>
        <LatestStory />
      </div>
      <hr className={color.str_hr} />
      <p className={color.view}>
        VIEW MORE <i className="fas fa-arrow-right" id={color.arrow}></i>
      </p>
    </div>
  );
}
