import React, { Component } from 'react';

import './random-planet.css';

import Loader from '../loader';
import PlanetView from './planet-view';
import ErrorIndicator from '../error-indicator/index';

import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }

  onError = (error) => {
    this.setState({
      error: true
    });
  };

  updatePlanet() {
    const id = /*Math.floor(Math.random() * 25) + 2*/ 12000;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {

    const { planet, loading, error } = this.state;

    const loader = loading ? <Loader /> : null;
    const content = !loading ? <PlanetView planet={ planet }/>: null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { loader }
        { errorMessage }
        { content }
      </div>

    );
  };
};
