import React from "react";
import ColorPalette from "../components/page/ColorPalette";

export default function Components() {
  return (
    <>
      <h1 className="absolute text-primary">Components</h1>
      <div className="flex justify-center">
        <div className="flex">
          <ColorPalette />
        </div>
      </div>
    </>
  );
}
