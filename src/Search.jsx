import React from "react";
import "./search.css";
import { BsClouds } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <div className="Weather">
      <div class="Search bar">
        {" "}
        <form autoComplete="off">
          <div className="row">
            <div className="col-10">
              {" "}
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoComplete="off"
                id="inputCity"
              />
            </div>
            <div className="col-2">
              <button>
                {" "}
                <span className="search-icon">
                  <BsSearch />
                </span>{" "}
              </button>
            </div>
          </div>
        </form>{" "}
      </div>
      <br />
      <br />
      <h1 className="city">Chicago</h1>
      <br />
      <div className="row">
        <div className="col-7">
          <div className="circle">
            <div></div>
          </div>
          <span className="temperature">
            30 <span className="fahrenheit">°F</span>
          </span>
        </div>
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
