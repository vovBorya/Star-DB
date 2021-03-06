import React from "react";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import {withSwapiService} from '../hoc-helpers';

const PersonDetails = (props) => (
  <ItemDetails {...props} >
    <Record field="gender" label="Gender" />
    <Record field="birthYear" label="Birth year" />
    <Record field="eyeColor" label="Eye color" />
  </ItemDetails>
)

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getPerson,
  getImageUrl: swapiService.getPersonImage
});

export default withSwapiService(mapMethodsToProps)(PersonDetails);