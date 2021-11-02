import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Home() {
    return(
        <div className='home'>
            <Container fluid style={{ textAlign: "center" }}>
                <Row>
                    <Col>
                        <img className='friend-logo' src='./images/ffflogo1.png' alt='logo' />
                    </Col>
                </Row>
            </Container>    
            <Container fluid style={{ textAlign: "center" }}>
                <Row>
                    <Col>
                        <h1>Welcome to the one stop shop for adopting your next furry best friends!</h1>
                        <h1>On this site you can browse from a selection of dogs, cats, and exotic animals!</h1> 
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}

export default Home;

    