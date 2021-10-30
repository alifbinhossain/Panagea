import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo/logo_sticky_2x.png";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAll from "../../hooks/useAll";

const Header = () => {
  const { user, logOut } = useAll();

  const activeStyle = {
    color: "#fc5b62",
    fontWeight: "600",
  };

  const title = <i class="fas fa-user"></i>;
  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link activeStyle={activeStyle} as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link activeStyle={activeStyle} as={NavLink} to="/tours">
                Tours
              </Nav.Link>

              {user ? (
                <>
                  <NavDropdown title={title} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">
                      {user.displayName}
                    </NavDropdown.Item>
                    <NavDropdown.Item>My Orders</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Manage All Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Add a New Service
                    </NavDropdown.Item>
                  </NavDropdown>
                  <button className="btn-signout" onClick={logOut}>
                    <i class="fas fa-sign-out-alt"></i> Sign Out
                  </button>
                </>
              ) : (
                <Nav.Link
                  activeStyle={activeStyle}
                  as={NavLink}
                  to="/form/signin"
                >
                  Sign In <i class="fas fa-sign-in-alt"></i>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
