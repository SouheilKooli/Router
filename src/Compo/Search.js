import React from "react";
import Rating from "./Rating";

const SearchMovie = ({ setMovieSearch, rateMovie, setRateMovie }) => {
  return (
    <div className="search">
      <div className="searchName">
        <input type="text"
          className="searchInput"
          placeholder="Search.."
          onChange={(e) => setMovieSearch(e.target.value)}
        ></input>
      </div>
      <div className="searchRate">
        <h5> Search by Rate </h5>
        <Rating rateMovie={rateMovie} setRateMovie={setRateMovie} />
      </div>
    </div>
  );
};

export default SearchMovie
