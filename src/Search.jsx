import React, { useState } from "react";
import axios from "axios";
import "./search.css";
import { BsSearch } from "react-icons/bs";
import { BsCloudsFill } from "react-icons/bs";

export default function Search() {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      date: "Sunday, Feburary 9, 2022",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: <BsCloudsFill />,
    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="searchbar"></div>
        <div className="Search bar">
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
        <h1 className="city"> {weather.city} </h1>
        <br />
        <div className="row">
          <div className="col-7">
            <div className="circle">
              <div></div>
            </div>
            <span className="temperature">
              {Math.round(weather.temperature)}{" "}
              <span className="fahrenheit">°F</span>
            </span>
          </div>
        </div>
        <div className="icon">
          <img src={weather.icon} alt={weather.description}></img>
        </div>
        <h2 className="text-capitalize"> {weather.description} </h2>
        <ul className="col-11">
          <li>Wind: {Math.roundweather.wind} km/h </li>
          <li>Humidity: {weather.humidity}%</li>
        </ul>
        <br />
        <div className="forecast">Week of forecast</div>
        <br />
        <div className="Date"> {weather.date} </div>
      </div>
    );
  } else {
    const apikey = `cdfcb64b7f4fb64ab376e215b5000fa5`;
    let city = "Chicago";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading.....";
  }
}
