import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";

import { AuthContext } from "../contexts/authContext";

import Cart from "./Cart";

function Navbar() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="ml-3">
        <NavLink className="navbar-brand" to="/">
          Ironbeers Store
        </NavLink>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-between"
        id="navbarText"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          {/* Esconder o link de quem não for Admin */}
          {loggedInUser.user.role === "ADMIN" ? (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/create-product"
              >
                Create Product
              </NavLink>
            </li>
          ) : null}

          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/all">
              All Beers
            </NavLink>
          </li>
        </ul>
        <div className="mr-3">
          {loggedInUser.user.name ? (
            <div className="d-flex align-items-center">
              <Cart />

              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  <img
                    src={`https://ui-avatars.com/api/?name=${loggedInUser.user.name}&size=32&background=random`}
                    className="rounded-circle"
                    alt="Profile"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item to="/profile" as={NavLink}>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(event) => {
                      event.preventDefault();
                      // Fazendo processo de Logout
                      setLoggedInUser({ user: {}, token: "" });
                      localStorage.removeItem("loggedInUser");
                    }}
                  >
                    Logout
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
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
