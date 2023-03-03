import React from "react";
import Feed from "../components/page/Feed";
import Nav from "../components/page/Nav";

export default function Home() {
  return (
    <>
      <div className="absolute text-primary-hover m-auto">Home</div>
      <div className="flex justify-center">
        <div className="flex">
          <Nav />
          <Feed />
        </div>
      </div>
    </>
  );
}
