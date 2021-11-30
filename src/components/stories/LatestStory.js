import React from "react";
import { Link } from "react-router-dom";
import color from "./Stories.module.css";

export default function LastestStory() {
  const latestStories = [
    {
      id: 1,
      title: " The future is seamless",
      context:
        "At Sandvik, CEO Stefan Widing says: “Seamless Flow is an important part of our strategy in the coming years. We have seen great results within other companies that are perhaps a little further ahead in their journey. Automation of tasks and processes frees up time that can then be used in more truly value-added work and help to reduce lead times. I am a strong believer in Seamless Flow and see it as a fundamental for Sandvik. ",
      travel: "TECH",
      date: " / November 24 2021",
    },
    {
      id: 2,
      title:
        " JoJo Siwa Opens Up About Wearing a Dress and Heels for the 'First Time in My Life' on 2021 AMAs Red Carpet",
      context:
        "JoJo Siwa built her multi-million dollar brand empire on glitter, neon and bows. During her years as a Nickelodeon fixture and YouTube sensation, she was almost always spotted rocking a maximalist combination of all three. But as she's expanded her brand in the past few months with a groundbreaking stint on season 30 of Dancing With the Stars, Siwa's style has evolved. ",
      travel: "STYLE",
      date: " / November 24 AT 02:41 PM",
    },
    {
      id: 3,
      title: " Omicron May Make Megacap Tech Even More Expensive",
      context:
        "Megacap tech stocks are already pricey, but the omicron coronavirus strain may make them even more expensive given their defensive characteristics. Strategists say the group has the potential to outperform from here due to expectations for interest-rate hikes being pushed back and the focus turning to stocks that can prove shockproof. The tech heavy Nasdaq 100 Index, home to the likes of Apple Inc. and Microsoft Corp./ opened 1.5% higher on Monday, outshining the S&P 500, after Friday's brutal selloff.",
      travel: "TECH",
      date: " / TODAY AT 11:37 AM",
    },
  ];
  return (
    <>
      {latestStories.map(({ id, title, context, travel, date }) => (
        <div className={color.card} key={id}>
          <div className={color.content}>
            <Link to={"/posts/" + id}>
              <div className={color.title}>{title}</div>
            </Link>
            <p className={color.context}>{context}</p>
            <p className={color.date}>
              <span className={color.travel}>{travel}</span>
              {date}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
