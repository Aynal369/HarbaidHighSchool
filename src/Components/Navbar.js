import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faHome,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../Hook/useAuth";

const Navbar = () => {
  const { handleSignOut } = useAuth();
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} />
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/friends-list">
                <FontAwesomeIcon icon={faAddressBook} />
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/create-profile">
                <FontAwesomeIcon icon={faUserPlus} />
              </NavLink>
            </li>
            <li></li>
          </ul>
          <button
            onClick={handleSignOut}
            type="button"
            className="btn btn-outline-light"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
