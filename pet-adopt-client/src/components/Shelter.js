import React, { useEffect, useState } from "react";
import CardGroup from 'react-bootstrap/CardGroup'
import Cats from "./Cats";
import Dogs from "./Dogs";
import ExoticPets from "./ExoticPets";

function Shelter({name, img, address, notes, rating, killShelter, dogs, cats, exotics}) {
    
    const catList = cats.map((cat) => (
        <Cats
        key={cat.id}
        name={cat.name}
        breed={cat.breed}
        image={cat.image_url}
        age={cat.age}
        price={cat.price}
        note={cat.note}
        />
    ))
    
    const exoticList = exotics.map((exotic) => (
        <ExoticPets 
        key={exotic.id}
        name={exotic.name}
        breed={exotic.breed}
        image={exotic.image_url}
        age={exotic.age}
        price={exotic.price}
        note={exotic.note}
        />
    ))
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
            <h2>Shelter Name: {name}</h2>
            <br />
            <img className='shelter-images' src={img} alt={name} />
            <br />
            <h3>Shelter Address:</h3>
            <h4>{address}</h4>
            <br />
            <h3>Notes on {name}:</h3>
            <h4>{notes}</h4>
            <br />
            <h3>Overall Customer Rating:</h3>
            <h4>{rating} stars</h4>
            <br />
            <h3>Kill shelter? {killShelter}</h3>
            <br />
            <h2>Browse {name} selection of <strong>man's best friend</strong>.  Ready to be adpoted today!</h2> 
            <br />
            <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{dogList}</CardGroup>
            <br />
            <h2>Browse {name} selection of <strong>feline companions</strong>! Looking for their new home!</h2>
            <br />
            <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{catList}</CardGroup>
            <br />
            <h2>Browse {name} selection of <strong>exotic pets</strong>! Looking their own little oasis!</h2>
            <br />
            <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{exoticList}</CardGroup>
            <br />
        </div>
    )
}

export default Shelter;