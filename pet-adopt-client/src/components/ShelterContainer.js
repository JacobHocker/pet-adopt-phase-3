import React, { useEffect, useState } from "react";
import Shelter from "./Shelter";


function ShelterContainer() {
    const [shelters, setShelters] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:9292/shelters")
        .then((r) => r.json())
        .then((shelters) => setShelters(shelters));
    }, [])

    /*const dogInfo = shelters.dogs.map((dog) =>(
        <div className='doggo'>
            <h2>{dog.name}</h2>
            <p>{dog.breed}</p>
        </div>
    ))*/

    const shelterList = shelters.map((shelter) => (
        <Shelter
        key={shelter.id}
        name={shelter.name}
        img={shelter.shelter_img_url}
        address={shelter.address}
        notes={shelter.shelter_notes}
        rating={shelter.shelter_rating}
        dogs={shelter.dogs}
        />
    ))
    return(
        <section className='container'>
            {shelterList}
        </section>
    )
}

export default ShelterContainer;