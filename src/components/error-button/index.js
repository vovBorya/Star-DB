import React, { Component } from "react";

export default class ErrorButton extends Component{

  state = {
    renderError: false
  }

  onClickButton = () => {
    this.setState({
      renderError: true
    })
  }

  render() {

    if (this.state.renderError) {
      this.foo.bar = 0;
    }
    return(
      <button
        type="button"
        className="btn btn-danger"
        onClick={this.onClickButton}
      >Throw Error</button>
    )
  }
}