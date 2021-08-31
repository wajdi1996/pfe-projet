import React from "react"

import { Navbar ,Container, Nav,NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
export default function NaVigation(){
    return(
        
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link>  <Link to="/Home">Home</Link> | </Nav.Link>
      <Nav.Link >    <Link to="/AboutUs">About</Link> |</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <Link to="/Contact">Contact</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        
    )
}

