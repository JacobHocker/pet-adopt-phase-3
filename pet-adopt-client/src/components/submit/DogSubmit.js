import React, { useState } from "react";
import { Container } from 'react-bootstrap';

function DogSubmit({ onAddDog }) {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [age, setAge] = useState(0)
    const [price, setPrice] = useState(0)
    const [note, setNote] = useState("")
    const [shelterID, setShelterID] = useState(0)

    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:9129/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                breed: breed,
                imageUrl: imageUrl,
                age: age,
                price: price,
                note: note,
                shelterID: shelterID,
            }),
        })
        .then((r) => r.json())
        .then((newDog) => onAddDog(newDog))
    }
    return(
        <div className='submit-a-dog'> 
            <h1>If you would like to put a dog up for adoption<br />Please fill out the form below!</h1>
        </div>
    )
}

export default DogSubmit;