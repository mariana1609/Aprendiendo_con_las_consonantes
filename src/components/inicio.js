import React from "react";
import "../style/style.css";
import fondo from "../images/fondoInicio.jpg";

class inicio extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4"> </div>
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default inicio;
