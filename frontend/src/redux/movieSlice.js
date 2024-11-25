import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    playing: [],
    popular: [],
    upcoming: [],
    topRated: [],
    toggle: false,
  },
  reducers: {
    getNowPlaying: (state, action) => {
      state.playing = action.payload;
    },
    getPopularMovie: (state, action) => {
      state.popular = action.payload;
    },
    getUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    getTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    }
  },
});

export const { getNowPlaying, getPopularMovie, getTopRated, getUpcoming, setToggle } = movieSlice.actions;
export default movieSlice.reducer;
