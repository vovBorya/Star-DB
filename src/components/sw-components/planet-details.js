import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import { withSwapiService } from '../hoc-helper';

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="population" label="Population" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
};

export default withSwapiService(PlanetDetails);