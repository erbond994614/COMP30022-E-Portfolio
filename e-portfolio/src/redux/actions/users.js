import history from '../../history'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from '../constants/users'
import { downloadUserImages } from './images'

export const loginRequest = () => ({
    type: LOGIN_REQUEST
})

export const loginSuccess = (user, token) => ({
    type: LOGIN_SUCCESS,
    user,
    token
})

export const loginFailure = () => ({
    type: LOGIN_FAILURE
})

export const signupRequest = () => ({
    type: SIGNUP_REQUEST
})

export const signupSuccess = (user, token) => ({
    type: SIGNUP_SUCCESS,
    user,
    token
})

export const signupFailure = () => ({
    type: SIGNUP_FAILURE
})

export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
})

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
})

export const login = (payload) => {
    return dispatch => {
        dispatch(loginRequest())
        const request = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(payload)
        }
        fetch('/api/users/login', request).then(response =>
            response.json().then(result => {
                if (response.status === 201) {
                    dispatch(loginSuccess(result.user, result.token))
                    dispatch(downloadUserImages(result.user.email))
                    history.push('/portfolio')
                } else {
                    dispatch(loginFailure())
                    alert(result.error)
                }
            })
        )
    }
}

export const signup = (payload) => {
    return dispatch => {
        dispatch(signupRequest())
        const request = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(payload)
        }
        fetch('/api/users/signup', request).then(response =>
            response.json().then(result => {
                if (response.status === 201) {
                    dispatch(signupSuccess(result.user, result.token))
                    history.push('/portfolio')
                } else {
                    dispatch(signupFailure())
                    alert(result.error)
                }
            })
        )
    }
}