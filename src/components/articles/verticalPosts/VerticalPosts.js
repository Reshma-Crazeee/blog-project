import React from "react";
import TopOrder from "../trending/topOrder/TopOrder";
import design from "../verticalPosts/VerticalPosts.module.css";

export default function VerticalPosts() {
  return (
    <div className={design.posts}>
      <div className={design.advt}>
        <div className={design.font_size}>Advertistement</div>
      </div>
      <div className={design.top_box}>
        <TopOrder />
      </div>
    </div>
  );
}
