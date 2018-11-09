import React, { Component } from 'react';
import c from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render(){
    return ( 
      <>
        <Backdrop 
          show={this.props.show}
          clicked={this.props.modalClosed} />
        <div 
          className={c.Modal + ' ' + (this.props.show ? c.Modal_visible : c.Modal_hidden)}>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;