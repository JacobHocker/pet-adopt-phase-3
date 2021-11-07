import React, { useState } from "react";
import { Container, Button } from 'react-bootstrap';

function ExoticSubmit({ onAddExotic }) {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [age, setAge] = useState("")
    const [price, setPrice] = useState("")
    const [note, setNote] = useState("")
    const [shelterId, setShelterId] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:9582/exotics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                breed: breed,
                image_url: imageUrl,
                age: age,
                price: price,
                note: note,
                shelter_id: shelterId,
            }),
        })
        .then((r) => r.json())
        .then((newExotic) => onAddExotic(newExotic))
    }
    return(
        <div className='submit-a-animal'> 
        <Container fluid style={{ textAlign: "center" }} >
            <h3 className='submit-header'>If you would like to put a <strong>exotic animal</strong> up for adoption. Please fill out the form below!</h3>
            <form onSubmit={handleSubmit} className="animal-form">
                <div className='input-animal'>
                    <div className='one-three'>
                        <input 
                            className='animal-input'
                            type="text"
                            placeholder="Name of the animal"
                            name="Exotic Animal Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input 
                            className='animal-input'
                            type="text"
                            placeholder="Breed of the animal"
                            name="Exotic Animal Breed"
                            value={breed}
                            onChange={(event) => setBreed(event.target.value)}
                        />
                        <input 
                            className='animal-input'
                            type="text"
                            placeholder="Image of the animal"
                            name="Exotic Animal Image"
                            value={imageUrl}
                            onChange={(event) => setImageUrl(event.target.value)}
                        />
                    </div>
                    <div className='four-six'>
                        <input 
                            className='animal-input'
                            type="number"
                            placeholder="Age of the animal"
                            name="Exotic Animal Age"
                            value={age}
                            onChange={(event) => setAge(event.target.value)}
                        />
                        <input 
                            className='animal-input'
                            type="number"
                            placeholder="$ Amount"
                            name="Exotic Animal Price"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                        <input 
                            className='animal-input'
                            type="number"
                            placeholder="Shelter I.D."
                            name="Exotic Animal Shelter I.D."
                            value={shelterId}
                            onChange={(event) => setShelterId(event.target.value)}
                        />
                    </div>
                    <textarea
                        className='animal-input-text'
                        name="Cat note"
                        type="text"
                        placeholder='Write a quick note about the exotic animal here...'
                        value={note}
                        onChange={(event) => setNote(event.target.value)}
                    />
                    
                </div>
                <Button variant="danger" type='submit' className='submit-button'>Submit For Adoption!</Button>
            </form>
        
        </Container>
        </div>
    )
}

export default ExoticSubmit;