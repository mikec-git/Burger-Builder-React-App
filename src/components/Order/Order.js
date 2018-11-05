import React from 'react';
import c from './Order.module.scss';

const order = (props) => ( 
  <div className={c.Order}>
    <p>Ingredients: Salad (1)</p>
    <p>Price: <strong>CAD $5.45</strong></p>
  </div>
);
 
export default order;