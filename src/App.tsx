import React from "react";
import { Header } from "./Header";
import { Description } from "./Description";
import { DogListContainer } from "./DogListContainer";

export const App: React.VFC = () => {
  return (
    <>
      <Header />
      <main>
        <Description />
        <DogListContainer />
      </main>
    </>
  );
};
