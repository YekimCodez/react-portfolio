// src/Header.js
import React from 'react';
import logo from '../assets/my_logo_cropped_mikedev.png';
import { NavLink } from 'react-router-dom';
import Nav from "./Nav";
import Socials from './Socials';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="logo">
              <span className="glaze-img">
                  <img src={logo} className="logo-img" alt="Logo" />
              </span>
              <span className="text-2x1 font-bold">Mike<span className="dev glaze gradient-text">Dev</span>
                </span>
            </div>
            
            <Nav />
        </nav>
      </div>
    </header>
  );
}

export default Header;