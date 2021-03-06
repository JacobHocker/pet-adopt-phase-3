import React from "react";
import { Card } from 'react-bootstrap';

function Dogs({ name, breed, image, age, price, note }) {
    return(
    <div className="dog-container">
        <Card  className="dog-cards">
            <Card.Img variant="top"  src={image}  className="card-pic"/>
            <Card.Body className='shelter-card-body'>
                    <Card.Title><h1>{name}</h1></Card.Title>
                    <Card.Text>
                    Age:<p className='p-tag'> {age}</p>
                    </Card.Text>
                    <Card.Text>
                    Breed: <p className='p-tag'>{breed}</p>
                    </Card.Text>
                    <Card.Text>
                   Note about {name}: <p className='p-tag'>{note}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="shelter-card-footer">
                    <small className="text-muted">Price: ${price}.00</small>
                </Card.Footer>
        </Card>
    </div>
    )
}


export default Dogs;

    




