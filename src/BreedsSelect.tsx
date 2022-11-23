import React from "react";
import { useState, useEffect } from "react";

export const BreedsSelect = (props) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        setBreeds(Object.keys(data.message));
        setSelectedBreed(Object.keys(data.message)[0]);
      });
  }, []);

  const onGetDogImages = (select) => {
    fetch(`https://dog.ceo/api/breed/${select}/images/random/30`)
      .then((res) => res.json())
      .then((data) => {
        props.setSelectBreed(data.message);
      });
  };

  return (
    <>
      <div className="form-control">
        <div className="input-group">
          <select
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            className="select select-bordered w-full max-w-xs text-gray-700"
          >
            {breeds.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
          <button
            onClick={() => onGetDogImages(selectedBreed)}
            className="btn btn-primary"
          >
            表示
          </button>
        </div>
      </div>
    </>
  );
};
