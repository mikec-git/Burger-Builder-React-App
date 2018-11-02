import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import c from './SideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  return ( 
    <>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={c.SideDrawer}>
        <Logo height="11%"/>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
}
 
export default sideDrawer;