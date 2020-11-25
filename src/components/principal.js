import React from "react";
import "../style/style.css";
import fondo from "../images/fondoPrincipal.jpg";
import robot from "../images/robotPrincipal.png";
import casa from "../images/casa.png";

class principal extends React.Component {
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
                  <button type="button" class="btn btn-success btnMenu">
                    <h6 className="menu"> Menú</h6>
                  </button>
                </a>
              </ul>
              <ul>
                <a href="pNivelUno">
                  <button type="button" class="btn btn-danger btnNivel1">
                    <h6 className="Nivel1"> Jugar</h6>
                  </button>
                </a>
              </ul>
            </li>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="casa"
              class="rounded mx-auto d-block casa"
              src={casa}
              alt="x"
            />
            <img
              className="robot"
              class="rounded mx-auto d-block robotPrincipal"
              src={robot}
              alt="x"
            />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <li className="lista">
              <ul>
                <button type="button" class="btn btn-primary btnLogros">
                  <h6 className="Logros"> Logros </h6>
                </button>
              </ul>
              <ul>
                <button type="button" class="btn btn-warning btnPremios">
                  <h6 className="premios"> Premios </h6>
                </button>
              </ul>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default principal;
