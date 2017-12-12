'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root';
import HomeLoader from './components/HomeLoader';

render (
  <Provider store={store}>
    <HomeLoader />
  </Provider>,
  document.getElementById('main')
);
