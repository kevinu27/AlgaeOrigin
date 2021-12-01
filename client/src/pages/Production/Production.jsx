import React from "react";
import "./Production.css";
import { Header } from "../../components/Header/Header";
import { StatsCard } from "../../components/StatsCard/StatsCard";

export function Production(props) {
  return (
    <>
      <div className="background">
        <Header
          titulo="Producción"
          select="Mes"
          boton1="Granjas de Comunidad"
        />
        <div className="location">
          <h3>Mi cosecha</h3>
        </div>

        <div className="verticalPanels">
          <div className="graphPanels">
            <div className="benefitsGraph">
              <p className="titleBenefitGraph">Beneficio Neto</p>
              <div className="graph"></div>
            </div>
            <div className="benefitsGraph">
              <p className="titleBenefitGraph">Precios Spirulina (€/kg)</p>
              <div className="graph"></div>
            </div>
          </div>
          <div className="stats"></div>
        </div>
      </div>
    </>
  );
}
