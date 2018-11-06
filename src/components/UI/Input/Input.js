import React from 'react';
import c from './Input.module.scss';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [c.Input__Element];

  if(props.invalid && props.shouldValidate) {
    inputClasses.push(c.Input__Element_invalid);
  }

  switch (props.elementType){
    case ('input'):
      inputElement = <input 
        className={inputClasses.join(' ')} 
        {...props.elementConfig} 
        value={props.value} 
        onChange={props.changed} />;
      break;
    case ('textarea'):
      inputElement = <textarea 
        className={inputClasses.join(' ')} 
        {...props.elementConfig} 
        value={props.value} 
        onChange={props.changed} />;
      break;
    case ('select'):
      inputElement = (
      <select 
        className={inputClasses.join(' ')}
        value={props.value} 
        onChange={props.changed} >
        {props.elementConfig.options.map(option => (
          <option 
            key={option.value}
            value={option.value}>
            {option.displayValue}</option>
        ))}</select>
      );
      break;
    default:
      inputElement = <input 
        className={inputClasses.join(' ')} 
        {...props.elementConfig} 
        value={props.value} 
        onChange={props.changed} />
  }

  return (
    <div className={c.Input}>
      <label className={c.Input__Label}>{props.label}</label>
      {inputElement}
    </div>
  )
};

export default input;