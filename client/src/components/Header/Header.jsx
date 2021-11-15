import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
export function Header(props) {
  return (
    <>
      <div className="header">
        <div className="tituloHeader ">
          <h1 className="">{props.titulo}</h1>
        </div>

        <div className="headerButtonsContainer ">
          {props.select ? (
            <button>
              {" "}
              <select>
                <option>{props.select}</option>
              </select>{" "}
            </button>
          ) : (
            <div> </div>
          )}
          {props.boton4 ? <button>{props.boton4}</button> : <div> </div>}
          {props.boton3 ? <button>{props.boton3}</button> : <div> </div>}
          {props.boton2 ? <button>{props.boton2}</button> : <div> </div>}
          {props.boton1 ? <button>{props.boton1}</button> : <div> </div>}
        </div>
      </div>
    </>
  );
}
