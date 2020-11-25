import React from "react";
import "../style/style.css";
import fondo from "../images/fondooMenu.jpg";
import atras from "../images/atras.png";
import robotSigno from "../images/robotSigno.jpg";

class menu extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <li className="lista">
              <ul>
                <a href="menu">
                  <button type="button" class="btn btn-danger btnInstrucciones">
                    <h6 className="menu"> Instrucciones</h6>
                  </button>
                </a>
              </ul>
              <ul>
                <button type="button" class="btn btn-danger btnAyuda">
                  <h6 className="Nivel1"> Ayuda </h6>
                </button>
              </ul>
            </li>
            <a href="principal">
              <button className="btnAtras">
                <img
                  className="robot"
                  class="rounded mx-auto d-block atras"
                  src={atras}
                  alt="x"
                />
              </button>
            </a>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="robot"
              class="rounded mx-auto d-block robotSigno"
              src={robotSigno}
              alt="x"
            />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <li className="lista">
              <ul>
                <a href="menu">
                  <button type="button" class="btn btn-danger btnCreditos">
                    <h6 className="menu"> Créditos</h6>
                  </button>
                </a>
              </ul>
              <ul>
                <button type="button" class="btn btn-danger btnAcercaDe">
                  <h6 className="Nivel1"> Acerca De </h6>
                </button>
              </ul>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default menu;
