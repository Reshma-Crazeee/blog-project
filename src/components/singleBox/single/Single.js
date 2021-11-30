import React from "react";
import SinglePost from "../singlePost/SinglePost";
import set from "../single/Single.module.css";
import PostContent from "../postContent/PostContent";
import { Link } from "react-router-dom";

export default function Single() {
  return (
    <div>
      <div className={set.justify_flex}>
        <div className={set.logo}>
          <span className={set.vertical}>The</span>Siren
        </div>
        <Link to={"/signup"}>
          <div className={set.started}>
            <span>Get Started</span>
          </div>
        </Link>
      </div>
      <hr className={set.hr__line} />

      <PostContent />
      <SinglePost />
    </div>
  );
}
