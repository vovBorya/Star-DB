import ItemList from "../item-list/item-list";
import {
  withData,
  withChildFunction,
  withSwapiService,
  compose
} from "../hoc-helpers";

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

const PersonList = compose(
                    withSwapiService(mapPersonMethodsToProps),
                    withData,
                    withChildFunction(renderPersonName)
                   )(ItemList)

const PlanetList = compose(
                    withSwapiService(mapPlanetMethodsToProps),
                    withData,
                    withChildFunction(renderPlanetName)
                   )(ItemList);

const StarshipList = compose(
                      withSwapiService(mapStarshipMethodsToProps),
                      withData,
                      withChildFunction(renderStarshipName)
                     )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
}