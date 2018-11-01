import React from 'react';
import c from './Modal.module.scss';

const modal = (props) => ( 
  <div 
    className={c.Modal + ' ' + (props.show ? c.Modal_visible : c.Modal_hidden)}>
    {props.children}
  </div>
);
 
export default modal;