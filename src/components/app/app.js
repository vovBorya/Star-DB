import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import Row from "../row";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";

export default class App extends Component{

  render() {

    return (
      <div>
        <Header/>
        {/*<RandomPlanet/>*/}
        {/*<PeoplePage />*/}
        <PersonDetails itemId={3} />
        <PlanetDetails itemId={5} />
        <StarshipDetails itemId={9} />

        <PersonList >
          { ({name}) => <span>{name}</span> }
        </PersonList>
        <PlanetList >
          { ({name}) => <span>{name}</span> }
        </PlanetList>
        <StarshipList >
          { ({name}) => <span>{name}</span> }
        </StarshipList>
      </div>
    );
  }
};