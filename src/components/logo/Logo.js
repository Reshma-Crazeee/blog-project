import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "../logo/Logo.module.css";

export default function Logo() {
  return (
    <div className={style.top}>
      <div className={style.logo}>
        <Link to={'/home'} className={style.color}>
        <span className={style.vertical}>The</span>Siren
        </Link>
      </div>
    </div>
  );
}
