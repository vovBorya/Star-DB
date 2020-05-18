import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component{

  swapiService = new SwapiService();

  state = {
    activePage: ''
  }

  pages = {
    people: <PeoplePage /> ,
    planets: <PlanetsPage /> ,
    starships: <StarshipsPage />
  }


  onItemMenuClick = (page) => {
    this.setState({
      activePage: page
    })
  }

  render() {

    const { activePage } = this.state;

    const content = this.pages[activePage];

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div>
              <Header onItemMenuClick={this.onItemMenuClick} activePage={activePage}/>
              {/*<RandomPlanet />*/}
              {/*{content}*/}

              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};