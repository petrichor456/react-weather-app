import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App container-fluid">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Weather defaultCity="Edinburgh" />
        </div>
        <footer>
          This project was coded by Mhairi Lyell and is open-sourced on{" "}
          <a
            href="https://github.com/petrichor456/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
