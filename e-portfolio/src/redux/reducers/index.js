import { combineReducers } from 'redux'
import userAuth from './users'
import imageStore from './images'
import portfolio from './portfolio'

export default combineReducers({
    userAuth,
    imageStore,
    portfolio
})