import React from "react";

export default function TextInput({ inputType, children }) {
  return (
    <label className="w-full">
      <p>{children}</p>
      <input
        className="border border-secondary-text rounded-lg outline-none py-2 px-4 focus:border-primary focus:shadow-sm focus:shadow-primary w-full"
        type="text"
        name={inputType}
        id=""
        placeholder={`Your ${inputType}`}
      />
    </label>
  );
}
