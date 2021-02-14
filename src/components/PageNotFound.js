import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Fragment>
      <p>
        Page not found. Go to <Link to="/">Home</Link>
      </p>
    </Fragment>
  );
};

export default PageNotFound;
