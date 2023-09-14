import React, { useState } from "react";

import { accountService } from "@/_services/account.service";
import "./user.css";
import { useSelector, useDispatch } from "react-redux";

const User = () => {
  const [isClicked, setIsClicked] = useState(true);
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    firstName: user.credentials.firstName,
    lastName: user.credentials.lastName,
  });

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
        dispatch({
          type: "User/setData",
          payload: {
            firstName: res.data.body.firstName,
            lastName: res.data.body.lastName,
          },
        });
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
            {user.credentials.firstName} {user.credentials.lastName}
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
