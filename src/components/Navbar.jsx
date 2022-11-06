import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">MyGit</Link>
      </h1>
      <ul className="navs">
        <li className="nav">
          <Link to="/">Homepage</Link>
        </li>
        <li className="nav">
          <Link to="/error-boundaries">Boundary Page</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
