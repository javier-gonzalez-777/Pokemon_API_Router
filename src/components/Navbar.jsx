import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <nav>
        <NavLink className={ setActiveClass } to="/">
        Home
        </NavLink>
        {" - "}
        <NavLink className={ setActiveClass } to="/Pokemon">
        Pokemones
        </NavLink>
    </nav>
  )
}

export default Navbar
