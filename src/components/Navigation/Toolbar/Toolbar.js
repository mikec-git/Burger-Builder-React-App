import React from 'react';
import c from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => ( 
  <header className={c.Toolbar}>
    <div>MENU</div>
    <Logo height="80%"/>
    <nav className={c.Toolbar__Nav}>
      <NavigationItems />
    </nav>
  </header>
);
 
export default toolbar;