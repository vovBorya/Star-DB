import React, { Component } from "react";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import { StarshipDetails, StarshipList } from "../sw-components";

export default class StarshipsPage extends Component {

  state = {
    selectedItem: 3,
    hasError: false
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem })
  }

  render() {

    const itemList = (
      <ErrorBoundry>
        <StarshipList onItemSelected={this.onItemSelected}/>
      </ErrorBoundry>
    )

    const item = (
      <ErrorBoundry>
        <StarshipDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    )

    return(
      <Row left={itemList} right={item} />
    )
  }
}