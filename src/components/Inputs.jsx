import React, { useState } from "react";
import memesData from "../data.js";

export const Inputs = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function handleChange(event) {
    const { name, value } = event.target;
    return setMeme((prevMeme) => {
      return { ...prevMeme, [name]: value };
    });
  }

  function getMemeImages() {
    const randomMeme =
      allMemeImages.data.memes[
        Math.floor(Math.random() * allMemeImages.data.memes.length)
      ];
    setMeme((prevMeme) => ({ ...prevMeme, randomImg: randomMeme.url }));
  }
  return (
    <div className="px-4 pt-9">
      <div className="mb-5 mt-9 grid grid-cols-2 grid-rows-2 gap-4">
        <input
          type="text"
          className=" h-8 rounded border pl-4"
          placeholder="Top text"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          className="h-8 rounded border pl-4"
          placeholder="Bottom text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button
          onClick={getMemeImages}
          className="col-span-2 rounded bg-gradient-to-r from-purple-700 to-purple-400 font-bold text-white"
          onChange={handleChange}
          name="randomImg"
          value={meme.randomImg}
        >
          Get your Meme!
        </button>
      </div>
      <div className="relative">
        <img src={meme.randomImg} className="rounded" />
        <h2 className=" absolute left-1/2 top-0 mx-0 my-3.5  -translate-x-1/2 px-1 py-0 text-center text-2xl uppercase tracking-widest text-white">
          {meme.topText}
        </h2>
        <h2 className=" absolute bottom-0 left-1/2 mx-0 my-3.5  -translate-x-1/2 px-1 py-0 text-center text-2xl uppercase tracking-widest text-white">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
};
