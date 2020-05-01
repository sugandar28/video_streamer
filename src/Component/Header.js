import React from "react";
import { Link } from "react-router-dom";
import { GoogleAuthentication } from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu"></div>
      <Link to="/" className="item">
        All Streams
      </Link>
      <GoogleAuthentication />
    </div>
  );
};

export { Header };
