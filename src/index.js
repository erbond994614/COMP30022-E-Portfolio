import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router-dom'
import { store, persistor } from './redux/store'
import App from './App';
import history from './history'

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
