import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component{

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPerson}
      >
        {(i) => (
          `${i.name}, ${i.gender}`
        )}
      </ItemList>
    )

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson}/>
      </ErrorBoundry>
    )

    return(
        <Row left={itemList} right={personDetails} />
    )
  }

}