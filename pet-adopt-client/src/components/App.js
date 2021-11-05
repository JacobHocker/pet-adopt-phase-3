import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import NavBar from "./NavBar";
import ShelterContainer from "./shelter/ShelterContainer";
import SubmitContainer from "./submit/SubmitContainer";
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
          <Route exact path="/post-animal-for-adoption">
            <SubmitContainer />
          </Route>
        </Switch>
      </ShelterProvider>
    </div>
  );
}

export default App;
