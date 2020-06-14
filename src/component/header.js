import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";

const Header = () => {
  return (
    <div>
      <Navbar bg="info" variant="dark" expand="lg">
        <Navbar.Brand>Meeting Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              className={"nav-link"}
              activeClassName={"active"}
              to={routes.home}
            >
              Home
            </NavLink>

            <NavLink
              className={"nav-link"}
              activeClassName={"active"}
              to={routes.listRoom}
            >
              Rooms
            </NavLink>
            <NavLink
              className={"nav-link"}
              activeClassName={"active"}
              to={routes.createRoom}
            >
              Create room
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br/>
    </div>
  );
};

export default Header;
