import React from "react";
import "../style/style.css";
import fondo from "../images/fondoLogins.jpg";
import BC from "../images/BC.jpg";
import DF from "../images/DF.png";
import GH from "../images/GH.png";
import JK from "../images/JK.png";
import robotpc from "../images/robotpc.png";
import MN from "../images/MN.png";
import ST from "../images/ST.png";

class logins extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="BC"
              class="rounded mx-auto d-block BC"
              src={BC}
              alt="x"
            />
            <img
              className="DF"
              class="rounded mx-auto d-block DF"
              src={DF}
              alt="x"
            />

            <img
              className="GH"
              class="rounded mx-auto d-block GH"
              src={GH}
              alt="x"
            />
            <img
              className="JK"
              class="rounded mx-auto d-block JK"
              src={JK}
              alt="x"
            />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <h1 className="tituloInicio">
              <strong>BIENVENIDO</strong>
            </h1>
            <li className="lista">
              <ul>
                <a href="iniciarSesion">
                  <button type="button" class="btn btn-success botonIniciar">
                    Iniciar sesión
                  </button>
                </a>
              </ul>
              <ul>
                <a href="registro">
                  <button type="button" class="btn btn-success botonRegistro">
                    Registrarse
                  </button>
                </a>
              </ul>
            </li>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="MN"
              class="rounded mx-auto d-block MN"
              src={MN}
              alt="x"
            />
            <img
              className="ST"
              class="rounded mx-auto d-block ST"
              src={ST}
              alt="x"
            />
            <img
              className="robotpc"
              class="rounded mx-auto d-block robotpc"
              src={robotpc}
              alt="x"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default logins;
