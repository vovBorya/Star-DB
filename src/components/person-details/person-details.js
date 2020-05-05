import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson () {
    const personId = this.props;
    if (personId) {
      this.swapiService
        .getPerson(this.props.personId)
        .then((person) => {
          this.setState({person})
        })
    }
  }

  render() {

    const { person } = this.state;

    if (!person) {
      return (
        <div className="person-details card">
          <span>Please, select a some person from a list</span>
        </div>
      )
    }

    return (
      <div className="person-details card">
        <img className="person-image"
             src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} />

        <div className="card-body">
          <h4>{person.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{person.gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{person.birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{person.eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
