import React, { Component } from 'react';
import Layout from '../../hoc/Layout/Layout';
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import Checkout from '../Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from '../../containers/Orders/Orders';
import Auth from '../Auth/Auth';
import Logout from '../Auth/Logout/Logout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;