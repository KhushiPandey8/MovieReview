import React from 'react';
import Video from './Video';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

function MainContainer() {
  const movie = useSelector((store) => store.movie.playing);

  if (!movie || movie.length === 0) return null; // Early return if no movie data

  const { Title, Type } = movie[0] || {}; // Use first movie as an example

  return (
    <>
      <div>
        <Video title={Title} type={Type} />
        <VideoBackground movieId={movie[0].imdbID} />
      </div>
    </>
  );
}

export default MainContainer;
