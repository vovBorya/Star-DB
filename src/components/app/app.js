import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component{

  swapiService = new SwapiService();

  render() {
    return (
      <div>
        <Header/>
        {/*<RandomPlanet/>*/}
        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={7}/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={8}/>
          </div>
        </div>
      </div>
    );
  }
};