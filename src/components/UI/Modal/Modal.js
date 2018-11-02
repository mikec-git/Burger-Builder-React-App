import React from 'react';
import c from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => ( 
  <>
    <Backdrop 
      show={props.show}
      clicked={props.modalClosed} />
    <div 
      className={c.Modal + ' ' + (props.show ? c.Modal_visible : c.Modal_hidden)}>
      {props.children}
    </div>
  </>
);
 
export default modal;