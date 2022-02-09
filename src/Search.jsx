import React from "react";
import "./search.css";
import { BsClouds } from "react-icons/bs";

export default function Search() {
  return (
    <div className="Weather">
      <div class="Search bar">Search bar and button</div>
      <br />
      <h1 className="city">Chicago</h1>
      <br />
      <div className="temperature">
        30 <span className="fahrenheit">°F</span>
      </div>
      <div className="icon">
        {" "}
        <BsClouds />{" "}
      </div>
      <h2>Mostly cloudy</h2>
      <ul className="col-11">
        <li>Wind: 13 km/h </li>
        <li>Humidity: 40%</li>
      </ul>
      <br />
      <div className="forecast">Week of forecast</div>
      <br />
      <div className="Date">Sunday, Feburary 9, 2022</div>
    </div>
  );
}
