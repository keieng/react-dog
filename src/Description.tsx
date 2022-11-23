import React, { useEffect } from "react";
import { useState } from "react";
import { BreedsSelect } from "./BreedsSelect";

export const Description = (props) => {
  const [dogUrl, setDogUrl] = useState("");
  // "https://images.dog.ceo/breeds/puggle/IMG_074816.jpg"
  const dogApi = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogUrl(data.message);
      });
  };

  useEffect(dogApi, []);

  return (
    <>
      <div
        className="hero min-h-16"
        style={{ backgroundImage: `url("${dogUrl}")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">React-Dog</h1>
            <p className="mb-5">DogAPIを使用して犬の画像を表示するサイト</p>
            <BreedsSelect setSelectBreed={props.setSelectBreed} />
          </div>
        </div>
      </div>
    </>
  );
};
