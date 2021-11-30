import React from "react";
import { Link } from "react-router-dom";
import design from "./Home.module.css";
import View from "./View";

export default function Home() {
  return (
    <div className={design.container}>
      <div className={design.new}>
        <div className={design.row}>
          <div className={design.size1}>
            <Link to={"/posts/1"}>
              <p className={design.text1}>Find the best deals and save big </p>
            </Link>
            <p className={design.date1}>Travel / August 21 2017</p>
          </div>
        </div>
        <div className={design.row1}>
          <View />
        </div>
      </div>
    </div>
  );
}
