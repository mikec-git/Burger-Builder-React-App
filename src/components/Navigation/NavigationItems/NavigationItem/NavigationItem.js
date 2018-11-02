import React from 'react';
import c from './NavigationItem.module.scss';

const navigationItem = (props) => (
  <li className={c.NavigationItem}>
    <a 
      className={props.active ? [c.NavigationItem__Link, c.NavigationItem__Link_active].join(' ') : c.NavigationItem__Link} 
      href={props.link}>
      {props.children}</a>
  </li>
);
 
export default navigationItem;