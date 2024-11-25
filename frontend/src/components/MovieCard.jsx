import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="w-48 pr-2 h-50">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
      <h2 className="text-white text-sm mt-2">{movie.Title}</h2>
    </div>
  );
}

export default MovieCard;
