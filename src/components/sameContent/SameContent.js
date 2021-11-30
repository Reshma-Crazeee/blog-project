import React from "react";
import style from "../sameContent/SameContent.module.css";
import Bollywood from "../menu/bollywood/Bollywood";
import Fitness from "../menu/fitness/Fitness";
import Food from "../menu/food/Food";
import Hollywood from "../menu/hollywood/Hollywood";

function SameContent() {
  return (
    <>
      <div className={style.container_box}>
        <div className={style.row}>
          <div className={style.col}>
            <Bollywood />
            <p className={style.view}>
              <i className="fas fa-arrow-down" id={style.arrow}></i>LOAD MORE
            </p>
          </div>
          <div className={style.col1}>
            <div className={style.row_2}>
              <div className={style.col_2}>
                <div className={style.role}>
                  Top Posts
                  <div className={style.underline} />
                </div>
                <Fitness />
                <Food />
              </div>
              <div className={style.col_3}>
                <Hollywood />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SameContent;
