import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink className={(args) => args.isActive ? 'isActive' : ''} to="/">Home</NavLink>
      <NavLink className={(args) => args.isActive ? 'isActive' : ''} to="/login">Login</NavLink>
      <NavLink className={(args) => args.isActive ? 'isActive' : ''} to="/about">About</NavLink>
    </>
  );
};

export default NavBar;
