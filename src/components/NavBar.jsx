import React from 'react';
import { CartWidget } from './CartWidget';
import '../app.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar nav">
      <Container>
        <Navbar.Brand to="/"  as={NavLink}><h1 className='me-5'> DASA</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center w-100">
            <Nav.Link to="/" as={NavLink} className='ms-3'>Inicio</Nav.Link>
            <Nav.Link to="#" className='ms-3'>Nosotros</Nav.Link>
            <Nav.Link to="#" className='ms-3'>Contacto</Nav.Link>
            <NavDropdown title="Tienda" id="basic-nav-dropdown" className='ms-3'>
              <NavDropdown.Item to="/category/abrigo" as={NavLink}>Abrigo</NavDropdown.Item>
              <NavDropdown.Item to="/category/pantalon" as={NavLink}>Pantalón</NavDropdown.Item>
              <NavDropdown.Item to="/category/short" as={NavLink}>Short</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/category/body" as={NavLink}>Body</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
