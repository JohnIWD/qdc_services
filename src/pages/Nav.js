import React, { useState } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import '../styles/Nav.css'
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav>
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            < NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/landscaping">Landscaping</NavLink>
          </li>
          <li>
            <NavLink to="/gutter">Gutter Cleaning</NavLink>
          </li>
          <li>
            <NavLink to="/lighting">Outdoor Lighting</NavLink>
          </li>
          <li>
            <NavLink to="/painting">Painting</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;