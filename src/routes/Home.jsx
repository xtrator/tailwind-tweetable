import React from "react";
import Feed from "../components/page/Feed";
import Nav from "../components/page/Nav";

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex">
          <Nav />
          <div>
            <h2 className="p-4 bg-white text-2xl font-semibold text-center">
              Home
            </h2>
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
}
