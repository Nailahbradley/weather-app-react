import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import axios from "axios";
import "./search.css";
import { BsSearch } from "react-icons/bs";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Search(props) {
  const [city, setcity] = useState(props.citydefault);
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apikey = `cdfcb64b7f4fb64ab376e215b5000fa5`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setcity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="searchbar"></div>
        <div className="Search bar">
          {" "}
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                {" "}
                <input
                  autoComplete="off"
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  id="inputCity"
                  onChange={handleCityChange}
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
            <WeatherTemperature fahrenheit={weather.temperature} />
          </div>
        </div>
        <div className="icon">
          <WeatherIcon code={weather.icon} />
        </div>

        <h2 className="text-capitalize"> {weather.description} </h2>
        <ul className="col-11">
          <li>Wind: {Math.round(weather.wind)} km/h </li>
          <li>Humidity: {weather.humidity}%</li>
        </ul>
        <br />
        <div className="forecast">Week of forecast</div>
        <br />
        <div className="Date">
          {" "}
          <CurrentDate date={weather.date} />{" "}
        </div>
      </div>
    );
  } else {
    search();
    return "Loading.....";
  }
}
