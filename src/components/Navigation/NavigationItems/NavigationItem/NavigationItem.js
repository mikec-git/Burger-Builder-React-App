import React from 'react';
import c from './NavigationItem.module.scss';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
  <li className={c.NavigationItem}>
    <NavLink 
      className={c.NavigationItem__Link}
      activeClassName={c.NavigationItem__Link_active}
      to={props.link} 
      exact={props.exact}>
      {props.children}
    </NavLink>
  </li>
);
 
export default navigationItem;