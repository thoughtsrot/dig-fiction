import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar1 = ({goBrowse, goAbout, goLogin}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link 
        className="navbar-brand" 
        to="/UserHome">
        DigFiction
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <button
            className="btn btn-link text-secondary"
            href=""
            onClick={goBrowse}>
            DF Community
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-link text-secondary"
            href=""
            onClick={goAbout}>
            About
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-link text-secondary"
            href=""
            onClick={goLogin}>
            Login
          </button>
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
