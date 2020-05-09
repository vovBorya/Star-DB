import React, { Component } from 'react';

import './item-list.css';
import Loader from "../loader";
import ErrorBoundry from "../error-boundry";

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

const withData = (View) => {
  return class extends Component{

    state = {
      data: null,
    }

    componentDidMount() {
      const { getData } = this.props;

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

export default withData(ItemList);
