import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="px-8">
      <h1 className="text-3xl text-white mb-4">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar cursor-pointer">
        <div className="flex items-center space-x-4">
          {movies && movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
          ) : (
            <p className="text-white">No movies found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;