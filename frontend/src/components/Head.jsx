// Head.js
import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINT } from "../utils/constant";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";
import { setUser } from "../redux/slice";

function Head() {
  const user = useSelector((store) => store.user.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_ENDPOINT}/logout/`);
      dispatch(setUser(null));
      navigate("/");
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
      console.error(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black">
      <img
        className="w-56"
        src="https://www.pngall.com/wp-content/uploads/4/Netflix-Logo-HD.png"
        alt="netflix"
      />
      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdownCircle size="24px" color="white" />
          <h1 className="text-lg font-semibold text-white">{user.name}</h1>
          <div className="ml-4">
            <button onClick={logoutHandler} className="bg-red-700 text-white px-4 py-2 rounded-xl">
              Logout
            </button>
            <button onClick={toggleHandler} className="bg-red-700 text-white px-4 py-2 rounded-xl ml-2">
              {toggle ? "Home" : "Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Head;