import React  from 'react';
import PropTypes from "prop-types";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import './item-list.css';
import ErrorBoundry from "../error-boundry";

const ItemList = (props) => {

  const { data, onItemSelected } = props

  const items = data.map((item) => {
    const { id } = item;

    const label = props.children(item);
    return (
      <>
        <ContextMenuTrigger id={`item-${id}`}>
          <li className="list-group-item"
              key={id}
              onClick={() => onItemSelected(id)}>
            {label}
          </li>
        </ContextMenuTrigger>
        <ContextMenu className='context-menu' id={`item-${id}`}>
          <MenuItem className='context-menu__item' data={{foo: 'bar'}} onClick={() => onItemSelected(id)}>show {label}</MenuItem>
        </ContextMenu>
      </>
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

ItemList.defaultProps = {
  onItemSelected: () => {}
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

export  default ItemList;
