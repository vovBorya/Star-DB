import React, { Component } from 'react';

import './random-planet.css';

import Loader from '../loader';
import PlanetView from './planet-view';

import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  }

  componentDidMount() {
    this.updatePlanet();
    setInterval(this.updatePlanet, 5000);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {

    const { planet, loading } = this.state;

    /*if(loading) {
      return <Loader/>
    }*/

    const loader = loading ? <Loader /> : null;
    const content = !loading ? <PlanetView planet={ planet }/>: null;

    return (
      <div className="random-planet jumbotron rounded">
        { loader }
        { content }
      </div>

    );
  };
};
