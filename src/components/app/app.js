import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {StarshipDetails} from "../sw-components";

export default class App extends Component{

  swapiService = new SwapiService();

  state = {
    isLoggedIn: false
  }

  onLogin = (status) => {
    this.setState({
      isLoggedIn: status
    })
  }

  render() {

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div>
              <Header />
                <div className="stardb-app">
                <RandomPlanet updateInterval={5000}/>

                <Switch>
                  <Route
                    path="/"
                    render={() => <h2>Welcome to StarDB</h2>}
                    exact={true}
                  />
                  <Route path="/people/:id?" component={PeoplePage} />
                  <Route path="/planets/:id?" component={PlanetsPage} />
                  <Route path="/starships" exact component={StarshipsPage} />
                  <Route
                    path="/starships/:id"
                    render={({match}) => {
                      return <StarshipDetails itemId={match.params.id}/>
                    }}
                  />
                  <Route
                    path="/secret-page/"
                    render={() => (
                      <SecretPage isLoggedIn={isLoggedIn}/>
                    )}
                  />
                  <Route
                    path="/login/"
                    render={() => (
                      <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>
                    )}
                  />

                  <Route render={() => (
                    <h2>Page is not found</h2>
                  )}/>
                </Switch>
              </div>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};