import React from "react";
import { Card, Button } from 'react-bootstrap';

function DogDisplay({ name, breed, image, age, price, note, onDeleteDog, dog }) {

    function handleDeleteClick() {
        fetch(`http://localhost:9129/dogs/${dog.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedDog) => onDeleteDog(deletedDog));
    }

    return(
    <div className="dog-display-container">
        <Card  className="dog-display-cards">
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
                <Button variant="primary" onClick={handleDeleteClick}>Adopted!</Button>{' '}<Button variant="secondary">Edit Pet</Button>{' '}
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Price: ${price}.00</small>
            </Card.Footer>
        </Card>
    </div>
    )
}

export default DogDisplay;