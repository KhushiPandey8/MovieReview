import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function Movie() {
  const movie = useSelector((store) => store.movie);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList title="Popular Movies" movies={movie.popular} />
        <MovieList title="Now Playing Movies" movies={movie.playing} />
        <MovieList title="Top Rated Movies" movies={movie.topRated} />
        <MovieList title="Upcoming Movies" movies={movie.upcoming} />
      </div>
    </div>
  );
}

export default Movie;
