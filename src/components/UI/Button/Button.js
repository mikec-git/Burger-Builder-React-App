import React from 'react';
import c from './Button.module.scss';

const button = (props) => (
  <button
    className={[c.Btn, c[`Btn__${props.btnType}`]].join(' ')}
    onClick={props.clicked}>
    {props.children}</button>
);
 
export default button;