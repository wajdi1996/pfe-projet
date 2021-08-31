import React from "react"
import "../components/Nav1.css"
import { Navbar ,Container , Nav} from "react-bootstrap"
 
export default function Naving(){
    return(
        
        <div>
            <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>

 
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <button className="buttonTop"> heyel</button>
    <input className="boxSerch"></input>
    </Container>
  </Navbar>
        </div>
    )
}

