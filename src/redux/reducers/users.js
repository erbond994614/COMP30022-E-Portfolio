import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    PORTFOLIO_UPDATE_REQUEST,
    PORTFOLIO_UPDATE_SUCCESS,
    PORTFOLIO_UPDATE_FAILURE,
    PROFILE_PICTURE_UPLOAD_REQUEST,
    PROFILE_PICTURE_UPLOAD_SUCCESS,
    PROFILE_PICTURE_UPLOAD_FAILURE,
    UPDATE_USER_AVATAR
} from '../constants/users'

/**
 * Get state from localstorage for keep logged in
 */
const getStateFromLocal = () => {
    let user = window.localStorage.getItem('user')
    let token = window.localStorage.getItem('token')
    return {
        user:user && JSON.parse(user) || {},
        token:token,
        pending:false
    }
}

/**
 * Save state to localstorage
 * @param {String} key setItem Key 
 * @param {String} value setItem Value
 */
const setStateToLocal = (key,value) => {
    debugger
    window.localStorage.setItem(key,value)
}

/**
 * When logout, clear localstorage
 */
const clearStateLocal = () => {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
}

const initialState = {
        pending: false,
        user: {},
        token: ""
    }

const userAuth = (state = getStateFromLocal(), action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST:
            return {
                pending: true,
                user: {},
                token: ''
            }
        case LOGIN_SUCCESS:
            setStateToLocal('user',JSON.stringify(action.user))
            setStateToLocal('token',action.token)
            return {
                pending: false,
                user: action.user,
                token: action.token
            }
        case SIGNUP_SUCCESS:
            return {
                pending: false,
                user: action.user,
                token: action.token
            }
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
        case LOGOUT_SUCCESS:
            clearStateLocal();
            return initialState;
        case LOGOUT_REQUEST:
        case PORTFOLIO_UPDATE_REQUEST:
        case PROFILE_PICTURE_UPLOAD_REQUEST:
            return {
                pending: true,
                user: state.user,
                token: state.token
            }
        case PORTFOLIO_UPDATE_SUCCESS:
            setStateToLocal('user',JSON.stringify(action.user))
            return {
                pending:true,
                user:action.user,
                token:state.token
            }
        case PROFILE_PICTURE_UPLOAD_SUCCESS:
            setStateToLocal('user',JSON.stringify(action.user))
            return {
                pending: false,
                user: action.user,
                token: state.token
            }
        case PORTFOLIO_UPDATE_FAILURE:
        case PROFILE_PICTURE_UPLOAD_FAILURE:
            return {
                pending: false,
                user: state.user,
                token: state.token
            }
        case UPDATE_USER_AVATAR:
            setStateToLocal('user',JSON.stringify(action.user))
            return {
                pending:false,
                user:action.user,
                token:state.token
            }
        default:
            return state
    }
}

export default userAuth