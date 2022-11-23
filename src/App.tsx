import React, { useState } from "react";
import { Header } from "./Header";
import { Description } from "./Description";
import { DogImageContainer } from "./DogImageContainer";

export const App = () => {
  useState;
  const [selectBreed, setSelectBreed] = useState([]);

  return (
    <>
      <Header />
      <main>
        <Description setSelectBreed={setSelectBreed} />
        <DogImageContainer selectBreed={selectBreed} />
      </main>
    </>
  );
};
