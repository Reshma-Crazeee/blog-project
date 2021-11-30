import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import style from "../fitness/Fitness.module.css";

function Fitness(props) {
  const { category } = props.match.params;
  return (
    <div>
      <div className={style.container}>
        <div className={style.item}></div>
        <div className={style.display_flex}>
          <div className={style.content}>
            <Link to={"/posts/1"}>
              <div className={style.title}>
                Catch waves with <br />
                an adventure guide
              </div>
            </Link>
            <p className={style.date}>
              <span className={style.travel}>{category} </span>/ August 21 2017
            </p>
          </div>
          <p className={style.number}>1</p>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Fitness);
