import React, { useEffect, useState } from "react";
import Submit from "./Submit";
import { Container } from 'react-bootstrap';

function SubmitContainer() {
   const [dogs, setDogs] = useState([])
   const [cats, setCats] = useState([])
   const [exotics, setExotics] = useState([])

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

   

    return(
        <div className='submit-container'>
            <Container fluid style={{ textAlign: "center" }}>
                <Submit dogs={dogs} setDogs={setDogs}
                cats={cats} setCats={setCats}
                exotics={exotics} setExotics={setExotics}/>
            </Container>
        </div>
    )
}

export default SubmitContainer;