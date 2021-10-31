import React, { useEffect, useState } from "react";
import Shelter from "./Shelter";
import { Container } from 'react-bootstrap';

function ShelterContainer() {
    const [shelters, setShelters] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:9292/shelters")
        .then((r) => r.json())
        .then((shelters) => setShelters(shelters));
    }, [])

    

    const shelterList = shelters.map((shelter) => (
        <Shelter
        key={shelter.id}
        name={shelter.name}
        img={shelter.shelter_img_url}
        address={shelter.address}
        notes={shelter.shelter_notes}
        rating={shelter.shelter_rating}
        killShelter={shelter.kill_shelter}
        dogs={shelter.dogs}
        />
    ))
    return(
        <section className='shelter-container'>
            <Container style={{ textAlign: "center" }} >
            {shelterList}
            </Container>
        </section>
    )
}

export default ShelterContainer;