import React from "react";
import style from "../singlePost/SinglePost.module.css";
import MoreFromSiren from "./MoreFromSiren";
import RelatedNews from "./RelatedNews";

export default function SinglePost() {
  return (
    <>
      <div className={style.conatiner_box}>
        <div className={style.role}>The Latest</div>
        <div className={style.more}>More From The Siren</div>
        <div className={style.more_from_siren}>
          <MoreFromSiren />
        </div>
        <hr className={style.hr__line} />
        <div className={style.singlePost}>
          <RelatedNews />
        </div>
      </div>
    </>
  );
}
