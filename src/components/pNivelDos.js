import React from "react";
import "../style/style.css";
import fondo from "../images/fondoPNivelDos.jpg";
import robotNivelUno from "../images/robotNivelUno.png";
import casa from "../images/casa.png";

class pNivelDos extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <a href="principal">
              <button className="casaNivelUno">
                <img
                  className="casa"
                  class="rounded mx-auto d-block casaNivel"
                  src={casa}
                  alt="x"
                />
              </button>
            </a>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div id="textNivelUno">
              <h4 className="pNivelUno">Mira la imagen y escribe su nombre</h4>
            </div>
            <img
              className="robot"
              class="rounded mx-auto d-block robotNivelUno"
              src={robotNivelUno}
              alt="x"
            />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <a href="nivelDos">
              <button type="button" class="btn btn-primary btnSiguiente">
                Siguiente
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default pNivelDos;
