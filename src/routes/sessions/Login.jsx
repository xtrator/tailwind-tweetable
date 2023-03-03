import React from "react";
import Nav from "../../components/page/Nav";
import { Link } from "react-router-dom";
import TextInput from "../../components/form/TextInput";

export default function Login() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-1">
          <Nav />
          <div className="2xl:w-[800px] sm:w-[600px]">
            <div className="flex flex-col gap-1">
              <h2 className="p-4 text-2xl font-semibold text-center bg-white">
                Login
              </h2>
              <div className="flex justify-center p-2 bg-white">
                <form className="flex flex-col items-center w-[300px] gap-2">
                  <TextInput inputType={"email"}>Email</TextInput>
                  <TextInput inputType={"password"}>Password</TextInput>
                  <div className="flex flex-col">
                    <button className="bg-primary text-white border border-primary rounded-full px-4 py-2">
                      Submit
                    </button>
                    <Link className="text-primary  px-4 py-2">Sign up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
