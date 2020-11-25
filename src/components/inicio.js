import React from "react";
import "../style/style.css";
import fondo from "../images/fondoInicio.jpg";
import robot from "../images/robot.png";

class inicio extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <h2 className="saludo">Hola, ¿te gustaría aprender conmigo?</h2>
            <a href="logins">
              <button type="button" class="btn btn-warning botonInicioSi">
                Si
              </button>
            </a>

            <button type="button" class="btn btn-warning botonInicioNo">
              No
            </button>
            <img
              className="robot"
              class="rounded mx-auto d-block robotinicio"
              src={robot}
              alt="x"
            />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default inicio;
