import React from "react";
import { IoIosPlay } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";

function Video({ title, type }) {
  return (
    <div className="absolute w-screen aspect-video text-white pt-[18%] p-12">
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-md mt-2 w-1/3">Type: {type}</p>
      <div className="flex mt-8">
        <button className="px-6 py-2 bg-white text-black rounded-sm hover:bg-opacity-80 flex items-center">
          <IoIosPlay size="24px" />
          <span className="ml-1">Play</span>
        </button>
        <button className="px-6 py-2 mx-2 bg-gray-500 opacity-50 text-black rounded-sm hover:bg-opacity-80 flex items-center">
          <IoInformationCircleOutline size="24px" />
          <span className="ml-1">Watch more</span>
        </button>
      </div>
    </div>
  );
}

export default Video;
