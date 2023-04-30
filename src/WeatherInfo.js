import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedSunrise from "./FormattedSunrise";
import FormattedSunset from "./FormattedSunset";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <div className="row">
          <div className="col-5">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
          <div className="col-7 overview-details">
            <div className="row">
              <WeatherIcon code={props.data.icon} size={64} />
              <WeatherTemp celsius={props.data.temp} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center weather-boxes">
        <div className="row">
          <div className="col weather-box">
            <div className="box-icon">
              <i className="fa-solid fa-droplet"></i>
            </div>
            <h5>Humidity</h5>
            <span>{props.data.humidity}</span>%
          </div>
          <div className="col weather-box">
            <div className="box-icon">
              <i className="fa-solid fa-wind"></i>
            </div>
            <h5>Wind</h5>
            <span>{props.data.wind}</span> km/h
          </div>
        </div>
        <div className="row">
          <div className="col weather-box">
            <div className="box-icon">
              <i className="fa-solid fa-eye"></i>
            </div>
            <h5>Visibility</h5>
            <span id="visibility">{props.data.visibility}</span>km
          </div>
          <div className="col weather-box">
            <div className="row">
              <div className="col-6">
                <div className="box-icon">
                  <i className="fa-solid fa-sun"></i>
                </div>
                <h5>Sunrise</h5>
                <FormattedSunrise time={props.data.sunrise} />
              </div>
              <div className="col-6">
                <div className="box-icon">
                  <i className="fa-solid fa-moon"></i>
                </div>
                <h5>Sunset</h5>
                <FormattedSunset time={props.data.sunset} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
