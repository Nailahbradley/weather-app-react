import React from "react";
import "./footer.css";

export default function degrees() {
  return (
    <footer>
      {" "}
      <span className="credit">
        <a
          href="https://github.com/Nailahbradley/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code{" "}
        </a>{" "}
      </span>{" "}
      by Nailah Bradley
    </footer>
  );
}
