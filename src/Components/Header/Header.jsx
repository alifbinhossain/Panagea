import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo/logo_sticky_2x.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAll from "../../hooks/useAll";

const Header = () => {
  const { user, logOut } = useAll();

  const activeStyle = {
    color: "#fc5b62",
    fontWeight: "600",
    backgroundColor: "transparent",
  };

  let userName;

  if (user?.displayName === "Admin") {
    userName = "";
  } else {
    userName = user?.displayName;
  }

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
                All Tours
              </Nav.Link>

              {user ? (
                <>
                  {user?.email === "admin@gmail.com" ? (
                    <Nav.Link
                      activeStyle={activeStyle}
                      as={NavLink}
                      to="/admin"
                    >
                      Login as Admin
                    </Nav.Link>
                  ) : (
                    <>
                      <Nav.Link
                        activeStyle={activeStyle}
                        as={NavLink}
                        to="/my_orders"
                      >
                        My Orders
                      </Nav.Link>
                      <Nav.Link
                        activeStyle={activeStyle}
                        as={NavLink}
                        to="/admin"
                      >
                        Admin
                      </Nav.Link>
                    </>
                  )}

                  <Nav.Link>
                    {" "}
                    <i className="fas fa-user me-2"></i>{" "}
                    {userName.split(" ")[0]}
                  </Nav.Link>
                  <button className="btn-signout" onClick={logOut}>
                    <i className="fas fa-sign-out-alt"></i> Sign Out
                  </button>
                </>
              ) : (
                <Nav.Link
                  activeStyle={activeStyle}
                  as={NavLink}
                  to="/form/signin"
                >
                  Sign In <i className="fas fa-sign-in-alt"></i>
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
