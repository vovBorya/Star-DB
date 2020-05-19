import React from "react";

const SecretPage = ({ isLoggedIn }) => {

  if(isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3>This page is secret</h3>
      </div>
    )
  }

  return (
    <div>
      <h2>You should login</h2>
    </div>
  )
}

export default SecretPage;