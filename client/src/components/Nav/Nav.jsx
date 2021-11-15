import "./Nav.css";
import React from "react";
import Logo from "./logo.png";
import { Link } from "react-router-dom";

export function Nav(props) {
  return (
    <>
      <div className="logo mt-4 mb-5">
        <img src={Logo} alt="BigCo Inc. logo" />
      </div>
      <div className="menuButtons">
        {/* <button>
          {" "}
          <p className="navFont"> Tablero</p>{" "}
        </button> */}
        <button>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <p className="navFont"> Tablero</p>{" "}
          </Link>
        </button>

        <select>
          <option value="piscina1">Mi granja</option>
          <option value="piscina1">piscina 1</option>
          <option value="piscina2">piscina 2</option>
          <option value="piscina3">piscina 3</option>
        </select>
        <button>
          <Link to="/CondicionesClimaticas" style={{ textDecoration: "none" }}>
            {" "}
            <p className="navFont"> Condiciones climáticas</p>{" "}
          </Link>
        </button>
        <button>
          {" "}
          <p className="navFont"> Producción</p>{" "}
        </button>
        <button>
          <Link to="/ingresosGastos" style={{ textDecoration: "none" }}>
            {" "}
            <p className="navFont"> Ingresos y gastos</p>{" "}
          </Link>
        </button>
      </div>
    </>
  );
}
