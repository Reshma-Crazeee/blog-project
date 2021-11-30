import React from "react";
import elements from "../topOrder/TopPosts.module.css";
import List from "../list/List";
import ListOrder from "../list/ListOrder";

export default function TopOrder() {
  return (
    <div className={elements.list}>
      <div className={elements.role}>
        Top Posts
        <div className={elements.underline} />
      </div>
      <div className={elements.top_box}>
        <div className={elements.row}>
          <List />
        </div>
        <div className={elements.col}>
          <ListOrder />
        </div>
      </div>
    </div>
  );
}
