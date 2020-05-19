import React from "react";

const LoginPage = ({ isLoggedIn, onLogin }) => {
  return (
    <div className="jumbotron">
      <h2>Login to see a secret page</h2>
      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage;