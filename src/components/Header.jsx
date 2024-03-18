import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-7">
      <nav className="flex justify-evenly">
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "red" : "black",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/color-picker"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "red" : "black",
            };
          }}
        >
          color picker
        </NavLink>
        <NavLink
          to="/effect"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "red" : "black",
            };
          }}
        >
          screen
        </NavLink>
        <NavLink to="/user"
          className={({ isActive }) => `${isActive ? "text-orange-600" : ""}`}
        >user</NavLink>
      </nav>
    </div>
  );
};

export default Header;
