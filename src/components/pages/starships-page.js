import React from "react";
import ErrorBoundry from "../error-boundry";
import { StarshipList } from "../sw-components";
import { withRouter } from 'react-router-dom'

const StarshipsPage = ({ history }) => (
  <ErrorBoundry>
    <StarshipList
      onItemSelected={(itemId) => {
        const newPath = `/starships/${itemId}`;
        history.push(newPath);
      }}
    />
  </ErrorBoundry>
)

export default withRouter(StarshipsPage)