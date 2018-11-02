import React from 'react';
import burgerLogo from '../../assets/img/burger-logo.png';
import c from './Logo.module.scss';

const logo = (props) => (
  <div className={c.Logo} style={{height: props.height}}>
    <img className={c.Logo__Img} src={burgerLogo} alt="BurgerBuilder Logo"/>
  </div>
);
 
export default logo;