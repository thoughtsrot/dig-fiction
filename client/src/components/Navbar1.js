import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar1 = props => {
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
            Community
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
            className={`nav-link text-secondary ${window.location.pathname === "/" ? "text-info" : ""}`}
            to="/">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className={`nav-link text-secondary ${window.location.pathname === "/Register" ? "text-info" : ""}`} 
            to="/Register">
            Join DF
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar1;
