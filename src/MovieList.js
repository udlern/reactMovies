import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const CONTAINER_SIZE = 6;

function MovieList({ moviesToDisplay }) {
  const [pageSize, setPageSize] = useState(CONTAINER_SIZE);
  //   const [startMovie, setStartMovie] = useState(0);

  useEffect(() => {
    setPageSize(CONTAINER_SIZE);
  }, [moviesToDisplay]);

  console.log("Rendering: ", moviesToDisplay);
  function handleLoadMoreClick() {
    setPageSize(pageSize + CONTAINER_SIZE);
    // console.log(moviesToDisplay.length - startMovie);
    // if (moviesToDisplay.length - startMovie > CONTAINER_SIZE) {
    //   setStartMovie(CONTAINER_SIZE + startMovie);
    // } else {
    //   setStartMovie(0);
    // }
  }

  //   const limitMovieRow = moviesToDisplay.slice(
  //     startMovie,
  //     CONTAINER_SIZE + startMovie
  //   );
  const movieElements = moviesToDisplay.slice(0, pageSize).map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {movieElements}
          </div>
          {pageSize > moviesToDisplay.length ? null : (
            <div className="col-md-12 text-center">
              <button
                type="button"
                className="btn btn-secondary load-more"
                onClick={handleLoadMoreClick}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MovieList;
