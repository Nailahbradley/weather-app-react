import "./App.css";
import React from "react";

import Search from "./Search";
import Header from "./Header";
import Date from "./DateAndDescription";
import Degrees from "./Degrees";
import HumidityandWind from "./HumidityandWind";
import Footer from "./Footer";

import "./container.css";

function App() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <Header />
            <Date />
            <Degrees />
            <HumidityandWind />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
