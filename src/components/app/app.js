import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from "../people-page";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import PlanetDetails from "../sw-components/planet-details";
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component{

  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div>
            <Header/>
            <RandomPlanet/>
            <PeoplePage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};