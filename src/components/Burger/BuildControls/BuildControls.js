import React from 'react';
import c from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={c.BldCtrls}>
    {controls.map(ctrl => <BuildControl key={ctrl.label} label={ctrl.label} />)}
  </div>
);
 
export default buildControls;