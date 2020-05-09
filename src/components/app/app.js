import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import Row from "../row";
import {PersonDetails, PersonList, PlanetList, StarshipList} from "../sw-components";

export default class App extends Component{

  swapiService = new SwapiService();

  render() {

    return (
      <div>
        <Header/>
        {/*<RandomPlanet/>*/}
        {/*<PeoplePage />*/}
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