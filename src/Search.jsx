import React from "react";
import "./search.css";

export default function SearchBar() {
  return (
    <div className="searchCity">
      <form id="searchCity">
        <input
          id="inputCity"
          type="text"
          className="search-form"
          placeholder="Type a city...."
          autoComplete="off"
        />{" "}
        <button className="searchButton">Search</button>{" "}
        <button id="currentButton">Current</button>
      </form>
    </div>
  );
}
