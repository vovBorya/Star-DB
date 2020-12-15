import React from "react";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import { PlanetDetails, PlanetList } from "../sw-components";
import { withRouter } from 'react-router-dom'

const PlanetsPage = ({ match, history }) =>{

  const { id } = match.params;

  const itemList = (
    <ErrorBoundry>
      <PlanetList onItemSelected={(id) => history.push(id)}/>
    </ErrorBoundry>
  );

  const item = (
    <ErrorBoundry>
      <PlanetDetails itemId={id}/>
    </ErrorBoundry>
  );

  return (
    <Row left={itemList} right={item}/>
  );
}

export default withRouter(PlanetsPage)