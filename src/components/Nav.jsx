// src/components/Nav.jsx

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Socials from "./Socials"; // import your socials component

const BREAKPOINT = 768; // px

function Nav() {
  const [open, setOpen] = useState(false);

  // Close menu on route click
  const handleNavClick = () => setOpen(false);

  // Close on ESC, and unlock scroll
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close if resizing above breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= BREAKPOINT) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="nav-wrap">
      {/* Hamburger */}
      <button
        className={`hamburger ${open ? "is-open" : ""}`}
        aria-label="Toggle navigation"
        aria-controls="primary-navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* Links */}
      <ul
        id="primary-navigation"
        className={`nav-links ${open ? "open" : ""}`}
        onClick={handleNavClick}
      >
        <li>
          <NavLink to="/" end className="glaze gradient-text">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="glaze gradient-text">
            About me
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="glaze gradient-text">
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Divider + Socials */}
      <div className="nav-divider" />
      <div className="nav-socials">
        <Socials />
      </div>

      {/* Optional dark overlay behind mobile menu */}
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
    </div>
  );
}

export default Nav;
