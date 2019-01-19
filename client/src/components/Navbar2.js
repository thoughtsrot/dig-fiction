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
            className={`nav-link text-secondary ${window.location.pathname === "/UserStories" ? "text-info" : ""}`}
            to="/UserStories">
            Contributions
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-secondary ${window.location.pathname === "/UserCollabs" ? "text-info" : ""}`} 
            to="/UserCollabs">
            Collaberations
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-secondary ${window.location.pathname === "/AddFiction" ? "text-info" : ""}`} 
            to="/AddFiction">
            Add Fiction
          </NavLink>
          <NavLink 
            className={`nav-link text-secondary ${window.location.pathname === "/Logout" ? "text-info" : ""}`} 
            to="/Logout">
            Logout
          </NavLink>
          
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;