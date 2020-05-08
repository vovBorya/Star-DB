import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component{

  swapiService = new SwapiService();

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
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPerson}
      >
        {(i) => (
          `${i.name}, ${i.gender}`
        )}
      </ItemList>
    )

    const item = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedItem}/>
      </ErrorBoundry>
    )

    return(
        <Row left={itemList} right={item} />
    )
  }

}