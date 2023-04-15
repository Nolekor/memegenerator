import React, { useState } from "react";
import memesData from "../data.js";

export const Inputs = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImages() {
    const randomMeme =
      allMemeImages.data.memes[
        Math.floor(Math.random() * allMemeImages.data.memes.length)
      ];
    setMeme((prevMeme) => ({ ...prevMeme, randomImg: randomMeme.url }));
  }
  return (
    <div className="px-4 pt-9">
      <div className="mt-9 grid grid-cols-2 grid-rows-2 gap-4">
        <input
          type="text"
          className=" h-8 rounded border pl-4"
          placeholder="Top text"
        />
        <input
          type="text"
          className="h-8 rounded border pl-4"
          placeholder="Bottom text"
        />
        <button
          onClick={getMemeImages}
          className="col-span-2 rounded bg-gradient-to-r from-purple-700 to-purple-400 font-bold text-white"
        >
          Get your Meme!
        </button>
      </div>
      <img src={meme.randomImg} className="w-full pt-9" />
    </div>
  );
};
