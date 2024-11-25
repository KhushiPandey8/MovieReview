// SearchMovie.js
import React from "react";

function SearchMovie() {
  return (
    <div className="flex justify-center pt-[10%] w-full">
      <form className="w-1/2">
        <div className="flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg">
          <input
            className="w-full outline-none rounded-md text-lg"
            type="text"
            placeholder="Search movies"
          />
          <button className="bg-red-800 text-white rounded-md px-4 py-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchMovie;