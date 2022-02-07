import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`Chicago current weather is ${Math.round(response.data.main.temp)}`);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=cdfcb64b7f4fb64ab376e215b5000fa5&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h1>Weather </h1>
    </div>
  );
}
