import React from "react";
import "./IncomesExpenses.css";
import { Header } from "../../components/Header/Header";
import { StatsCard } from "../../components/StatsCard/StatsCard";

export function IncomeExpenses(props) {
  return (
    <>
      <div className="background">
        <Header
          titulo="Ingresos y gastos"
          select="Mes"
          boton1="Granjas de Comunidad"
        />
        <div className="location">
          <h3>Actual y previsto</h3>
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
          <div className="stats">
            <StatsCard value="2%" title="Gastos Mensuales" />
            <StatsCard value="25%" title="Ingresos" />
            <StatsCard value="30%" title="Beneficio Neto" />
          </div>
        </div>
      </div>
    </>
  );
}
