import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {Record} from "../item-details/item-details";

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

    const { getPerson, getPersonImage } = this.swapiService;

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
        <ItemDetails
          itemId={this.state.selectedItem}
          getData={getPerson}
          getImageUrl={getPersonImage}
        >
          <Record field="gender" label="Gender:"/>
          <Record field="eyeColor" label="Eye color:"/>
        </ItemDetails>
      </ErrorBoundry>
    )

    return(
        <Row left={itemList} right={item} />
    )
  }

}