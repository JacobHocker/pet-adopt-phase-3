import React from 'react';
import CatDisplay from './CatDisplay';
import DogDisplay from './DogDisplay';
import ExoticDisplay from './ExoticDisplay';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from 'react-bootstrap';
import Search from "./Search";

function Display({ searchTerm, onChangeSearch, dogs, cats, exotics, onDeleteDog, onDeleteCat, onDeleteExotic }) {
    
    
    
    const dogDisplayList = dogs.map((dog) => (
        <DogDisplay
        key={dog.id}
        name={dog.name}
        breed={dog.breed}
        image={dog.image_url}
        age={dog.age}
        price={dog.price}
        note={dog.note}
        dog={dog}
        onDeleteDog={onDeleteDog}
        />
    ))

    const catDisplayList = cats.map((cat) => (
        <CatDisplay
        key={cat.id}
        name={cat.name}
        breed={cat.breed}
        image={cat.image_url}
        age={cat.age}
        price={cat.price}
        note={cat.note}
        cat={cat}
        onDeleteCat={onDeleteCat}
        />
    ))

    const exoticDisplayList = exotics.map((exotic) => (
        <ExoticDisplay
        key={exotic.id}
        name={exotic.name}
        breed={exotic.breed}
        image={exotic.image_url}
        age={exotic.age}
        price={exotic.price}
        note={exotic.note}
        exotic={exotic}
        onDeleteExotic={onDeleteExotic}
        />
    ))

    return(
        <div className='display-all'>
            <Container fluid style={{ textAlign: "center", padding: "100px" }}>
                <Search searchTerm={searchTerm} onChangeSearch={onChangeSearch} />
                <div className='display-containers'>
                    <h1 className='display-titles'>Dogs</h1>
                    <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{dogDisplayList}</CardGroup>
                </div>
                <div className='display-containers'>
                    <h1 className='display-titles'>Cats</h1>
                    <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{catDisplayList}</CardGroup>
                </div>
                <div className='display-containers'>
                    <h1 className='display-titles'>Exotic Animals</h1>
                    <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{exoticDisplayList}</CardGroup>
                </div>
            </Container>
        </div>
    )
}

export default Display;