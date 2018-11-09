import React from 'react';
import c from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';
import PropTypes from 'prop-types';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={c.BldCtrls}>
    <p 
      className={c.BldCtrls__Price}>
      Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button 
      className={c.BldCtrls__OrderBtn} 
      disabled={!props.purchaseable}
      onClick={props.ordered}>
      {props.isAuth ? 'Order Now' : 'Sign Up to Order'}</button>
  </div>
);

buildControls.propTypes = {
  price: PropTypes.number,
  disabled: PropTypes.object,
  purchaseable: PropTypes.bool
}
 
export default buildControls;