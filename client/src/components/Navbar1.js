import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link 
        className="navbar-brand" 
        to="/">
        DigFiction
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-secondary ${window.location.pathname === "/Browse" ? "text-info" : ""}`} 
            to="/Browse">
            Browse Stories
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-secondary ${window.location.pathname === "/About" ? "text-info" : ""}`}
            to="/About">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-secondary ${window.location.pathname === "/Login" ? "text-info" : ""}`}
            to="/Login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-secondary ${window.location.pathname === "/Register" ? "text-info" : ""}`} 
            to="/Register">
            Sign Up!
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
