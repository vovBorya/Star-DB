import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import ItemView from "./item-view";
import Loader from "../loader";

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    updating: true
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        updating: true
      })
      this.updateItem();
    }
  }

  updateItem () {
    const itemId = this.props;
    if (itemId) {
      this.swapiService
        .getPerson(this.props.itemId)
        .then((item) => {
          this.setState({
            item,
            updating: false
          })
        })
    }
  }

  render() {

    const { item, updating } = this.state;

    const hasData = !updating;

    const loader = updating ? <Loader />: null;
    const content = hasData ? <ItemView item={ item } />: null;

    return (
      <div className="item-details card">
        {loader}
        {content}
      </div>
    )
  }
}
