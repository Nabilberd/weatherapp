import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Home from './pages/Home';

import './assets/styles/index.scss'

export default () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
