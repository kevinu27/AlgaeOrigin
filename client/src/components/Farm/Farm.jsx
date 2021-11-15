import "./Farm.css";
import { Header } from "../Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import React, { useState } from "react";

export function Farm(props) {
  const [temp, setTemp] = useState(15);
  const [tempMapped, setTempMapped] = useState(15);

  function handleClick() {
    console.log("clickado");
    Axios.get("http://localhost:5000/api/get").then((response) => {
      console.log(response.data[0].temperature);
      const tempValue = response.data[0].temperature;
      setTemp(tempValue);
      const mapping = (temp * 180) / 60 - 90;
      setTempMapped(mapping);
      console.log("mapping", mapping);
    });
  }

  return (
    <>
      <Header
        titulo="Mi granja"
        // select="4 Días"
        boton4="Exportar"
        boton3="Notificaciones"
        boton2="Compartir"
        boton1="Comunidad de Granjas"
      />

      <div className="farmBackground ">
        <div className="pools">
          <div className="poolsHeader">
            <h3 className="titlePools">Todas tus piscinas</h3>{" "}
            <h1 className="plus">+</h1>
          </div>

          {/* esto será un componente */}
          <div className="farmPanel mt-3">
            <p className="farmName"> Piscina 1</p>
            <div className="farmStatus ">
              <div className="beaconStatus mr-3"></div>
              <p>Estado</p>
            </div>
            <div className="top">
              <div className="progressBarContainer mt-4 mb-4">
                <div className="progressBar"></div>
              </div>
              <div className="percentage mt-3 ">
                {" "}
                <p>40%</p>{" "}
              </div>
            </div>{" "}
            <button className="mb-3 " onClick={() => handleClick()}>
              Actualizar
            </button>
          </div>
        </div>

        {/* aqui acabará este componente */}

        <div className="variables mt-4 pl-5 ">
          <h3 className="variablesTitle">Variables</h3>
          <div className="panelVariables mt-5">
            <div className="titles">
              <p className="temperatureTitle"> Temperatura: {temp} ºC</p>
              <p className="temperatureTitle"> Turbidez: {temp} ppm</p>
            </div>
            {/* <div className="gaugeMe ml-5"> */}
            {/* <div class="container2">
                <div class="gauge">
                  <div
                    class="needle"
                    style={{ transform: `rotate(${tempMapped}deg)` }}
                  ></div>
                  <div class="circle"></div>
                  <p className="gaugeTemperatureUno">0</p>
                  <p className="gaugeTemperatureDos">20</p>
                  <p className="gaugeTemperatureTres">40</p>
                  <p className="gaugeTemperatureCuatro">60</p>
                </div>
                <div className="blanco"></div>
              </div>{" "} */}

            <div className="rowMeter">
              <div>
                <div id="logo">
                  {" "}
                  <span class="speedometer"></span>
                  <span
                    class="needle"
                    style={{
                      transform: `rotate($
                      {tempMapped}deg)`,
                    }}
                  ></span>
                  <span className="blanco2"></span>
                </div>
              </div>

              <div>
                <div id="logo">
                  {" "}
                  <span class="speedometer"></span>
                  <span class="needle"></span>
                  <span className="blanco2"></span>
                </div>
              </div>
            </div>
            {/* </div>{" "} */}
          </div>{" "}
        </div>
      </div>
    </>
  );
}
