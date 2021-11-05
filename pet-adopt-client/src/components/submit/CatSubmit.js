import React, { useState } from "react";
import { Container } from 'react-bootstrap';

function CatSubmit({ onAddCat }) {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [age, setAge] = useState(0)
    const [price, setPrice] = useState(0)
    const [note, setNote] = useState("")
    const [shelterId, setShelterId] = useState(1)

    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:9129/cats", {
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
        .then((newCat) => onAddCat(newCat))
    }
    return(
        <div className='submit-a-cat'> 
        <Container fluid style={{ textAlign: "center", padding: "100px"}} >
            <h1>If you would like to put a cat up for adoption<br />Please fill out the form below!</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-cat'>
                    <input 
                        className='cat-input'
                        type="text"
                        placeholder="Name of the cat"
                        name="Cat Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input 
                        className='cat-input'
                        type="text"
                        placeholder="Breed of the cat"
                        name="Cat Breed"
                        value={breed}
                        onChange={(event) => setBreed(event.target.value)}
                    />
                    <input 
                        className='cat-input'
                        type="text"
                        placeholder="Image of the cat"
                        name="Cat Image"
                        value={imageUrl}
                        onChange={(event) => setImageUrl(event.target.value)}
                    />
                    <input 
                        className='cat-input'
                        type="number"
                        placeholder="Age of the cat"
                        name="Cat Age"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                    <input 
                        className='cat-input'
                        type="number"
                        placeholder="$ amount for adoption"
                        name="Cat Price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <input 
                        className='cat-input'
                        type="number"
                        placeholder="Shelter I.D."
                        name="cat Shelter I.D."
                        value={shelterId}
                        onChange={(event) => setShelterId(event.target.value)}
                    />
                    <textarea
                        className='submit-cat-area'
                        name="Cat note"
                        type="text"
                        placeholder='Write a quick note about the cat here...'
                        rows={10}
                        value={note}
                        onChange={(event) => setNote(event.target.value)}
                    />
                    
                </div>
                <button className='submit-button' type='submit'>
                    Submit For Adoption!
                </button>
            </form>
        
        </Container>
        </div>
    )
}

export default CatSubmit;