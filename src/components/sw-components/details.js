import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const PersonDetails = ({ itemId }) => {
  return(
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {
          return (
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
        }
      }
    </SwapiServiceConsumer>
  )
};

const PlanetDetails = ({ itemId }) => {
  return(
    <SwapiServiceConsumer> {
      ({getPlanet, getPlanetImage}) => {
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
      }
    }
    </SwapiServiceConsumer>
  )
};

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

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}