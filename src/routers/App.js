import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import inicio from "../components/inicio";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/inicio" component={inicio} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
