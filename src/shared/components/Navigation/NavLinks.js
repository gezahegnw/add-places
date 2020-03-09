import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (porps) => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to="/" exact>ALL PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/id/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
