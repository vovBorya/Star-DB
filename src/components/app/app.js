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
import {PersonList, PlanetList, StarshipList} from "../sw-components";

export default class App extends Component{

  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div>
            <Header/>
            {/*<RandomPlanet/>*/}
            <PeoplePage />
            {/*<PlanetDetails itemId={9} />
            <StarshipDetails itemId={9} />*/}
            <PlanetList />
            <StarshipList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};