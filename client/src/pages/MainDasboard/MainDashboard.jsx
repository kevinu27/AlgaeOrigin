import React from "react";
import "./MainDashboard.css";
import { Header } from "../../components/Header/Header";
import { StatsCard } from "../../components/StatsCard/StatsCard";

export function MainDashboard(props) {
  return (
    <>
      <div className="background">
        <Header
          titulo="Tablero"
          boton4="exportar"
          boton3="Notificaciones"
          boton2="Compartir"
          boton1="Granjas de Comunidad"
        />
      </div>

      <div>
        {" "}
        <p>hello</p>{" "}
      </div>
    </>
  );
}
