import React, { Component } from "react";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import { PlanetDetails, PlanetList } from "../sw-components";

export default class PlanetsPage extends Component {

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
        <PlanetList onItemSelected={this.onItemSelected}/>
      </ErrorBoundry>
    )

    const item = (
      <ErrorBoundry>
        <PlanetDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    )

    return(
      <Row left={itemList} right={item} />
    )
  }
}