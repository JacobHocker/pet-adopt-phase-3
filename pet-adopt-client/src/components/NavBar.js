import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
    return(
      <div className='navbar'>
          <Navbar bg="danger" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/">Furry Friend Finder</Navbar.Brand>
              <Nav className="me-auto">     
                <Nav.Link href="/" className='link'>Home</Nav.Link>   
                <Nav.Link href="shelters" className='link'>Shelters</Nav.Link>
                <Nav.Link href="browse-all-animals" className='link'>Browse All Animals</Nav.Link>
                <Nav.Link href="post-animal-for-adoption" className='link'>Post Animal For Adoption</Nav.Link>
                <Nav.Link href="contact-us" className='link'>Contact Us</Nav.Link>
              </Nav>
          </Container>
          </Navbar>
      </div>
    )
}
export default NavBar;
