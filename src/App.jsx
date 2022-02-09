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
      <footer>
        This project was coded by Nailah Bradley and is{" "}
        <a
          href="https://github.com/Nailahbradley/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-sourced on GitHub{" "}
        </a>
      </footer>
    </div>
  );
}
