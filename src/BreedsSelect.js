import React from "react";
import { DogImage } from "./DogImage";

export const BreedsSelect = (props) => {
  const dogSelectListGet = (select) => {
    fetch(`https://dog.ceo/api/breed/${select}/images/random/10`)
      .then((res) => res.json())
      .then((data) => {
        props.setSelectedBreedList(data.message);
      });
  };
  return (
    <>
      <div className="form-control">
        <div className="input-group">
          <select
            value={props.selectedBreed}
            onChange={(e) => props.setSelectedBreed(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            {props.breeds.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
          <button
            onClick={() => dogSelectListGet(props.selectedBreed)}
            className="btn btn-primary"
          >
            表示
          </button>
        </div>
      </div>
      {props.selectedBreedList.map((data, index) => (
        <DogImage url={data} />
      ))}
    </>
  );
};
