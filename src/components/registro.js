import React from "react";
import "../style/style.css";
import encender from "../images/encender.png";

class registro extends React.Component {
  render() {
    return (
      <div className="container-fluid" class="fondoInicioS">
        <div class="bordes">
          <div class="bordesForm">
            <h1 class="tituloIniciar">
              <strong> Registro </strong>
            </h1>
            <form>
              <div className="form-group">
                <label class="letraInicio">
                  <strong> Usuario </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="InputUsuarioRegistro"
                ></input>
              </div>
              <div className="form-group">
                <label class="letraInicio">
                  <strong> Contraseña </strong>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="InputContraseñaRegistro"
                ></input>
                <h6 className="noCerrar">No cerrar sesión</h6>
                <button className="btnEncender">
                  <img
                    class="rounded mx-auto d-block btnEncender "
                    src={encender}
                    alt="x"
                  />
                </button>
              </div>
              <a href="principal">
                <button
                  type="button"
                  className="btn btn-primary botonComencemos"
                >
                  <strong>Siguiente</strong>
                </button>
              </a>
            </form>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default registro;
