import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
    return(
        <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
        <Navbar.Brand href="home">Furry Friend Finder</Navbar.Brand>
        <Nav className="me-auto">     
          <Nav.Link href="home">Home</Nav.Link>   
          <Nav.Link href="shelters">Shelters</Nav.Link>
          <Nav.Link href="individual-sellers">Individual Sellers</Nav.Link>
          <Nav.Link href="service-animals">Service Animals</Nav.Link>
          <Nav.Link href="post-animal-for-adoption">Post Animal For Adoption</Nav.Link>
          <Nav.Link href="contact-us">Contact Us</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    )
}
export default NavBar;
