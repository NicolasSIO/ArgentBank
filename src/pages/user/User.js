import React, { useState } from "react";

import { accountService } from "@/_services/account.service";
import "./user.css";

const User = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
  });
  const [isClicked, setIsClicked] = useState(true);

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const toggle = () => {
    setIsClicked(!isClicked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    accountService
      .updateName(credentials)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    toggle();
  };

  return (
    <main className="main bg-dark">
      {isClicked ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {credentials.firstName} {credentials.lastName}
          </h1>
          <button className="edit-button" onClick={toggle}>
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <form onSubmit={onSubmit}>
            <h1>Welcome back</h1>
            <div className="group-input">
              <input
                type="text"
                name="firstName"
                onChange={onChange}
                placeholder={credentials.firstName}
              ></input>
              <input
                type="text"
                name="lastName"
                onChange={onChange}
                placeholder={credentials.lastName}
              ></input>
            </div>
            <button className="edit-button" onClick={toggle}>
              Cancel
            </button>
            <button className="edit-button">Edit Name</button>
          </form>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default User;
