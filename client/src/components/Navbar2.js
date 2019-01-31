import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar2 = ({goLogout, goBrowse, goHome, goAbout, goDig, user}) => {

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
            onClick={goHome}>
            Your Plot
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-link text-secondary"
            href=""
            onClick={goDig}>
            Add Fiction
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-link text-secondary"
            href=""
            onClick={goLogout}>
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