import React from "react";
/*import { Route, Switch } from 'react-router-dom';*/
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
        <Home />
        <ShelterContainer />
        <SubmitContainer />
      </ShelterProvider>
    </div>
  );
}

export default App;
