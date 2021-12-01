import "./Nav.css";
import React, { useState } from "react";
import Logo from "./logo.png";
import { Link } from "react-router-dom";

export function Nav(props) {
  const [SelectedMenu, setSelectedMenu] = useState("tablero");

  return (
    <>
      <div className="logo mt-4 mb-5">
        <img src={Logo} alt="BigCo Inc. logo" />
      </div>

      <div className="menuButtons">
        <div
          className={
            SelectedMenu === "tablero" ? "buttonSelected" : "buttonNoSelected"
          }
        >
          <button onClick={() => setSelectedMenu("tablero")}>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              <p
                className={
                  SelectedMenu === "tablero" ? "navFontSelected" : "navFont"
                }
              >
                {" "}
                Tablero
              </p>{" "}
            </Link>
          </button>
        </div>

        {/* <div className="selectDiv">
          <select className="MenuSelectedSelect">
            <option value="piscina1">Mi granja</option>
            <option value="piscina1">piscina 1</option>
            <option value="piscina2">piscina 2</option>
            <option value="piscina3">piscina 3</option>
          </select>
        </div> */}

        <div
          className={
            SelectedMenu === "Granjas" ? "buttonSelected" : "buttonNoSelected"
          }
        >
          <button onClick={() => setSelectedMenu("Granjas")}>
            <Link to="/Granjas" style={{ textDecoration: "none" }}>
              {" "}
              <p
                className={
                  SelectedMenu === "Granjas" ? "navFontSelected" : "navFont"
                }
              >
                {" "}
                Granjas
              </p>{" "}
            </Link>
          </button>
        </div>

        <div
          className={
            SelectedMenu === "CondicionesClimaticas"
              ? "buttonSelected"
              : "buttonNoSelected"
          }
        >
          <button onClick={() => setSelectedMenu("CondicionesClimaticas")}>
            <Link to="/produccion" style={{ textDecoration: "none" }}>
              <p
                className={
                  SelectedMenu === "CondicionesClimaticas"
                    ? "navFontSelected"
                    : "navFont"
                }
              >
                {" "}
                Condiciones Climaticas
              </p>
            </Link>
          </button>{" "}
        </div>

        <div
          className={
            SelectedMenu === "produccion"
              ? "buttonSelected"
              : "buttonNoSelected"
          }
        >
          <button onClick={() => setSelectedMenu("produccion")}>
            <Link to="/produccion" style={{ textDecoration: "none" }}>
              <p
                className={
                  SelectedMenu === "produccion" ? "navFontSelected" : "navFont"
                }
              >
                {" "}
                Producción
              </p>
            </Link>
          </button>{" "}
        </div>

        <div
          className={
            SelectedMenu === "ingresosGastos"
              ? "buttonSelected"
              : "buttonNoSelected"
          }
        >
          <button onClick={() => setSelectedMenu("ingresosGastos")}>
            <Link to="/ingresosGastos" style={{ textDecoration: "none" }}>
              {" "}
              <p
                className={
                  SelectedMenu === "ingresosGastos"
                    ? "navFontSelected"
                    : "navFont"
                }
              >
                {" "}
                Ingresos y gastos
              </p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
