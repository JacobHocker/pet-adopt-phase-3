import React from "react";
import { Card, Button } from 'react-bootstrap';
function ExoticPets({ name, breed, image, age, price, note }) {
    return(
        <div className="exotic-container">
            <Card  className="exotic-cards">
                <Card.Img variant="top"  src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Breed: {breed}
                    </Card.Text>
                    <Card.Text>
                    Age: {age}
                    </Card.Text>
                    <Card.Text>
                    Note about {name}: {note}
                    </Card.Text>
                    <Button variant="primary">Adopted!</Button>{' '}<Button variant="secondary">Edit Pet</Button>{' '}
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Price: ${price}.00</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ExoticPets;