import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';

import {Todo} from './Todo';

export const Root = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
