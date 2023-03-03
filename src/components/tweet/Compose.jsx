import React from "react";
import avatarUrl from "../../assets/images/avatar.png";

export default function Compose() {
  return (
    <div className="border border-background-2 py-2 px-4">
      <div className="flex gap-2">
        <div>
          <img src={avatarUrl} className="w-12"></img>
        </div>
        <div className="flex gap-2 flex-col w-full items-end">
          <textarea
            className="w-full outline-none"
            placeholder="Remember to think before you write"
          ></textarea>
          <button className="text-white bg-primary py-2 px-4 rounded-full hover:bg-primary-hover">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
