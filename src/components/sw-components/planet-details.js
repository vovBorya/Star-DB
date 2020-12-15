import React from "react";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import {withSwapiService} from '../hoc-helpers';

const PlanetDetails = (props) => (
  <ItemDetails {...props} >
    <Record field="population" label="Population"/>
    <Record field="diameter" label="Diameter"/>
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getPlanet,
  getImageUrl: swapiService.getPlanetImage
});

export default withSwapiService(mapMethodsToProps)(PlanetDetails);