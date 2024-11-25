import React, { useEffect } from 'react';
import Head from './Head';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import useNowplaying from '../hooks/useNowPlaying'; 
import usePopularMovie from '../hooks/usePopularMovies'; 
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import Movie from './Movie';
import SearchMovie from './SearchMovie';

function Browse() {
  const user = useSelector((store) => store.user.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const navigate = useNavigate();

  // Fetching movies from the hooks
  useNowplaying(); 
  usePopularMovie(); 
  useTopRated();
  useUpcoming();

  useEffect(() => {
    if (!user) {
      navigate("/");
    } 
  }, [user, navigate]);

  return (
    <>
      <Head />
      <div>
        {toggle ? <SearchMovie /> : (
          <>
            <MainContainer />
            <Movie />
          </>
        )}
      </div>
    </>
  );
}

export default Browse;
