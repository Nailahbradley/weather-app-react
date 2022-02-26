import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let max = Math.round(props.data.temp.max);
    return `${max}`;
  }
  function minTemp() {
    let min = Math.round(props.data.temp.min);
    return `${min}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  return (
    <div>
      <div className="forcastDay"> {day()} </div>
      <div className="forcastIcon">
        {" "}
        <WeatherIcon
          code={props.data.weather[0].icon}
          size={40}
          color="white"
        />{" "}
      </div>
      <div className="forcast-temperature">
        {" "}
        <span className="max"> {maxTemp()}°</span>{" "}
        <span className="min">{minTemp()}°</span>
      </div>
    </div>
  );
}
