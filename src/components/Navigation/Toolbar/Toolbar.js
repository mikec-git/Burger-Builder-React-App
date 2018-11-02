import React from 'react';
import c from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../Menu/Menu';

const toolbar = (props) => ( 
  <header className={c.Toolbar}>
    <Menu show={props.open} />
    <Logo height="80%"/>
    <nav className={c.Toolbar__Nav}>
      <NavigationItems />
    </nav>
  </header>
);
 
export default toolbar;