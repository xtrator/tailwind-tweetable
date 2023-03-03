import React from "react";
import Nav from "../components/page/Nav";
import TextInput from "../components/form/TextInput";
import { Link } from "react-router-dom";

export default function EditProfile() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-1">
          <Nav />
          <div className="2xl:w-[800px] sm:w-[600px]">
            <div className="flex flex-col gap-1">
              <h2 className="p-4 text-2xl font-semibold text-center bg-white">
                Edit Profile
              </h2>
              <div className="flex justify-center p-2 bg-white">
                <form className="flex flex-col items-center w-[300px] gap-2">
                  <TextInput inputType={"email"}>Email</TextInput>
                  <TextInput inputType={"username"}>Username</TextInput>
                  <TextInput inputType={"name"}>Name</TextInput>
                  <label>
                    Avatar
                    <input
                      type="file"
                      name="avatar"
                      accept="image/*,.pdf"
                      className="border border-secondary-text w-full p-[10px] rounded-lg"
                    />
                  </label>
                  <TextInput inputType={"new-password"}>
                    New Password{" "}
                    <span className="text-xs text-secondary-text">
                      (leave blank if you don't want to change your password)
                    </span>
                  </TextInput>
                  <TextInput inputType={"current-password"}>
                    Current Password{" "}
                    <span className="text-xs text-secondary-text">
                      (enter to confirm your changes)
                    </span>
                  </TextInput>
                  <button className="bg-primary text-white border border-primary rounded-full px-4 py-2">
                    Submit
                  </button>
                  <Link className="text-primary  px-4 py-2">
                    Cancel Account
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
