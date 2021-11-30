import React from "react";
import Article from "../articles/Article";
import Home from "../home/Home";
import Latest from "../latest/Latest";
import Stories from "../stories/Stories";

export default function Container() {
  return (
    <div className="conatiner__siren">
      <Home />
      <Latest />
      <Article />
      <Stories />
    </div>
  );
}
