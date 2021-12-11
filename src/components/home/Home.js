import React from "react";
import { Link } from "react-router-dom";
import design from "./Home.module.css";
import View from "./View";
import Data from "../../data/Data";

export default function Home() {
  return (
    <>
      {Data.slice(0, 1).map(({ id, url, title, date, category }) => (
        <div className={design.container} key={id > 1}>
          <div className={design.new}>
            <div className={design.row}>
              <img src={url} alt="" className={design.row_file}></img>
              <div className={design.size1}>
                <Link to={"/posts/" + id}>
                  <p className={design.text1}>{title}</p>
                </Link>
                <p className={design.date1}>
                  {category} /{date}
                </p>
              </div>
            </div>
            <div className={design.row1}>
              <View />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
