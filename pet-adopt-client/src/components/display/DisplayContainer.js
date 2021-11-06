import React, { useEffect, useState } from "react";
import Display from "./Display";
import { Col, Container, Row } from 'react-bootstrap';


function DisplayContainer() {
    const [dogs, setDogs] = useState([])
    const [cats, setCats] = useState([])
    const [exotics, setExotics] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

   

    useEffect(() => {
    fetch("http://localhost:9129/dogs")
    .then((r) => r.json())
    .then((dogs) => setDogs(dogs));
    }, [])

    useEffect(() => {
    fetch("http://localhost:9129/cats")
    .then((r) => r.json())
    .then((cats) => setCats(cats));
    }, [])  

    useEffect(() => {
    fetch("http://localhost:9129/exotics")
    .then((r) => r.json())
    .then((exotics) => setExotics(exotics));
    }, [])

    function handleDeleteDog(id) {
        const updatedDog = dogs.filter((dog) =>
        dog.id !== id)
        setDogs(updatedDog)
    }

    function handleDeleteCat(id) {
        const updatedCat = cats.filter((cat) =>
        cat.id !== id)
        setCats(updatedCat)
    }

    function handleDeleteExotic(id) {
        const updatedExotic = exotics.filter((exotic) =>
        exotic.id !== id)
        setExotics(updatedExotic)
    }
   
    const dogsToDisplay = dogs.filter((dog) =>
    dog.breed.toLowerCase().includes(searchTerm.toLowerCase()))

    const catsToDisplay = cats.filter((cat) => 
    cat.breed.toLowerCase().includes(searchTerm.toLowerCase()))

    const exoticsToDisplay = exotics.filter((exotic) =>
    exotic.breed.toLowerCase().includes(searchTerm.toLowerCase()))


    return(
        <div className='display-container'>
            <Container fluid style={{ textAlign: "center" }}>
                <Row>
                    <Col>
                       <Display onDeleteDog={handleDeleteDog} onDeleteCat={handleDeleteCat} onDeleteExotic={handleDeleteExotic}  searchTerm={searchTerm} onChangeSearch={setSearchTerm} dogs={dogsToDisplay}  cats={catsToDisplay}  exotics={exoticsToDisplay}  />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DisplayContainer;