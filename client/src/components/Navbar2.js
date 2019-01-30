import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar2 = ({onLogout, onBrowse, goHome, addNew, user}) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link
        className="navbar-brand"
        to="/">
        DigFiction
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <button
            className="btn btn-link text-secondary"
            href=""
            onClick={onBrowse}>
            DF Community
          </button>
        </li>
        <li className="nav-item">
          <NavLink
            className={`nav-link text-secondary ${window.location.pathname === "/About" ? "text-info" : ""}`}
            to="/About">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-link text-secondary"
            href=""
            onClick={goHome}>
            Your Plot
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-link text-secondary"
            href=""
            onClick={addNew}>
            Add Fiction
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-link text-secondary"
            href=""
            onClick={onLogout}>
            Logout
          </button>
          </li>
      </ul>
      <ul className="nav ml-auto">
          <li className="nav-item">
          <NavLink
            className="nav-link text-primary"
            to="/UserHome">
          Hi, {user}
          </NavLink>
        </li>
        </ul>
    </nav>
  )
}


export default Navbar2;