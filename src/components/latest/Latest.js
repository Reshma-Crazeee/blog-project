import React from "react";
import style from "./Latest.module.css";
import News from "./News";

export default function Latest() {
  return (
    <div className={style.container}>
      <div className={style.role}>
        The Latest
        <div className={style.underline} />
      </div>
      <div className={style.row}>
        <News />
      </div>
    </div>
  );
}
