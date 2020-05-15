import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

export default class App extends Component{

  swapiService = new SwapiService();

  state = {
    activePage: ''
  }

  onPageClick = (page) => {
    this.setState({
      activePage: page
    })
  }

  render() {

    const { activePage } = this.state;

    let content;

    switch (activePage) {
      case 'people':
        content = <PeoplePage />;
        break;
      case 'planets':
        content = <PlanetsPage />;
        break;
      case 'starships':
        content = <StarshipsPage />;
        break;
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div>
            <Header onPageClick={this.onPageClick} />
            {/*<RandomPlanet />*/}
            {content}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};