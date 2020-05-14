import React from "react";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import { withSwapiService } from '../hoc-helper';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth year" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);