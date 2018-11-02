import React, { Component } from 'react';
import bem from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
          open={this.sideDrawerOpenedHandler}/>
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler} />
        <main className={bem.Layout}>
          {this.props.children}
        </main>
      </>
    )
  }
} 

export default Layout;