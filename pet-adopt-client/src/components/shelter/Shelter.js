import React from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Cats from "./Cats";
import Dogs from "./Dogs";
import ExoticPets from "./ExoticPets";
import { Container, Row, Col } from 'react-bootstrap';

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
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className='shelter-name'>{name}</h1>
                        
                        <img className='shelter-images' src={img} alt={name} />
                        <h1 className='notes-on'>Notes on {name}:</h1>
                        <p className='shelter-note'>{notes}</p>
                        <section className='shelter-info'>
                            <div className='shelter-display-bar'>
                                <h2>Address:</h2>
                                <h3>{address}</h3>
                            </div>
                            <div className='shelter-display-bar'>
                                <h2>Customer Rating:</h2>
                                <h3>{rating} stars</h3>  
                            </div>
                            <div className='shelter-display-bar'>
                                <h2>Kill shelter?</h2> 
                                <h3>{killShelter}</h3>
                            </div>
                        </section>
                        <section className='shelter-animal-display'>    
                            <h2>Browse {name} selection of <strong>man's best friend</strong>.  Ready to be adpoted today!</h2> 
                            <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{dogList}</CardGroup>
                            <h2>Browse {name} selection of <strong>feline companions</strong>! Looking for their new home!</h2>
                            <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{catList}</CardGroup>
                            <h2>Browse {name} selection of <strong>exotic pets</strong>! Looking their own little oasis!</h2>
                            <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>{exoticList}</CardGroup>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Shelter;