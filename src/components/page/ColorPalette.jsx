import React from "react";

export default function ColorPalette() {
  return (
    <div>
      <h2>Color Palette</h2>
      <p className="bg-primary">Primary</p>
      <p className="bg-primary-hover">Hover</p>
      <p className="bg-primary-disable">Disable</p>
      <p className="bg-primary-text">Primary Text</p>
      <p className="bg-secondary-text">Secondary Text</p>
      <p className="bg-error">Error</p>
      <p className="bg-background">Background</p>
      <p className="bg-background-2">Background 2</p>
    </div>
  );
}
