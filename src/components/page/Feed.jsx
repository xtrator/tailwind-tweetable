import React from "react";
import Compose from "../tweet/Compose";
import Tweet from "../tweet/Tweet";
import Tweets from "../tweet/Tweets";

export default function Feed() {
  return (
    <div className="2xl:w-[800px] sm:w-[600px] flex flex-col gap-1">
      <Compose />
      <Tweets />
    </div>
  );
}
