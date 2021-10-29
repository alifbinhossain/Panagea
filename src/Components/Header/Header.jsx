import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo/logo_sticky_2x.png";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Tours</Nav.Link>
              <Nav.Link href="#link">Hotels</Nav.Link>
              <Nav.Link href="#link">Restaurants</Nav.Link>
              {/* <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  My Orders
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Manage All Orders
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Add a New Service
                </NavDropdown.Item>
              </NavDropdown> */}

              <Button variant="success">Sign In</Button>
              <Button variant="success ms-3">Sign Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
