import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day">Monday</div>
          <WeatherIcon code="02d" size={36} />
          <div className="WeatherForecast-temperatures mx-auto">
            <span className="WeatherForecast-temperature-max mx-1">11°</span>
            <span className="WeatherForecast-temperature-min mx-1">5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
