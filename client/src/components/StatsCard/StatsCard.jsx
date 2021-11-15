import React from "react";
import "./StatsCard.css";

export function StatsCard(props) {
  return (
    <>
      <div className="statCard">
        <p className="statValue">{props.value}</p>

        <p className="statTitle"> {props.title} </p>
      </div>
    </>
  );
}
