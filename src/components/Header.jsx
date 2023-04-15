import React from "react";

export const Header = () => {
  return (
    <div>
      <div>
        <div className=" mx-auto flex h-16 items-center bg-gradient-to-r from-purple-700 to-purple-400 text-xl text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
          <img className="h-10 p-2" src="/src/images/troll-face.png" alt="" />
          <div>Meme Generator </div>

          <div className="ml-auto mr-4 text-right text-xs text-black">
            React Course - Project 3
          </div>
        </div>
      </div>
    </div>
  );
};
