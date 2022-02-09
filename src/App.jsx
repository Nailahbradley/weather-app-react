import "./App.css";
import Search from "./Search";

import React from "react";

export default function Weather() {
  return (
    <div className="Weather App">
      <div className="container">
        <div className="weather-wrapper">
          <div className="weather-app">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
