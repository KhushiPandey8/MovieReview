import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUpcoming } from "../redux/movieSlice";
import {  UPC_API } from "../utils/constant";

const useUpcoming = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const res = await axios.get(UPC_API);
        console.log(res.data.Search);
        dispatch(getUpcoming(res.data.Search));
      } catch (error) {
        console.error('Error fetching popular movie data:', error);
      }
    };

    fetchUpcoming(); // Call the async function
  }, [dispatch]); // Add dispatch to the dependency array
};

export default useUpcoming;
