import React from "react";
import { Card } from 'react-bootstrap';

function Dogs({ name, breed, image, age, price, note }) {
    return(
    <div className="dog-cards">
        <Card  className="dog-cards">
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
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Price: ${price}.00</small>
            </Card.Footer>
        </Card>
    </div>
    )
}


export default Dogs;

    




