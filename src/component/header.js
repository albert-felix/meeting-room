import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import routes from "../routes/routes";
import useUserProvider from "../store/UserProvider/useUserProvider";

const Header = () => {
  const { isUserLoggedIn, isAdmin } = useUserProvider();
  const history = useHistory();

  const logout = () => {
    window.localStorage.removeItem("jwtToken");
    window.localStorage.removeItem("email");
    history.push("/");
    window.location.reload();
  };

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
            {isAdmin ? (
              <NavLink
                className={"nav-link"}
                activeClassName={"active"}
                to={routes.createRoom}
              >
                Create room
              </NavLink>
            ) : null}

            {isAdmin ? (
              <NavLink
                className={"nav-link"}
                activeClassName={"active"}
                to={routes.bookings}
              >
                Bookings
              </NavLink>
            ) : null}
          </Nav>
          <Nav>
            {isUserLoggedIn ? null : (
              <NavLink
                to={routes.signUp}
                className={"nav-link"}
                activeClassName={"active"}
                size="sm"
                variant="light"
              >
                SignUp
              </NavLink>
            )}
            {isUserLoggedIn ? (
              <Button
                onClick={logout}
                variant="dark"
                activeclassname={"active"}
              >
                Logout
              </Button>
            ) : (
              <NavLink
                to={routes.login}
                className={"nav-link"}
                activeClassName={"active"}
                size="sm"
                variant="light"
              >
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;
