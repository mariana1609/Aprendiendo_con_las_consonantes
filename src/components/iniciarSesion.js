import React from "react";
import "../style/style.css";

class iniciarSesion extends React.Component {
  render() {
    return (
      <div className="container-fluid" class="fondoInicioS">
        <div class="bordes">
          <div class="bordesForm">
            <h1 class="tituloIniciar">
              <strong>Iniciar Sesión </strong>
            </h1>
            <form>
              <div className="form-group">
                <label class="letraInicio">
                  <strong> Correo eléctronico </strong>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputCorreoLogin"
                ></input>
              </div>
              <div className="form-group">
                <label class="letraInicio">
                  <strong> Contraseña </strong>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="InputContraseñaLogin"
                ></input>
              </div>
              <a href="principal">
                <button
                  type="button"
                  className="btn btn-primary botonComencemos"
                >
                  <strong>Comencemos</strong>
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default iniciarSesion;
