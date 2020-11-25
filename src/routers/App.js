import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import inicio from "../components/inicio";
import logins from "../components/logins";
import iniciarSesion from "../components/iniciarSesion";
import registro from "../components/registro";
import principal from "../components/principal";
import menu from "../components/menu";
import pNivelUno from "../components/pNivelUno";
import nivelUno from "../components/nivelUno";
import pNivelDos from "../components/pNivelDos";
import nivelDos from "../components/nivelDos";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/inicio" component={inicio} />
        <Route exact path="/logins" component={logins} />
        <Route exact path="/iniciarSesion" component={iniciarSesion} />
        <Route exact path="/registro" component={registro} />
        <Route exact path="/principal" component={principal} />
        <Route exact path="/menu" component={menu} />
        <Route exact path="/pNivelUno" component={pNivelUno} />
        <Route exact path="/nivelUno" component={nivelUno} />
        <Route exact path="/pNivelDos" component={pNivelDos} />
        <Route exact path="/nivelDos" component={nivelDos} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
