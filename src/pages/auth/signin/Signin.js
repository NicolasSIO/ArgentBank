import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { accountService } from "@/_services/account.service";

import "./signin.css";

const Signin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "tony@stark.com",
    password: "password123",
  });

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    axios
      .post("http://localhost:3001/api/v1/user/login", credentials)
      .then(
        (res) => accountService.saveToken(res.data.body.token),
        navigate("/user")
      )
      .catch((error) => console.log(error));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default Signin;
