import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import db from "../firebase";

import "../styles/TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweetHandler = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Micky Zenebe",
      username: "mikizenebe",
      verified: true,
      text: tweetMessage,
      Image: tweetImage,
      avatar:
        "https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-1/302144353_3243717222622315_2983284121405587720_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bQwYWoLxK1MAX-PkFcV&_nc_ht=scontent.fadd1-1.fna&oh=00_AT93tj9KgI6vBCM-OBrSq7Ssr1sCKjVXFoe5zKoqaKAuSQ&oe=631492B4",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-1/302144353_3243717222622315_2983284121405587720_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bQwYWoLxK1MAX-PkFcV&_nc_ht=scontent.fadd1-1.fna&oh=00_AT93tj9KgI6vBCM-OBrSq7Ssr1sCKjVXFoe5zKoqaKAuSQ&oe=631492B4" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button
          onClick={sendTweetHandler}
          type="submit"
          className="tweetBox__tweetBtn"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
