import React from "react";
import ItemList from "../item-list/item-list";
import { withData, withChildFunction, withSwapiService } from "../hoc-helper";
import {
  renderPersonName,
  renderPlanetName,
  renderStarshipName
} from "./render-name";

const mapPersonMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPerson }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPlanets }
}

const mapStarshipMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllStarships }
}

const PersonList = withSwapiService(
                    withData(
                      withChildFunction(ItemList, renderPersonName)),
                    mapPersonMethodsToProps);

const PlanetList = withSwapiService(
                    withData(
                      withChildFunction(ItemList, renderPlanetName)),
                    mapPlanetMethodsToProps);
const StarshipList = withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderStarshipName)),
                      mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
}