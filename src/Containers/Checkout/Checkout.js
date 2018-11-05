import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  constructor(props) {
    super(props);
    let ingredients = {};
    let totalPrice = 0;

    if(this.props.location.state){
      ingredients = this.props.location.state.ingredients;
      totalPrice = this.props.location.state.totalPric;
    }

    this.state = { 
      ingredients,
      totalPrice
    };
  }
    
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }
  
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }
  
  render() { 
    return ( 
      <>
        <div>
          <CheckoutSummary 
            ingredients={this.state.ingredients}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler} />
        </div>
        <Route 
          path={this.props.match.path+'/contact-data'} 
          render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)} />
      </>
    );
  }
}
 
export default Checkout;