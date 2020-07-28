import React from "react";
import { Link } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <span>
          <li>
            <Link to="/">Home</Link>
          </li>
        </span>
      </ul>
    </div>
  );
};

export default NavBar;
