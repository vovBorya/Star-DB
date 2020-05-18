import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export default class Header extends React.Component{

  menuItems = [
    {link: 'people', label: 'People'},
    {link: 'planets', label: 'Planets'},
    {link: 'starships', label: 'Starships'}
  ]


  render() {

    const menuItems = this.menuItems.map(({ link, label }) => {

      return (
        <li>
          <Link to={`/${link}/`} >
            {label}
          </Link>
        </li>
      )
    })

    return (
      <div className="header d-flex">
        <h2>
          <Link to="/">
            Star DB
          </Link>
        </h2>
        <ul className="d-flex">
          {menuItems}
        </ul>
      </div>
    );
  }
};