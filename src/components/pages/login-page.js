import React from "react";
import { Redirect } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {

  if (isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div className="jumbotron">
      <h2>Login to see a secret page</h2>
      <button
        className="btn btn-primary"
        onClick={() => onLogin(true)}
      >
        Log in
      </button>
      <button
        className="btn btn-danger"
        onClick={() => onLogin(false)}
      >
        Log out
      </button>
    </div>
  )
}

export default LoginPage;