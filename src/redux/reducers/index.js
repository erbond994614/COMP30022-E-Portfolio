import { combineReducers } from 'redux'
import userAuth from './users'
import portfolioStore from './portfolio'

export default combineReducers({
    userAuth,
    portfolioStore
})