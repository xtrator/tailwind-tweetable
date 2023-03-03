import React from "react";
import Compose from "../tweet/Compose";
import Tweet from "../tweet/Tweet";

export default function Feed() {
  return (
    <div className="bg-white border border-background-2 2xl:w-[800px] sm:w-[600px]">
      <h2 className="p-4 text-2xl font-semibold text-center border border-background-2">
        Home
      </h2>
      <Compose />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}
