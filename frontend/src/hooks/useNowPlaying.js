import { useEffect } from "react";
import axios from "axios";
import { getNowPlaying } from "../redux/movieSlice";
import { IMP_API } from "../utils/constant";
import { useDispatch } from "react-redux";

const useNowplaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await axios.get(IMP_API);
        dispatch(getNowPlaying(res.data.Search));
      } catch (error) {
        console.error('Error fetching now-playing movie data:', error);
      }
    };

    fetchNowPlaying();
  }, [dispatch]);
};

export default useNowplaying;
