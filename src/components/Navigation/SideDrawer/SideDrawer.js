import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import c from './SideDrawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  const attachedClasses = [c.SideDrawer];
  props.open ? attachedClasses.push(c.SideDrawer_open) : attachedClasses.push(c.SideDrawer_close);

  return ( 
    <>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className={[c.SideDrawer__Logo, c.SideDrawer__Logo_mb].join(' ')}>
          <Logo />
        </div>
        <nav>
          <NavigationItems
            isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </>
  );
}
 
export default sideDrawer;