import React, { useState } from "react";
import { Container } from 'react-bootstrap';

function DogSubmit({ onAddDog }) {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [age, setAge] = useState(0)
    const [price, setPrice] = useState(0)
    const [note, setNote] = useState("")
    const [shelterId, setShelterId] = useState("")

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
                shelterId: shelterId,
            }),
        })
        .then((r) => r.json())
        .then((newDog) => onAddDog(newDog))
    }
    return(
        <div className='submit-a-dog'> 
            <h1>If you would like to put a dog up for adoption<br />Please fill out the form below!</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-dog'>
                    <input 
                        className='dog-input'
                        type="text"
                        placeholder="Name of the dog"
                        name="Dog Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input 
                        className='dog-input'
                        type="text"
                        placeholder="Breed of the dog"
                        name="Dog Breed"
                        value={breed}
                        onChange={(event) => setBreed(event.target.value)}
                    />
                    <input 
                        className='dog-input'
                        type="text"
                        placeholder="Image of the dog"
                        name="Dog Image"
                        value={imageUrl}
                        onChange={(event) => setImageUrl(event.target.value)}
                    />
                    <input 
                        className='dog-input'
                        type="text"
                        placeholder="Age of the dog"
                        name="Dog Age"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                    <input 
                        className='dog-input'
                        type="text"
                        placeholder="$ amount for adoption"
                        name="Dog Price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <textarea
                        className='submit-dog-area'
                        name="Dog not"
                        type="text"
                        placeholder='Write a quick note about the dog here...'
                        rows={10}
                        value={note}
                        onChange={(event) => setNote(event.target.value)}
                    />
                    <input 
                        className='dog-input'
                        type="text"
                        placeholder="Shelter I.D."
                        name="Dog Shelter I.D."
                        value={shelterId}
                        onChange={(event) => setShelterId(event.target.value)}
                    />
                </div>
                <button className='submit-button' type='submit'>
                    Submit For Adoption!
                </button>
            </form>
        
        
        </div>
    )
}

export default DogSubmit;