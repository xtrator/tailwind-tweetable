import React from "react";
import Tweet from "./Tweet";

export default function Tweets() {
  return (
    <div className="flex flex-col gap-0.5 ">
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}
