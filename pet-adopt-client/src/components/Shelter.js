import React, { useEffect, useState } from "react";
import CardGroup from 'react-bootstrap/CardGroup'
import Dogs from "./Dogs";

function Shelter({name, img, address, notes, rating, killShelter, dogs}) {
    

    

    const dogList = dogs.map((dog) => (
        <Dogs 
        key={dog.id}
        name={dog.name}
        breed={dog.breed}
        image={dog.image_url}
        age={dog.age}
        price={dog.price}
        note={dog.note}
        />
    ))
  

    return(
        <div className='individual-shelter'>
            <h1>Shelters</h1>
            <h2>{name}</h2>
            <img className='shelter-images' src={img} alt={name} />
            <p>{address}</p>
            <p>{notes}</p>
            <p>{rating}</p>
            <p>{killShelter}</p>
            <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{dogList}</CardGroup>
        </div>
    )
}

export default Shelter;