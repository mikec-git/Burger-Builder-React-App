import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import c from './ContactData.module.scss';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = { 
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (e) => {
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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
        this.setState({ loading: false });
        this.props.history.push({pathname: '/'});

      })
      .catch(error => {
        this.setState({ loading: false });
        console.log(error);
      });

    e.preventDefault();
  }

  render() { 
    console.log(this.props);
    let form = (
      <form>
        <input className={c.ContactData__Input} type="text" name="name" placeholder="Your name" />
        <input className={c.ContactData__Input} type="email" name="email" placeholder="Your email" />
        <input className={c.ContactData__Input} type="text" name="street" placeholder="Your street" />
        <input className={c.ContactData__Input} type="text" name="postal" placeholder="Your postal code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );

    if(this.state.loading) {
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
 
export default ContactData;