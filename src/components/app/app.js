import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details";
import Row from "../row";

export default class App extends Component{

  swapiService = new SwapiService();

  render() {

    const {getPerson, getStarship} = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={8}
        getData={getPerson}
      />
    )

    const starshipDetails = (
      <ItemDetails
        itemId={11}
        getData={getStarship}
      />
    )

    return (
      <div>
        <Header/>
        {/*<RandomPlanet/>*/}
        {/*<PeoplePage />*/}

        <Row left={personDetails} right={starshipDetails} />
      </div>
    );
  }
};