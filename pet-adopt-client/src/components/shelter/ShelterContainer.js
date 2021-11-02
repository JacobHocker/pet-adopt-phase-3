import React, { useEffect, useState, useContext } from "react";
import Shelter from "./Shelter";
import { Container, Row, Col } from 'react-bootstrap';
import {  ShelterContext } from "./ShelterProvider";


function ShelterContainer() {
    
    const { shelters } = useContext(ShelterContext)

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
        exotics={shelter.exotics}
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