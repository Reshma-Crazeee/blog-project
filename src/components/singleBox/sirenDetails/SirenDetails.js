import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../sirenDetails/Footer";
import AppDetails from "./AppDetails";
import Data from "../../../data/Data";
import "../sirenDetails/SirenDetails.css";

export default function SirenDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    let blog = Data.find((val) => val.id === parseInt(id));
    if (blog) {
      setDetails(blog);
    }
  }, [id]);
  return (
    <>
      {details ? (
        <div>
          <div className="title_name">{details.title}</div>
          <div className="socialMedia">
            <div className="profile">
              <img src={details.profile} alt="" className="profile_img" />
            </div>
            <div className="select_box">
              <p className="auth_name">{details.author}</p>
              <p className="date">
                {details.date}.{details.read}
              </p>
            </div>
            <div className="socialApps">
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://twitter.com">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram-square"></i>
              </a>
              <a href="https://in.youtube.com">
                <i className="fab fa-youtube-square"></i>
              </a>
            </div>
          </div>
        </div>
      ) : null}
      <AppDetails />
      <Footer />
    </>
  );
}
