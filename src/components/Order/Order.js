import React from 'react';
import c from './Order.module.scss';

const order = (props) => { 
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName, 
      amount: props.ingredients[ingredientName]
    });
  }
  
  const ingredientOutput = ingredients.map(ig => {
    return <span 
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 .8rem',
          border: '1px solid #ccc',
          padding: '.4rem'
        }}
        key={ig.name}>{ig.name} ({ig.amount})</span>;
  });

  return (
    <div className={c.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>CAD ${Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
};
 
export default order;