import React from 'react';
import c from './Menu.module.scss';

const menu = (props) => (
  <div 
    className={c.Menu}
    onClick={props.show}>
    <span className={c.Menu__Burger}></span>
  </div>
);
 
export default menu;