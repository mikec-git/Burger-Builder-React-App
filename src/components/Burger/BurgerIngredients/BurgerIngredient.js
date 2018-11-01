import React, { Component } from 'react';
import bem from './BurgerIngredient.module.scss';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
  
    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={bem.Bread-Bottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={bem.Bread-Top}>
            <div className={bem.Seeds + ' ' + bem.Seeds_1}></div>
            <div className={bem.Seeds + ' ' + bem.Seeds_2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={bem.Meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={bem.Cheese}></div>;
        break;
      case ('salad'):
        ingredient = <div className={bem.Salad}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={bem.Bacon}></div>;
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