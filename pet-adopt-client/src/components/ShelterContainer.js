import React, { useEffect, useState } from "react";
import Shelter from "./Shelter";
import { Container, Row, Col } from 'react-bootstrap';

function ShelterContainer() {
    const [shelters, setShelters] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:9129/shelters")
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
        cats={shelter.cats}
        />
    ))
    return(
        <div className='shelter-container'>
            <Container fluid style={{ textAlign: "center" }} >
                <Row>
                    <Col>
                        <h1>Browse the list of shelters and their animals below:</h1>
                        {shelterList}
                    </Col>
                </Row>    
            </Container>
        </div>
    )
}

export default ShelterContainer;