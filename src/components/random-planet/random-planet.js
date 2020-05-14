import React, { Component } from 'react';

import './random-planet.css';

import Loader from '../loader';
import PlanetView from './planet-view';
import ErrorIndicator from '../error-indicator/index';

import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 3000
  }

  static propTypes = {
    updateInterval: (props, propName, componentName) => {
      const value = props[propName];

      if (typeof value === 'number' && !isNaN(value)) return null;
      return new TypeError(`${componentName}: ${propName} must be number`);
    }
  }

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    const { updateInterval } = this.props
    this.updatePlanet();
    this.interval =  setInterval(this.updatePlanet, updateInterval);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    })
  }

  onError = (error) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {

    const { planet, loading, error } = this.state;

    const hasData = !loading && !error;

    const loader = loading ? <Loader /> : null;
    const content = hasData ? <PlanetView planet={ planet }/>: null;
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
