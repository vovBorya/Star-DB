import React from "react";
import ItemList from "../item-list/item-list";
import { withData } from "../hoc-helper";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllPerson,
        getAllPlanets,
        getAllStarships} = swapiService

const PersonList = withData(ItemList, getAllPerson);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}