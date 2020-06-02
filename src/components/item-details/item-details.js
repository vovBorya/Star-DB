import React, { Component } from 'react';

import './item-details.css';
import ItemView from "./item-view";
import Loader from "../loader";

const Record = ({item, field, label}) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{ item[field] }</span>
  </li>
)
export {
  Record
}

const SelectItemMsg = () => (
  <div>
    <p>Please, select any item to see its details</p>
  </div>
)

export default class ItemDetails extends Component {

  state = {
    item: null,
    updating: true,
    image: null
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
    const { itemId, getData, getImageUrl } = this.props;
    if (itemId) {
      getData(itemId)
        .then((item) => {
          this.setState({
            item,
            updating: false,
            image: getImageUrl(item)
          })
        })
    }
  }

  render() {

    const { item, updating, image } = this.state;

    const hasData = !updating;

    const loader = ( updating && item ) ? <Loader />: null;
    const content = hasData ? <ItemView item={ item } image={image} children={this.props.children}/>: null;
    const selectItemMsg = !item ? <SelectItemMsg />: null;

    return (
      <div className="item-details card">
        {selectItemMsg}
        {loader}
        {content}
      </div>
    )
  }
}
