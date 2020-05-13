import {SwapiServiceConsumer} from "../swapi-service-context";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";

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

export default PersonDetails;