import React,{ useState } from "react";
import DogSubmit from "./DogSubmit";



function Submit({ dogs, setDogs }) {
    
    function handleAddDog(newDog) {
        const updatedDogs = [...dogs,newDog]
        setDogs(updatedDogs)
    }
    
    return(
        <div className='form-container'>
            <DogSubmit onAddDog={handleAddDog} />
        </div>
    )
}

export default Submit;