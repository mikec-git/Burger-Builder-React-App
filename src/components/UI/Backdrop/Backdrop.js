import React from 'react';
import c from './Backdrop.module.scss';

const backdrop = (props) => (
  props.show ? <div className={c.Backdrop} onClick={props.clicked}></div> : null
);
 
export default backdrop;