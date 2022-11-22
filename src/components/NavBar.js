import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline",
  width: "70px",
  padding: "4px",
  margin: "0 6px 6px",
  color: "black",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{ background: "yellow" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Day/1"
        exact
        style={linkStyles}
        activeStyle={{ background: "yellow" }}
      >
        Monday
      </NavLink>
      <NavLink
        to="/Day/2"
        exact
        style={linkStyles}
        activeStyle={{ background: "yellow" }}
      >
        Tuesday
      </NavLink>
      <NavLink
        to="/Day/3"
        exact
        style={linkStyles}
        activeStyle={{ background: "yellow" }}
      >
        Wednesday
      </NavLink>
      <NavLink
        to="/Day/4"
        exact
        style={linkStyles}
        activeStyle={{ background: "yellow" }}
      >
        Thursday
      </NavLink>
      <NavLink
        to="/Day/5"
        exact
        style={linkStyles}
        activeStyle={{ background: "yellow" }}
      >
        Friday
      </NavLink>
      <NavLink
        to="/Day/6"
        exact
        style={linkStyles}
        activeStyle={{ background: "yellow" }}
      >
        Saturday
      </NavLink>
      <NavLink
        to="/Day/7"
        exact
        style={linkStyles}
        activeStyle={{ background: "yellow" }}
      >
        Sunday
      </NavLink>
      <NavLink
        to="/Edit"
        exact
        style={linkStyles}
        activeStyle={{ background: "yellow" }}
      >
        Edit Activities
      </NavLink>
    </div>
  );
}

export default NavBar;
