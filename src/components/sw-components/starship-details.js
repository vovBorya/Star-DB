import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import { withSwapiService } from '../hoc-helper';

const StarshipDetails = ({ itemId, swapiService }) => {

  const { getStarship, getStarshipImage } = swapiService
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="model" label="Model" />
    </ItemDetails>
  )
}

export default withSwapiService(StarshipDetails);