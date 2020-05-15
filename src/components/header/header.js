import React from 'react';

import './header.css';

export default class Header extends React.Component{

  state = {
    activePage: 'people'
  }

  menuItems = [
    {name: 'people', label: 'People'},
    {name: 'planets', label: 'Planets'},
    {name: 'starships', label: 'Starships'}
  ]


  render() {

    const { onItemMenuClick, activePage } = this.props;

    const menuItems = this.menuItems.map(({ name, label }) => {
      const isActive = activePage === name;

      const className = (isActive) ? 'activeItem': '';

      return (
        <li
          className={className}
          onClick={() => onItemMenuClick(name)}
        >
          <a href="#" >
            {label}
          </a>
        </li>
      )
    })

    return (
      <div className="header d-flex">
        <h2>
          <a href="#">
            Star DB
          </a>
        </h2>
        <ul className="d-flex">
          {menuItems}
        </ul>
      </div>
    );
  }
};