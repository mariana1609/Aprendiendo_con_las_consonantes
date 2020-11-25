import React from "react";
import "../style/style.css";
import fondo from "../images/fondoNivelUno.jpg";
import sumo from "../images/sumo.png";
import ajo from "../images/ajo.png";
import robotSigno from "../images/robotSigno.jpg";
import arroyo from "../images/arroyo.png";
import vello from "../images/Vello.jpg";
import flechaAdelante from "../images/flechaAdelante.png";
class nivelUno extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <li className="lista">
              <lu>
                <img
                  className="sumo"
                  class="rounded mx-auto d-block sumo"
                  src={sumo}
                  alt="x"
                />

                <button type="button" class="btn btn-dark  btnNivelUno">
                  Sumo
                </button>
                <button type="button" class="btn btn-dark  btnNivelUno">
                  Zumo
                </button>
                <img
                  className="arroyo"
                  class="rounded mx-auto d-block arroyo"
                  src={arroyo}
                  alt="x"
                />
                <button type="button" class="btn btn-success  btnNivelUno">
                  Arrollo
                </button>
                <button type="button" class="btn btn-success  btnNivelUno">
                  Arroyo
                </button>
              </lu>
            </li>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="robotSignoN"
              class="rounded mx-auto d-block robotSignoN"
              src={robotSigno}
              alt="x"
            />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <li className="lista">
              <lu>
                <img
                  className="ajo"
                  class="rounded mx-auto d-block ajo"
                  src={ajo}
                  alt="x"
                />
                <button type="button" class="btn btn-danger btnNivelUno">
                  Ajito
                </button>
                <button type="button" class="btn btn-danger btnNivelUno">
                  Ajo
                </button>
                <img
                  className="vello"
                  class="rounded mx-auto d-block vello"
                  src={vello}
                  alt="x"
                />
                <button type="button" class="btn btn-warning btnNivelUno">
                  Vello
                </button>
                <button type="button" class="btn btn-warning btnNivelUno">
                  Bello
                </button>
              </lu>
            </li>
            <a href="pNivelDos">
              <button className="flechaAdelante">
                <img
                  class="rounded mx-auto d-block flechaAdelante"
                  src={flechaAdelante}
                  alt="x"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default nivelUno;
