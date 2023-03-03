import React from "react";
import Nav from "../components/page/Nav";

export default function Home() {
  return (
    <>
      <div className="absolute text-primary-hover m-auto">Home</div>
      <div className="flex justify-center">
        <div className="flex gap-1">
          <Nav />
          <section className="">Feed</section>
        </div>
      </div>
    </>
  );
}
