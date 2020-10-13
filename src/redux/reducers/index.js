import { combineReducers } from 'redux'
import userAuth from './users'
import portfolio from './portfolio'

export default combineReducers({
    userAuth,
    portfolio
})