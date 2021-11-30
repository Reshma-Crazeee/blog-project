import React from "react";
import style from "../logo/Logo.module.css";

export default function Logo() {
  return (
    <div className={style.top}>
      <div className={style.logo}>
        <span className={style.vertical}>The</span>Siren
      </div>
    </div>
  );
}
