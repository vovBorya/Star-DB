import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ItemDetails from "../item-details";

export default class App extends Component{

  swapiService = new SwapiService();

  render() {

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={8}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
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