import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-white min-w-12 pt-1 pl-4 pr-7 flex flex-col gap-1 items-start">
      <p className="text-2xl font-semibold text-primary">Tweetable</p>
      <Link className="text-2xl font-semibold" to="/">
        Home
      </Link>
      <Link className="text-2xl font-semibold" to="/profile">
        Profile
      </Link>
      <Link
        to="/login"
        className="text-xl text-primary font-light hover:text-primary-hover border border-primary rounded-full px-4 py-1"
      >
        Login
      </Link>
      <Link className="text-xl text-primary font-light hover:text-primary-hover border border-primary rounded-full px-4 py-1">
        Logout
      </Link>
      <p className="text-secondary-text hover:text-primary-hover font-light cursor-pointer">
        Continue with Google
      </p>
      <p className="text-secondary-text hover:text-primary-hover font-light cursor-pointer">
        Continue with Github
      </p>
    </div>
  );
}
