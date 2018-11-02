import React from 'react';
import bem from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <>
    <Toolbar />
    <main className={bem.Layout}>
      {props.children}
    </main>
  </>
);

export default layout;