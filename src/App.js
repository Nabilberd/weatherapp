import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

export default () => {
  return (
    <Provider store={store}>
      <div>hello</div>
    </Provider>
  );
}
