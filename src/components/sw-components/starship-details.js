import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import { withSwapiService } from '../hoc-helper';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="model" label="Model" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);