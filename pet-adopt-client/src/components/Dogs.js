import React from "react";

function Dogs({ name, breed, image, age, price, note }) {
    return(
        <div className='dog container'>
            <h2>Take a look at the available dogs to adopt today!</h2>
            <h3>Breed: {breed}</h3>
            <h3>Name: {name}</h3>
            <img className='dog-images' src={image} alt={name} />
            <h3>Age: {age} years old</h3>
            <h3>Price: ${price}</h3>
            <h4>Note about {name}: {note}</h4>
        </div>
    )
}

export default Dogs;