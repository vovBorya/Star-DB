import React, { Component } from "react";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {PersonDetails, PersonList} from "../sw-components";

export default class PeoplePage extends Component {

  state = {
    selectedItem: 3,
    hasError: false
  }

  onItemSelected = (id) => {
    console.log(id)
    this.setState({
      selectedItem: id
    })
  }

  render() {

    const itemList = (
      <ErrorBoundry>
        <PersonList onItemSelected={this.onItemSelected}/>
      </ErrorBoundry>
    )

    const item = (
      <ErrorBoundry>
        <PersonDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    )

    return(
        <Row left={itemList} right={item} />
    )
  }
}