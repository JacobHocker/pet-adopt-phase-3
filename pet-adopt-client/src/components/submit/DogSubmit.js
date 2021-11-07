import React, { useState } from "react";
import { Container, Button } from 'react-bootstrap';

function DogSubmit({ onAddDog }) {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [age, setAge] = useState("")
    const [price, setPrice] = useState("")
    const [note, setNote] = useState("")
    const [shelterId, setShelterId] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:9582/dogs", {
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
        .then((newDog) => onAddDog(newDog))
    }
    return(
        <div className='submit-a-animal'> 
        <Container fluid style={{ textAlign: "center" }} >
            <h3 className='submit-header'>If you would like to put a <strong>dog</strong> up for adoption. Please fill out the form below!</h3>
            <form onSubmit={handleSubmit} className="animal-form">
                <div className='input-animal'>
                    <div className='one-three'>
                        <input 
                            className='animal-input'
                            type="text"
                            placeholder="Name of the dog"
                            name="Dog Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input 
                            className='animal-input'
                            type="text"
                            placeholder="Breed of the dog"
                            name="Dog Breed"
                            value={breed}
                            onChange={(event) => setBreed(event.target.value)}
                        />
                        <input 
                            className='animal-input'
                            type="text"
                            placeholder="Image of the dog"
                            name="Dog Image"
                            value={imageUrl}
                            onChange={(event) => setImageUrl(event.target.value)}
                        />
                    </div>
                    <div className='four-six'>
                        <input 
                            className='animal-input'
                            type="number"
                            placeholder="Age of the dog"
                            name="Dog Age"
                            value={age}
                            onChange={(event) => setAge(event.target.value)}
                        />
                        <input 
                            className='animal-input'
                            type="number"
                            placeholder="$ Amount"
                            name="Dog Price"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                        <input 
                            className='animal-input'
                            type="number"
                            placeholder="Shelter I.D."
                            name="Dog Shelter I.D."
                            value={shelterId}
                            onChange={(event) => setShelterId(event.target.value)}
                        />
                    </div>
                    <textarea
                        className='animal-input-text'
                        name="Dog note"
                        type="text"
                        placeholder='Write a quick note about the dog here...'
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

export default DogSubmit;