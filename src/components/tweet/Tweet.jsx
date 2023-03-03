import React from "react";
import avatarUrl from "../../assets/images/avatar.png";

export default function Tweet() {
  return (
    <div className="py-2 px-4">
      <div className="flex gap-2">
        <div>
          <img src={avatarUrl} className="w-12"></img>
        </div>
        <div className="flex gap-2 flex-col">
          <div>
            <p className="flex gap-2">
              <span className="font-semibold">The Great Tanus</span>
              <span className="text-secondary-text font-light">@tanus</span>
              <span className="text-secondary-text font-light">10m</span>
            </p>
            <p>
              This universe is finite, its resources, finite… if life is left
              unchecked, life will cease to exist.
            </p>
          </div>
          <p>comment 3 heart 10</p>
        </div>
      </div>
    </div>
  );
}
