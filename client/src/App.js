import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Farm } from "./components/Farm/Farm";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import { Forecast } from "./pages/Forecast/Forecast";
import { IncomeExpenses } from "./pages/IncomesExpenses/IncomesExpenses";
import { Production } from "./pages/Production/Production";
import { MainDashboard } from "./pages/MainDasboard/MainDashboard";

import React from "react";

import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Nav />
      </div>
      <div className="contenido">
        <Switch>
          <Route exact path="/" component={MainDashboard} />
          <Route path="/CondicionesClimaticas" component={Forecast} />
          <Route exact path="/Granjas" component={Farm} />
          <Route exact path="/ingresosGastos" component={IncomeExpenses} />
          <Route exact path="/produccion" component={Production} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
