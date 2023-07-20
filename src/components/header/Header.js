import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header className="Header">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="./index.html">
          <img
            className="main-nav-logo-image"
            src="/assets/img/logo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
