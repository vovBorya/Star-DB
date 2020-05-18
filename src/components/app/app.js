import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import { BrowserRouter as Router, Route } from "react-router-dom";
import {StarshipDetails} from "../sw-components";

export default class App extends Component{

  swapiService = new SwapiService();

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div>
              <Header />
                <div className="stardb-app">
                <RandomPlanet updateInterval={90000}/>

                <Route
                  path="/"
                  render={() => <h2>Welcome to StarDB</h2>}
                  exact={true}
                />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({match}) => {
                    return <StarshipDetails itemId={match.params.id}/>
                  }}
                />
              </div>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};