import React, { Component } from 'react';
import c from './BurgerIngredient.module.scss';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
  
    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={c.Bread__Bottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={c.Bread__Top}>
            <div className={c.Seeds + ' ' + c.Seeds_1}></div>
            <div className={c.Seeds + ' ' + c.Seeds_2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={c.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={c.Cheese}></div>;
        break;
      case ('salad'):
        ingredient = <div className={c.Salad}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={c.Bacon}></div>;
        break;
      default:
        ingredient = null;
        break;
    }

    return ingredient;
  }
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;