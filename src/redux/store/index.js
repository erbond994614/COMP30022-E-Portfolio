import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createLogger} from 'redux-logger';

const persistConfig = {
    key:'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger({
    /* https://github.com/evgenyrodionov/redux-logger */
    collapsed: true,
    diff: true
});

export const store = createStore(
    persistedReducer, 
    composeWithDevTools(
        /* logger must be the last middleware in chain to log actions */
        applyMiddleware(thunk, logger)  
    )
);

export const persistor = persistStore(store)