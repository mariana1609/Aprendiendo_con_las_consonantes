import React from "react";
import "../style/style.css";
import fondo from "../images/fondoNivelDos.jpg";
import pasto from "../images/pasto.png";
import ola from "../images/ola.png";
import botar from "../images/botar.png";
import hirviendo from "../images/hirviendo.png";
import gesto from "../images/gesto.png";
import urna from "../images/urna.png";
import flechaAdelante from "../images/flechaAdelante.png";

class nivelDos extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="pasto"
              class="rounded mx-auto d-block pasto"
              src={pasto}
              alt="x"
            />
            <input className="pastoInput"></input>
            <img
              className="ola"
              class="rounded mx-auto d-block ola"
              src={ola}
              alt="x"
            />
            <input className="pastoInput"></input>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="botar"
              class="rounded mx-auto d-block botar"
              src={botar}
              alt="x"
            />
            <input className="pastoInput"></input>
            <img
              className="hirviendo"
              class="rounded mx-auto d-block hirviendo"
              src={hirviendo}
              alt="x"
            />
            <input className="pastoInput"></input>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="gesto"
              class="rounded mx-auto d-block gesto"
              src={gesto}
              alt="x"
            />
            <input className="pastoInput"></input>
            <img
              className="urna"
              class="rounded mx-auto d-block urna"
              src={urna}
              alt="x"
            />
            <input className="pastoInput"></input>
            <a href="principal">
              <button className="flechaAdelanteND">
                <img
                  class="rounded mx-auto d-block flechaAdelanteND"
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
export default nivelDos;
