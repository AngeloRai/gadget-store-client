import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../../contexts/authContext";
import logo from "../../images/GDT-logo1.png";
import "./NavbarComponent.css";
import Cart from "../Cart/Cart";

function NavbarComponent() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <NavLink className="ml-3 navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            className="logo d-inline-block align-top"
          />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" activeClassName="active" to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/iphone">
              IPHONE
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/iphone">
              IPAD
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/iphone">
              APPLE WATCH
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/iphone">
              ACCESSORIES
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/all-products"
            >
              ALL PRODUCTS
            </NavLink>
            {loggedInUser.user.role === "ADMIN" ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/create-product"
                >
                  CREATE PRODUCT
                </NavLink>
              </li>
            ) : null}
          </Nav>
          {loggedInUser.user.name ? (
            <div className="d-flex align-items-center">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{ backgroundColor: "#0a0a0a", border: "none" }}
                >
                  <span className="mr-2">
                    Hi, {loggedInUser.user.name.split(" ")[0]}!
                  </span>
                  {/* <img
                      src={`https://ui-avatars.com/api/?name=${loggedInUser.user.name}&size=32&background=random`}
                      className="rounded-circle"
                      alt="Profile"
                    /> */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
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
