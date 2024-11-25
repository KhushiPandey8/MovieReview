import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getPopularMovie } from "../redux/movieSlice";
import { POPULAR_API } from "../utils/constant";

const usePopularMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovie = async () => {
      try {
        const res = await axios.get(POPULAR_API);
        console.log(res.data.Search);
        dispatch(getPopularMovie(res.data.Search));
      } catch (error) {
        console.error('Error fetching popular movie data:', error);
      }
    };

    fetchPopularMovie(); // Call the async function
  }, [dispatch]); // Add dispatch to the dependency array
};

export default usePopularMovie;
