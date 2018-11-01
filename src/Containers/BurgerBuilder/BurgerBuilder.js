import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false
  }

  addIngredientHandler = (type) => {
    this.setState((prevState, props) => {
      const updatedIngredients = {...prevState.ingredients};
      updatedIngredients[type] += 1;

      return ({ 
        ingredients: updatedIngredients, 
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
      });
    }, this.updatePurchaseState);
  }

  removeIngredientHandler = (type) => {
    this.setState((prevState, props) => {
      const updatedIngredients = {...prevState.ingredients};
      
      if(updatedIngredients[type] <= 0) {
        return;
      }

      updatedIngredients[type] -= 1;

      return ({ 
        ingredients: updatedIngredients, 
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
      });
    }, this.updatePurchaseState);
  }

  updatePurchaseState = () => {
    this.setState((prevState, props) => {
      const ingredients = {...prevState.ingredients};
      const sum = Object.values(ingredients).reduce((prev,curr) => prev+curr);
      return ({ purchaseable: sum > 0 });
    })
  }

  render() {
    const disabledInfo = {...this.state.ingredients};

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler} 
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          price={this.state.totalPrice} />
      </>
    );
  }
}

export default BurgerBuilder;