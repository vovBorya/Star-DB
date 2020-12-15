import React from "react";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import {withSwapiService} from '../hoc-helpers';

const StarshipDetails = (props) => (
  <ItemDetails {...props} >
    <Record field="manufacturer" label="Manufacturer"/>
    <Record field="model" label="Model"/>
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getStarship,
  getImageUrl: swapiService.getStarshipImage
});

export default withSwapiService(mapMethodsToProps)(StarshipDetails);