import React from "react";
import NavBar from "./NavBar";
import ShelterContainer from "./ShelterContainer";

function Home() {
    return(
        <div className='home'>
            <NavBar />
            <img className='friend-logo' src='./images/ffflogo1.png' alt='logo' />
            <h1>Welcome to the one stop show for adopting furry best friends</h1>
            <ShelterContainer />
        </div>
    )
}

export default Home;

    