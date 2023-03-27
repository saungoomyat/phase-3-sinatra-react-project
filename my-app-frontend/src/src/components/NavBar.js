import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline",
  width: "70px",
  padding: "4px",
  margin: "0 6px 6px",
  color: "black",
};

function NavBar({days}) 
{


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
      {days.map(({ id, day }) => (
        <NavLink
          key={id}  
          to= {`/days/${id}`}
          exact
          style={linkStyles}
          activeStyle={{ background: 'yellow' }}
        >
          {day}
        </NavLink>
      ))}
      <NavLink
        to="/AddDay"
        exact
        style={linkStyles}
        activeStyle={{ background: "yellow" }}
      >
        Add Day
      </NavLink>
    
    </div>
  );
}

export default NavBar;



