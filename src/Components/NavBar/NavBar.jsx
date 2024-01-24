/* eslint-disable no-unused-vars */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"



const NavBar = () => {
  return (
    <>
<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Bellas Artes</Navbar.Brand>
          <Nav className="me-auto paginas">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contactenos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          
    </>
  )
}

export default NavBar