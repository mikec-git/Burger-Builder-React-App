import React, { Component } from 'react';
import bem from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }
  
  sideDrawerOpenedHandler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer}));
  }

  render() {
    return (
      <>
        <Toolbar 
          open={this.sideDrawerOpenedHandler}
          isAuth={this.props.isAuthenticated} />
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler}
          isAuth={this.props.isAuthenticated} />
        <main className={bem.Layout}>
          {this.props.children}
        </main>
      </>
    )
  }
} 

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);