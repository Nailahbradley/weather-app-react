import "./App.css";
import React from "react";

import Search from "./Search";
import Header from "./Header";
import Date from "./Date";
import Degree from "./Degree";
import HumidityandWind from "./HumidityandWind";
import Footer from "./Footer";

import "./container.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <Header />
            <Date />
            <Degree />
            <HumidityandWind />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
