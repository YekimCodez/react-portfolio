// src/components/Nav.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "glaze gradient-text active-link" : "glaze gradient-text"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "glaze gradient-text active-link" : "glaze gradient-text"
          }
        >
          About me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "glaze gradient-text active-link" : "glaze gradient-text"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "glaze gradient-text active-link" : "glaze gradient-text"
          }
        >
          Projects
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
