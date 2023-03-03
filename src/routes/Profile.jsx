import React from "react";
import Nav from "../components/page/Nav";
import Tweets from "../components/tweet/Tweets";
import avatarUrl from "../assets/images/avatar.png";

export default function Profile() {
  return (
    <>
      <div className="absolute text-primary-hover m-auto">Profile</div>
      <div className="flex justify-center">
        <div className="flex">
          <Nav />
          <div className="bg-white border border-background-2 2xl:w-[800px] sm:w-[600px]">
            <div>
              <h2 className="p-4 text-2xl font-semibold text-center border border-background-2">
                Profile
              </h2>
            </div>
            <div className="flex flex-col items-center border-1 border-background p-2">
              <img className="w-24" src={avatarUrl} />
              <p className="text-xl font-light">Diego Torres</p>
              <p className="text-sm text-secondary-text">@diego</p>
              <p className="text-base text-secondary-text">
                CAL Joined on January 13, 2020
              </p>
              <button className=" font-light hover:text-primary-hover text-primary hover:border-primary-hover border-primary border rounded-full py-1 px-4 mt-2">
                Edit Profile
              </button>
              <div className="flex w-full border-px border-background">
                <p className="text-xl font-semi hover:text-primary w-full text-center">
                  Tweets
                </p>
                <p className="text-xl font-semi hover:text-primary w-full text-center">
                  Likes
                </p>
              </div>
            </div>

            <Tweets />
          </div>
        </div>
      </div>
    </>
  );
}
