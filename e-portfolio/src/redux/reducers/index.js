import { combineReducers } from 'redux'
import userAuth from './users'
import fileStore from './files'

export default combineReducers({
    userAuth,
    fileStore
})