import React from "react";
import "../../singleBox/sirenDetails/SirenDetails.css";

export default function AppDetails() {
  return (
    <div className="box_AppDetails">
      <div className="app_image"></div>
      <div className="app_content">
        Animation in ReactJs app is a popular topic and there are many ways to
        create different types of animations. Many developers create animation
        exclusively using css and adding classes to HTML tags. This is a
        greatway and you should use it. If you want to create complex animations
        you can pay attention to GreenSock. GreenSock is the mostpowerful
        animation platform. There are also a lot of libraries, components for
        creating animation in React.
        <p className="para">Let's talk about them</p>
      </div>
      <div className="app_img"></div>
    </div>
  );
}
