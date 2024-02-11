/* eslint-disable no-unused-vars */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./NavBar.css"



const NavBar = () => {
  return (
    <>
<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Bellas Artes</Navbar.Brand>
          <Nav className="me-auto paginas">
            <Link to={"/"} className='nav-link'>Home</Link>
            <Link to={"*"} className='nav-link'>Contactenos</Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <Link to={"categoria/ropa"} className='dropdown-item'>Ropa</Link>
            <Link to={"categoria/souvenir"} className='dropdown-item'>Souvenirs</Link>
            <Link to={"categoria/accesorios"} className='dropdown-item'>Sandalias</Link>
            </NavDropdown>
          </Nav>
        </Container>  
      </Navbar> 

          
    </>
  )
}

export default NavBar