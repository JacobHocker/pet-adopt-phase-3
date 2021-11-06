import React from 'react';

function Search({ searchTerm, onChangeSearch }) {
   
    function handleChange(event) {
        onChangeSearch(event.target.value)
    }

    return(
        <div className='search-bar'>
            <span>Search for animals!</span>
            <input 
                className='search'
                type="text"
                placeholder="Search By Breed"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    )
}

export default Search;