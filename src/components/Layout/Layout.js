import React from 'react';
import bem from './Layout.module.scss';

const layout = (props) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={bem.Layout}>
      {props.children}
    </main>
  </>
);

export default layout;