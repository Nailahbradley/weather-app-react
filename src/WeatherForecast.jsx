import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./weatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="forcast">
      <div className="row">
        <div className="col">
          <div className="border">
            <div className="forcastDay">WED</div>
            <div className="forcastIcon">
              {" "}
              <WeatherIcon code="010d" size={40} color="white" />{" "}
            </div>
            <div className="forcast-temperature">
              {" "}
              <span className="max">30°</span> |{" "}
              <span className="min"> 25°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
