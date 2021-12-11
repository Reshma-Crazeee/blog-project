import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "../SameContent.module.css";
import color from "../../menu/bollywood/Bollywood.module.css";
import Data from "../../../data/Data";
import Fitness from "../../menu/fitness/Fitness";
import Food from "../../menu/food/Food";
import Hollywood from "../../menu/hollywood/Hollywood";

function BollywoodContent(items) {
  return (
    <>
      <div>
        <div className={color.container_boxs}>
          <hr className={color.hr} />
          <div className={color.card}>
            <div className={color.category}></div>
            <div classname={color.items}>
              <img
                src={items.url}
                alt="bolly_image"
                className={color.img_url_style}
              ></img>
            </div>
            <div className={color.content}>
              <Link to={`/posts/${items.id}`}>
                <div className={color.title}>{items.title}</div>
              </Link>
              <p className={color.context}>{items.content}</p>
              <p className={color.date}>
                <span className={color.travel}>{items.category} </span>/{" "}
                {items.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Choose() {
  const { category } = useParams();
  const [list, setList] = useState(null);
  const [add, setAdd] = useState(2);
  useEffect(() => {
    let blog = Data.find((blog) => blog.category === category);
    if (blog) {
      setList(blog);
    }
  }, [category]);
  return (
    <>
      {list ? (
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.col1}>
              <div className={style.role1}>{list.category}</div>
              <div className={style.underline1} />
              {Data.filter((item) => item.category === list.category)
                .slice(0, add)
                .map(BollywoodContent)}
              <p className={style.view} onClick={() => setAdd(add + 2)}>
                <i className="fas fa-arrow-down" id={style.arrow}></i>LOAD MORE
              </p>
            </div>
            <div className={style.col2}>
              <div className={style.row_2}>
                <div className={style.row_3}>
                  <div className={style.role}>
                    Top Posts
                    <div className={style.underline} />
                  </div>
                  <Fitness />
                  <Food />
                </div>
                <div className={style.col3}>
                  <Hollywood />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
