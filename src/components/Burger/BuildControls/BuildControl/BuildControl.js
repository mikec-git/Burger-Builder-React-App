import React from 'react';
import c from './BuildControl.module.scss';

const buildControl = (props) => (
  <div className={c.BldCtrl}>
    <div className={c.BldCtrl__Label}>{props.label}</div>
    <button className={c.BldCtrl__Btn +' '+ c.BldCtrl__Btn_less}>Less</button>
    <button className={c.BldCtrl__Btn +' '+ c.BldCtrl__Btn_more}>More</button>
  </div>
);
 
export default buildControl;