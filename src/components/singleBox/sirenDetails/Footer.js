import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Data from "../../../data/Data";
import "../sirenDetails/SirenDetails.css";

export default function Footer() {
  const { id } = useParams();
  const [tags, setTags] = useState(null);

  useEffect(() => {
    let blog = Data.find((item) => item.id === parseInt(id));
    if (blog) {
      setTags(blog);
    }
  }, [id]);
  return (
    <>
      {tags ? (
        <div className="footer_end">
          <div className="box_footer">
            <div className="box1">{tags.tag}</div>
            <div className="box1">{tags.tag1}</div>
            <div className="box1">{tags.tag2}</div>
          </div>
          <div className="image_claps">
            <p className="space">
              {tags.claps}
              k&nbsp;&nbsp;Claps
            </p>
          </div>
          <hr className="line" />
          <div className="socialMedia">
            <div className="profile">
              <img src={tags.profile} alt="" className="profile_img" />
            </div>
            <div className="select_box">
              <p className="written">Written By</p>
              <p className="fname">{tags.author}</p>
              <p className="date">
                {tags.date} . {tags.read}
              </p>
            </div>
          </div>
          <hr className="line1" />
        </div>
      ) : null}
    </>
  );
}
