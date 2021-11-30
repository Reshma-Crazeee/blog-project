import React from "react";
import choose from "../postContent/PostContent.module.css";
import SirenDetails from "../sirenDetails/SirenDetails";

export default function PostContent() {
  return (
    <div className={choose.container}>
      <div className={choose.postContent}>
        <div className={choose.position_fixed}>
          <div className={choose.claps}>
            <p className={choose.space}>9.3k</p>
          </div>
          <i className="bx bx-share-alt" id={choose.bx}>
            <div id={choose.share}>share this article</div>
          </i>
        </div>
      </div>
      <div className={choose.postContent1}>
        <SirenDetails />
      </div>
      <div className={choose.postContent2}></div>
    </div>
  );
}
