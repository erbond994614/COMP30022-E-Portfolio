import { combineReducers } from 'redux'
import userAuth from './users'
import imageStore from './images'

export default combineReducers({
    userAuth,
    imageStore
})