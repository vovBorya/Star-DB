import React from 'react';

import './header.css';

export default class Header extends React.Component{

  state = {
    activePage: 'people'
  }

  render() {

    const { onItemMenuClick } = this.props;

    const classActiveItem =

    return (
      <div className="header d-flex">
        <h2>
          <a href="#">
            Star DB
          </a>
        </h2>
        <ul className="d-flex">
          <li>
            <a href="#" onClick={() => onItemMenuClick('people')}>
              People
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onItemMenuClick('planets')}>
              Planets
            </a>
          </li>
          <li>
            <a href="#" onClick={() => onItemMenuClick('starships')}>
              Starships
            </a>
          </li>
        </ul>
      </div>
    );
  }
};