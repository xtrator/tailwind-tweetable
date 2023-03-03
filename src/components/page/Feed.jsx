import React from "react";
import Compose from "../tweet/Compose";
import Tweet from "../tweet/Tweet";
import Tweets from "../tweet/Tweets";

export default function Feed() {
  return (
    <div className="bg-white 2xl:w-[800px] sm:w-[600px]">
      <Compose />
      <Tweets />
    </div>
  );
}
