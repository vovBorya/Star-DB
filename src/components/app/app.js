import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from "../people-page";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundry from "../error-boundry";

export default class App extends Component{

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={}>
          <div>
            <Header/>
            {/*<RandomPlanet/>*/}
            <PeoplePage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};