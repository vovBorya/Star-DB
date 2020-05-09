import React, { Component } from 'react';

import './item-list.css';
import Loader from "../loader";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

const ItemList = (props) => {

  const { data, onItemSelected } = props

  const items = data.map((item) => {
    const { id } = item;

    const label = props.children(item);
    return (
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ErrorBoundry>
      <ul className="item-list list-group">
        {items}
      </ul>
    </ErrorBoundry>
  );
}

const withData = (View, getData) => {
  return class extends Component{

    state = {
      data: null,
    }

    componentDidMount() {

      getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }

    render() {

      const { data } = this.state;

      if (!data) {
        return <Loader />
      }

      return <View {...this.props} data={data}/>
    }
  }
}

const { getAllPerson } = new SwapiService();

export default withData(ItemList, getAllPerson);
