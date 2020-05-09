import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = new SwapiService()

const PersonDetails = ({ itemId }) => {
  return(
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth year" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
  )
};
const PlanetDetails = ({ itemId }) => {
  return(
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
const StarshipDetails = ({ itemId }) => {
  return(
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

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}