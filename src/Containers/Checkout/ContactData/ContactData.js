import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import Button from '../../../components/UI/Button/Button';
import c from './ContactData.module.scss';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

class ContactData extends Component {
  state = { 
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        value: 'fastest',
        validation: {},
        valid: true
      },
    },
    formIsValid: false
  }

  orderHandler = e => {
    const formData = {};
    for (let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value;
    }

    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData
    };

    this.props.onOrderBurger(order);

    e.preventDefault();
  }

  checkValidity(value, rules) {
    let isValid = true;

    if(!rules) return true;

    if(rules.required) { isValid = value.trim() !== '' && isValid; }
    if(rules.minLength) { isValid = value.length >= rules.minLength && isValid; }   
    if(rules.maxLength) { isValid = value.length <= rules.maxLength && isValid; }

    return isValid;
  }

  inputChangedHandler = (e, inputId) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
      [inputId]: {
        ...this.state.orderForm[inputId],
        value: e.target.value,
        valid: this.checkValidity(e.target.value, this.state.orderForm[inputId].validation),
        touched: true
      }
    }

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = !!updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    
    this.setState({ orderForm: updatedOrderForm, formIsValid });
  }

  render() { 
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input 
            key={formElement.id}
            elementType={formElement.config.elementType} 
            elementConfig={formElement.config.elementConfig} 
            value={formElement.config.value} 
            changed={e => this.inputChangedHandler(e, formElement.id)}
            invalid={!formElement.config.valid && formElement.config.touched}
            shouldValidate={formElement.config.validation} />
        ))}
        <Button btnType="Success" clicked={this.orderHandler} disabled={!this.state.formIsValid}>ORDER</Button>
      </form>
    );

    if(this.props.loading) {
      form = <Spinner />
    }

    return ( 
      <div className={c.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));