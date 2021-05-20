import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../contexts/authContext";
import logo from "../../images/GDT-logo1.png";
import "./NavbarComponent.css";
import Cart from "../Cart/Cart";

function NavbarComponent() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const [expanded, setExpanded] = useState(false);

  function expand() {
    console.log(expanded);
    if (expanded === false) {
      setExpanded(true);
    } else if (expanded === true) setExpanded(false);

    console.log(expanded);
  }

  return (
    <Navbar
      collapseOnSelect
      expanded={expanded}
      expand="lg"
      style={{backgroundColor: 'black', opacity: 0.9}} 
      variant="dark"
    >
      <Navbar.Brand to="/home">
        <NavLink className="ml-3 navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            className="logo d-inline-block align-top"
          />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle onClick={expand} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav d-flex justify-content-center text-center">
        <Nav className="mr-auto">
          <NavLink
            onClick={() => setExpanded(false)}
            className="d-flex justify-content-center nav-link"
            activeClassName="active"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setExpanded(false)}
            className="d-flex justify-content-center nav-link"
            activeClassName="active"
            to="/iphone"
          >
            IPHONE
          </NavLink>
          <NavLink
            onClick={() => setExpanded(false)}
            className="d-flex justify-content-center nav-link"
            activeClassName="active"
            to="/ipad"
          >
            IPAD
          </NavLink>
          <NavLink
            onClick={() => setExpanded(false)}
            className="d-flex justify-content-center nav-link"
            activeClassName="active"
            to="/watch"
          >
            APPLE WATCH
          </NavLink>
          <NavLink
            onClick={() => setExpanded(false)}
            className="d-flex justify-content-center nav-link"
            activeClassName="active"
            to="/accessories"
          >
            ACCESSORIES
          </NavLink>
          <NavLink
            onClick={() => setExpanded(false)}
            className="nav-link d-flex justify-content-center"
            activeClassName="active"
            to="/all-products"
          >
            ALL PRODUCTS
          </NavLink>
          {loggedInUser.user.role === "ADMIN" ? (
            <li className="nav-item">
              <NavLink
                className="nav-link d-flex justify-content-center"
                activeClassName="active"
                to="/create-product"
              >
                CREATE PRODUCT
              </NavLink>
            </li>
          ) : null}
        </Nav>
        {loggedInUser.user.name ? (
          <div className="d-flex justify-content-center">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ backgroundColor: "#0a0a0a", border: "none" }}
              >
                <span className="mr-2">
                  Hi, {loggedInUser.user.name.split(" ")[0]}!
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="overlay">
                <Dropdown.Item to="/profile" as={NavLink}>
                  PROFILE
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(event) => {
                    event.preventDefault();
                    // Logout Process
                    setLoggedInUser({ user: {}, token: "" });
                    localStorage.removeItem("loggedInUser");
                  }}
                >
                  LOGOUT
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <NavLink
            className="nav-link text-white"
            activeClassName="active"
            to="/login"
          >
            LOGIN
          </NavLink>
        )}
      </Navbar.Collapse>
      <Nav>{loggedInUser.user.name ? <Cart /> : null}</Nav>
    </Navbar>
  );
}

export default NavbarComponent;
