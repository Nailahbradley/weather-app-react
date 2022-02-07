import React from "react";
import "./humidityandwind.css";

export default function HumidityAndWind() {
  return (
    <div className="row">
      <div className="col-6">
        <ul>
          <li>Humidity: 52%</li>
          <li>Wind: 3 m/h</li>
        </ul>
      </div>
    </div>
  );
}
