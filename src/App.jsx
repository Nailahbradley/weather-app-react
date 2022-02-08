import "./App.css";

import React from "react";

export default function Weather() {
  return (
    <div className="Weather App">
      <div className="container">
        <h1>Weather App</h1>
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
    </div>
  );
}
