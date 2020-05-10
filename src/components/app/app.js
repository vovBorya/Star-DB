import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from "../people-page";
import {
  PersonDetails,
  PersonList,
  PlanetDetails,
  PlanetList,
  StarshipDetails,
  StarshipList
} from "../sw-components";
import Row from "../row";

export default class App extends Component{

  render() {

    const peopleList = (
      <PersonList >
      { ({name}) => <span>{name}</span> }
      </PersonList>
    );

    const personDetails = (
      <PersonDetails itemId={3} />
    )

    return (
      <div>
        <Header/>
        {/*<RandomPlanet/>*/}
        <PeoplePage />
      </div>
    );
  }
};