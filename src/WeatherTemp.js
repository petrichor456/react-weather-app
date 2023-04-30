import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function showFTemp(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCTemp(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fTemp() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === `celsius`) {
    return (
      <div className="WeatherTemp">
        <span className="temp">{props.celsius}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFTemp}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temp">{fTemp()}</span>
        <span className="unit">
          <a href="/" onClick={showCTemp}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
