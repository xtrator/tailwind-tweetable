import React from "react";

export default function Nav() {
  return (
    <div className="bg-white border border-background-2 min-w-12 pt-1 pl-4 pr-7 flex flex-col gap-1">
      <p className="text-2xl font-semibold text-primary">Tweetable</p>
      <p className="text-2xl font-semibold">Home</p>
      <p className="text-xl text-primary font-light cursor-pointer">Login</p>
      <p className="text-secondary-text hover:text-primary-hover font-light cursor-pointer">
        Continue with Google
      </p>
      <p className="text-secondary-text hover:text-primary-hover font-light cursor-pointer">
        Continue with Github
      </p>
    </div>
  );
}
