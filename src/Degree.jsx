import React from "react";
import "./degree.css";

export default function degrees() {
  return (
    <div className="Degrees">
      <div className="row">
        <div className="col-6">
          <span>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="prop"
            />
          </span>
          <span className="headerDegree">45</span>
          <span className="farenheit">°F</span>
        </div>
      </div>
    </div>
  );
}
