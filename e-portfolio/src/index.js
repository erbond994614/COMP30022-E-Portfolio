import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import store from './redux/store/index'
import App from './App';
import history from './history'

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
