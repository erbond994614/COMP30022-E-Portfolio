import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import configureStore from './redux/store'
import App from './App';
import history from './history'
// import { createBrowserHistory } from 'history'

const initialState = {};
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
