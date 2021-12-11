import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Data from "../../../data/Data";
import choose from "../postContent/PostContent.module.css";
import SirenDetails from "../sirenDetails/SirenDetails";

export default function PostContent() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = Data.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);
  return (
    <>
      <div className={choose.container}>
        <div className={choose.postContent}>
          <div className={choose.position_fixed}>
            <div className={choose.claps}>
              {blog ? <p className={choose.space}>{blog.claps}k</p> : null}
            </div>
            <i className="bx bx-share-alt" id={choose.bx}>
              <div id={choose.share}>share this article</div>
            </i>
          </div>
        </div>
        <div className={choose.postContent1}>
          <SirenDetails />
        </div>
        <div className={choose.postContent2}></div>
      </div>
    </>
  );
}
