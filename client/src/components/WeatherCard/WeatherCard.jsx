import React from "react";
import "./WeatherCard.css";

export function WeatherCard(props) {
  return (
    <>
      <div className="card">
        <div className="weekDay">
          {" "}
          <p> {props.day1}</p>
        </div>
        <div className="data">
          <div className=""> temperatura</div>{" "}
          <div className="cardData"> {props.temperature}º</div>
        </div>

        <div className="data">
          <div> Humedad</div>
          <div className="cardData">{props.humidity}%</div>{" "}
        </div>

        <div className="data">
          <div> Radiación Solar</div>
          <div className="cardData"> {props.radiation}</div>{" "}
        </div>
      </div>
    </>
  );
}
