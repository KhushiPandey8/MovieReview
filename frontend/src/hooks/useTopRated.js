import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTopRated } from "../redux/movieSlice";
import { POPULAR_API, TOP_API } from "../utils/constant";

const useTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const res = await axios.get(TOP_API);
        console.log(res.data.Search);
        dispatch(getTopRated(res.data.Search));
      } catch (error) {
        console.error('Error fetching popular movie data:', error);
      }
    };

    fetchTopRated(); // Call the async function
  }, [dispatch]); // Add dispatch to the dependency array
};

export default useTopRated;
