import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false
  }

  componentDidMount () {
    axios.get('https://react-my-burger-app-7c3f4.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch();

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

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'M',
        address: {
          street: 'Test st.',
          zipCode: 'h05020',
          country: 'Canada'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
        console.log(error);
      });
  }

  render() {
    const disabledInfo = {...this.state.ingredients};

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    
    let orderSummary = null;
    let burger = <Spinner />
    
    if(this.state.ingredients){
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler} 
            disabled={disabledInfo}
            purchaseable={this.state.purchaseable}
            price={this.state.totalPrice}
            ordered={this.purchaseHandler} />
        </>);
      orderSummary = <OrderSummary 
      ingredients={this.state.ingredients}
      purchaseCanceled={this.purchaseCancelHandler}
      purchaseContinued={this.purchaseContinueHandler}
      price={this.state.totalPrice.toFixed(2)} />;
    }
    
    if(this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal 
          show={this.state.purchasing} 
          modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);