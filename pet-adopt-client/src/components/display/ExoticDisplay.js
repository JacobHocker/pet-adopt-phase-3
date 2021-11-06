import React from "react";
import { Card, Button } from 'react-bootstrap';

function ExoticDisplay({ name, breed, image, age, price, note, onDeleteExotic, exotic }) {

    function handleDeleteClick() {
        fetch(`http://localhost:9129/exotics/${exotic.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedExotic) => onDeleteExotic(deletedExotic));
    }

    return(
    <div className="exotic-display-container">
        <Card  className="exotic-cards">
            <Card.Img variant="top"  src={image} className="card-pic" />
            <Card.Body className='display-card'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                Age: {age}
                </Card.Text>
                <Card.Text>
                Breed: {breed}
                </Card.Text>
                <Card.Text>
                Note about {name}: {note}
                </Card.Text>
                <Button variant="danger" onClick={handleDeleteClick} className='adopt-button'>Adopted!</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Price: ${price}.00</small>
            </Card.Footer>
        </Card>
    </div>
    )
}

export default ExoticDisplay;