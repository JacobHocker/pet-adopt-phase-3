import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import NavBar from "./NavBar";
import ShelterContainer from "./shelter/ShelterContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shelters">
          <ShelterContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
