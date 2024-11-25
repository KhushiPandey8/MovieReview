import {configureStore} from '@reduxjs/toolkit'
import useReducer  from './slice.js'
import movieSlice from './movieSlice.js';

const store = configureStore({
    reducer:{ 
          user:useReducer,
          movie:movieSlice
    }
});
export default store;