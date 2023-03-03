import React from "react";

export default function TextInput({ inputType }) {
  return (
    <label className="w-full">
      <p>{inputType.replace(inputType[0], inputType[0].toUpperCase())}</p>
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
