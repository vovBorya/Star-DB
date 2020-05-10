import React from "react";
import ItemList from "../item-list/item-list";
import { withData, withChildFunction } from "../hoc-helper";
import SwapiService from "../../services/swapi-service";
import {
  renderPersonName,
  renderPlanetName,
  renderStarshipName
} from "./render-name";

const swapiService = new SwapiService();

const { getAllPerson,
        getAllPlanets,
        getAllStarships} = swapiService

const PersonList = withData(withChildFunction(ItemList, renderPersonName), getAllPerson);
const PlanetList = withData(withChildFunction(ItemList, renderPlanetName), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, renderStarshipName), getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}