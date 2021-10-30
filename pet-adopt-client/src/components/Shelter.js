import React, { useEffect, useState } from "react";
import Dogs from "./Dogs";

function Shelter({name, img, address, notes, rating, dogs}) {
    

    

    const dogList = dogs.map((dog) => (
        <Dogs 
        key={dog.id}
        name={dog.name}
        breed={dog.breed}
        />
    ))
  

    return(
        <div>
            <h1>Shelters</h1>
            <h2>{name}</h2>
            <img src={img} alt={name} />
            <p>{address}</p>
            <p>{notes}</p>
            <p>{rating}</p>
            {dogList}
        </div>
    )
}

export default Shelter;