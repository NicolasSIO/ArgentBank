import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { accountService } from "@/_services/account.service";

import Logo from "@/assets/img/logo.png";

import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.User);
  let navigate = useNavigate();
  const logout = () => {
    accountService.logout();
    navigate("/accueil");
  };

  return (
    <header className="Header">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/accueil">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {!accountService.isLogged() ? (
            <Link className="main-nav-item" to="/auth/signin">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          ) : (
            <div className="group-items">
              <p className="userName">
                {user.credentials.firstName} {user.credentials.lastName}
              </p>
              <Link className="main-nav-item" to="/accueil">
                <button className="logout" onClick={logout}>
                  Logout
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
