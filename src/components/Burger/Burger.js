import React from 'react';
import bem from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {
  // let transformedIngredients = [];
  // Object.keys(props.ingredients).forEach(ingr => {
  //   for(let i = 0; i < props.ingredients[ingr]; i++) {
  //     transformedIngredients.push(<BurgerIngredient key={ingr+i} type={ingr} />)
  //   }
  // });

  // let transformedIngredients = Object.keys(props.ingredients)
  // .map(igKey => {
  //   return [...Array(props.ingredients[igKey])].map((_, i) => {
  //     return <BurgerIngredient key={igKey + i} type={igKey} />;
  //   });
  // })
  // .reduce((arr, el) => {
  //   return arr.concat(el)
  // });
 
  let transformedIngredients = Object.keys(props.ingredients)
  .flatMap(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return ( 
    <div className={bem.Burger}>
      <BurgerIngredient type="bread-top" />
        {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
   );
}

export default burger;