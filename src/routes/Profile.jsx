import React from "react";
import Feed from "../components/page/Feed";
import Nav from "../components/page/Nav";
import Tweets from "../components/tweet/Tweets";

export default function Profile() {
  return (
    <>
      <div className="absolute text-primary-hover m-auto">Profile</div>
      <div className="flex justify-center">
        <div className="flex">
          <Nav />
          <div className="bg-white border border-background-2 2xl:w-[800px] sm:w-[600px]">
            <h2 className="p-4 text-2xl font-semibold text-center border border-background-2">
              Profile
            </h2>
            <div>
              <p>Avatar Card</p>
            </div>
            <div>
              <p>Tweets and likes</p>
            </div>
            <Tweets />
          </div>
        </div>
      </div>
    </>
  );
}
