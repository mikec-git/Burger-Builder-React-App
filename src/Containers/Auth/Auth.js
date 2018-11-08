import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import c from './Auth.module.scss';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class Auth extends Component {
  state = { 
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Email Address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    }
  }

  checkValidity(value, rules) {
    let isValid = true;

    if(!rules) return true;

    if(rules.required) { isValid = value.trim() !== '' && isValid; }
    if(rules.minLength) { isValid = value.length >= rules.minLength && isValid; }   
    if(rules.maxLength) { isValid = value.length <= rules.maxLength && isValid; }

    return isValid;
  }

  inputChangedHandler = (e, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: e.target.value,
        valid: this.checkValidity(e.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    };

    this.setState({ controls: updatedControls });
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
  }

  render() { 
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }

    const form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id} 
        elementType={formElement.config.elementType} 
        elementConfig={formElement.config.elementConfig} 
        value={formElement.config.value} 
        changed={e => this.inputChangedHandler(e, formElement.id)}
        invalid={!formElement.config.valid && formElement.config.touched}
        shouldValidate={formElement.config.validation} />
        ))
        
        return ( 
      <div className={c.Auth}>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType='Success'>Submit</Button>
        </form>
      </div>
    );
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  };
};

export default connect(null, mapDispatchToProps)(Auth);