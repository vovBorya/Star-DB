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

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                    withData(
                      withChildFunction(renderPersonName)(
                        ItemList)));

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                    withData(
                      withChildFunction(renderPlanetName)(
                        ItemList)));

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                      withData(
                        withChildFunction(renderStarshipName)(
                          ItemList)));

export {
  PersonList,
  PlanetList,
  StarshipList
}