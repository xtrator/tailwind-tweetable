import React from "react";
import Nav from "../../components/page/Nav";

export default function Login() {
  return (
    <>
      <>
        <div className="flex justify-center">
          <div className="flex">
            <Nav />
            <div className="bg-white 2xl:w-[800px] sm:w-[600px]">
              <div>
                <h2 className="p-4 text-2xl font-semibold text-center">
                  Login
                </h2>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
