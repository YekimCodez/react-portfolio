import React from 'react';
import { NavLink } from 'react-router-dom';

function Button() {
  return (
    <NavLink 
        to="/projects" 
        className={({ isActive }) => isActive ? "btn active-btn" : "btn"}
        >
        View Work
    </NavLink>
  );
}

export default Button;
