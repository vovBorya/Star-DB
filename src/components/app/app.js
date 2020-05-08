import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";

export default class App extends Component{

  swapiService = new SwapiService();

  render() {
    return (
      <div>
        <Header/>
        {/*<RandomPlanet/>*/}
        <PeoplePage />
      </div>
    );
  }
};