import React from "react";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import { PersonDetails, PersonList } from "../sw-components";
import { withRouter } from 'react-router-dom'

const PeoplePage = ({ match, history }) => {

  const { id } = match.params;

  const itemList = (
    <ErrorBoundry>
      <PersonList onItemSelected={(id) => history.push(id)}/>
    </ErrorBoundry>
  )

  const item = (
    <ErrorBoundry>
      <PersonDetails itemId={id} />
    </ErrorBoundry>
  )

  return(
      <Row left={itemList} right={item} />
  )
}

export default withRouter(PeoplePage);