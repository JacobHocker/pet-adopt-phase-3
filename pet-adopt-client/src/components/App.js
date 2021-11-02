import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import NavBar from "./NavBar";
import ShelterContainer from "./shelter/ShelterContainer";
import {  ShelterProvider } from "./shelter/ShelterProvider";

function App() {
  return (
    <div className="App">
      <ShelterProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shelters">
            <ShelterContainer />
          </Route>
        </Switch>
      </ShelterProvider>
    </div>
  );
}

export default App;
