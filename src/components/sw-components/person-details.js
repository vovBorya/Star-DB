import React from "react";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import { withSwapiService } from '../hoc-helper'

const PersonDetails = ({ itemId, swapiService }) => {

  const { getPerson, getPersonImage } = swapiService
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
};

export default withSwapiService(PersonDetails);