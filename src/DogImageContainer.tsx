import React from "react";
import Masonry from "react-masonry-css";

export const DogImageContainer = (props) => {
  const breakpoint = {
    default: 6,
    1900: 4,
    1350: 3,
    1048: 2,
    576: 1,
  };

  return (
    <div className="container mx-auto p-3">
      <Masonry
        breakpointCols={breakpoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.selectBreed.map((data, index) => (
          <div className="event-card">
            <img src={data} alt="" width={"300px"} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};
