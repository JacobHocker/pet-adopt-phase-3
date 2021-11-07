import React from "react";
import DogSubmit from "./DogSubmit";
import CatSubmit from "./CatSubmit";
import ExoticSubmit from "./ExoticSubmit";


function Submit({ dogs, setDogs, cats, setCats, exotics, setExotics }) {
    
    function handleAddDog(newDog) {
        const updatedDogs = [...dogs,newDog]
        setDogs(updatedDogs)
    }

    function handleAddCat(newCat) {
        const updatedCats = [...cats, newCat]
        setCats(updatedCats)
    }

    function handleAddExotic(newExotic) {
        const updatedExotic = [...exotics, newExotic]
        setExotics(updatedExotic)
    }
    
    return(
        <div className='form-container'>
            <DogSubmit onAddDog={handleAddDog} />
            <CatSubmit onAddCat={handleAddCat} />
            <ExoticSubmit onAddExotic={handleAddExotic} />
        </div>
    )
}

export default Submit;