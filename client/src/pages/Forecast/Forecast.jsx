import React from "react";
import { Header } from "../../components/Header/Header";
import { WeatherCard } from "../../components/WeatherCard/WeatherCard";
import "./Forecast.css";

export function Forecast(props) {
  return (
    <>
      <div className="background">
        <Header
          titulo="Condiciones climáticas"
          select="4 Días"
          boton1="Comunidad de Granjas"
        />
        <div className="location">
          <h3>Malaga, España</h3>
        </div>
        <div className="weatherBackground">
          <div className="WeatherCardContainer">
            {" "}
            <WeatherCard
              day1="THU"
              temperature="28"
              humidity="47"
              radiation="6"
            />
            <WeatherCard
              day1="FRI"
              temperature="30"
              humidity="53"
              radiation="8"
            />
            <WeatherCard
              day1="SAT"
              temperature="32"
              humidity="60"
              radiation="7"
            />
            <WeatherCard
              day1="SUN"
              temperature="29"
              humidity="50"
              radiation="5"
            />
          </div>
        </div>
        <div className="temperatureGraph">
          <h4>Temperatura</h4>
          <div className="Graph"></div>
        </div>
        <div className="humidityGraph">
          <h4>Humedad</h4>
          <div className="Graph"></div>
        </div>
      </div>
    </>
  );
}
