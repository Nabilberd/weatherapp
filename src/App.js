import React from 'react';
import loadable from '@loadable/component'
import {Provider} from 'react-redux';
import store from './store';
import './assets/styles/index.css';

const Home = loadable(() => import('./pages/Home'));

export default () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
