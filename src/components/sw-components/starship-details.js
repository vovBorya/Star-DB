import {SwapiServiceConsumer} from "../swapi-service-context";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";

const StarshipDetails = ({ itemId }) => {
  return(
    <SwapiServiceConsumer> {
      ({getStarship, getStarshipImage}) => {
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
    }
    </SwapiServiceConsumer>
  )
}

export default StarshipDetails;