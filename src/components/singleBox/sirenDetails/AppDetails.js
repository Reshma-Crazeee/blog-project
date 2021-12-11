import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Data from "../../../data/Data";
import "../../singleBox/sirenDetails/SirenDetails.css";

function AppDetails() {
  const { id } = useParams();
  const [siren, setSiren] = useState(null);

  useEffect(() => {
    let blog = Data.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setSiren(blog);
    }
  }, [id]);

  return (
    <>
      {siren ? (
        <div className="box_AppDetails">
          <div className="app_image">
            <img src={siren.url} alt="alt_image" className="alt_img"></img>
          </div>
          <div className="app_content">
            {siren.content}
            <br />
            <br />
            <div>{siren.content1}</div>
            <br />
            {siren.content2}
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AppDetails;
