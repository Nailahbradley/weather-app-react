import React, { useState, useEffect } from "react";

import "./weatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setloaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setloaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forcast">
        <div className="row">
          <div className="col">
            <div className="border">
              <WeatherForecastDay data={forecast[0]} />
            </div>
          </div>
          <div className="col">
            <div className="border">
              <WeatherForecastDay data={forecast[1]} />
            </div>
          </div>
          <div className="col">
            <div className="border">
              <WeatherForecastDay data={forecast[2]} />
            </div>
          </div>
          <div className="col">
            <div className="border">
              <WeatherForecastDay data={forecast[3]} />
            </div>
          </div>
          <div className="col">
            <div className="border">
              <WeatherForecastDay data={forecast[4]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=cdfcb64b7f4fb64ab376e215b5000fa5&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
