import React from "react";
import "../styles/Widgets.css";

import { SearchRounded } from "@mui/icons-material";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchRounded className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1058376110"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="teammessi"
          options={{ height: 400 }}
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="neymarjr"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "React is Awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
