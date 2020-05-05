import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import PersonView from "./person-view";
import Loader from "../loader";
import Header from "../header";
import ErrorButton from "../error-button";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    updating: true
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({
        updating: true
      })
      this.updatePerson();
    }
  }

  updatePerson () {
    const personId = this.props;
    if (personId) {
      this.swapiService
        .getPerson(this.props.personId)
        .then((person) => {
          this.setState({
            person,
            updating: false
          })
        })
    }
  }

  render() {

    const { person, updating } = this.state;

    const hasData = !updating;

    const loader = updating ? <Loader />: null;
    const content = hasData ? <PersonView person={ person } />: null;

/*    if (!person) {
      return (
        <div className="person-details card">
          <span>Please, select a some person from a list</span>
        </div>
      )
    }*/

    return (
      <div className="person-details card">
        {loader}
        {content}
        <ErrorButton />
      </div>
    )
  }
}
