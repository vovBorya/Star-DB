import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export default () => {

  const menuItems= [
    {link: 'people/', label: 'People'},
    {link: 'planets/', label: 'Planets'},
    {link: 'starships/', label: 'Starships'},
    {link: 'secret-page', label: 'Secret Page'},
    {link: 'login', label: 'Login'}
  ];

  return (
    <div className="header d-flex">
      <h2>
        <Link to="/">
          Star DB
        </Link>
      </h2>
      <ul className="d-flex">
        {
          menuItems.map(({link, label}) => (
            <li>
              <Link to={`/${link}`}>
                {label}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};