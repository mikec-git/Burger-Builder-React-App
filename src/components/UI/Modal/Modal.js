import React from 'react';
import c from './Modal.module.scss';

const modal = (props) => ( 
  <div className={c.Modal}>
    {props.children}
  </div>
);
 
export default modal;