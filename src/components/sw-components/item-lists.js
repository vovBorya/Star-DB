import React from "react";
import ItemList from "../item-list/item-list";
import { withData, withChildFunction } from "../hoc-helper";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllPerson,
        getAllPlanets,
        getAllStarships} = swapiService

const renderPersonName = ({name, gender}) => <span>{name}, gender: {gender}</span>
const renderPlanetName = ({name, population}) => <span>{name}, population: {population}</span>
const renderStarshipName = ({name, model}) => <span>{name}, model: {model}</span>

const PersonList = withData(withChildFunction(ItemList, renderPersonName), getAllPerson);
const PlanetList = withData(withChildFunction(ItemList, renderPlanetName), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, renderStarshipName), getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}