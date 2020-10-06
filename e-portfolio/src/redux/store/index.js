/* import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createLogger} from 'redux-logger';

import rootReducer from '../reducers/index'

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

export default createStore(rootReducer, compose(applyMiddleware(thunk), devTools)) */

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createLogger} from 'redux-logger';

const logger = createLogger({
    /* https://github.com/evgenyrodionov/redux-logger */
    collapsed: true,
    diff: true
});

const  configureStore = function (initialState) {
    return createStore(
        rootReducer, 
        initialState, 
        composeWithDevTools(
            /* logger must be the last middleware in chain to log actions */
            applyMiddleware(thunk, logger)  
        )
    );
}

export default configureStore;