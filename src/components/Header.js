import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <h1>My Blog</h1>
      <div className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top Stories
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          New Stories
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          best Stories
        </NavLink>
      </div>
    </Fragment>
  );
};

export default Header;
