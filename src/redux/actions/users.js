import history from '../../history'
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


export const updateUserAvatarSuccess = (user) => ({
    type:UPDATE_USER_AVATAR,
    user
})

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

export const portfolioUpdateRequest = () => ({
    type: PORTFOLIO_UPDATE_REQUEST
})

export const portfolioUpdateSuccess = (user) => ({
    type: PORTFOLIO_UPDATE_SUCCESS,
    user
})

export const portfolioUpdateFailure = () => ({
    type: PORTFOLIO_UPDATE_FAILURE
})

export const profilePictureUploadRequest = () => ({
    type: PROFILE_PICTURE_UPLOAD_REQUEST
})

export const profilePictureUploadSuccess = (user) => ({
    type: PROFILE_PICTURE_UPLOAD_SUCCESS,
    user
})

export const profilePictureUploadFailure = () => ({
    type: PROFILE_PICTURE_UPLOAD_FAILURE
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
                    dispatch(loginSuccess(result.user, result.token));
                    if(result.user.major === 'artist'){
                        history.push('/artist')
                    }else {
                        history.push('/portfolio')
                    }
                } else {
                    dispatch(loginFailure())
                    alert(result.error)
                }
            })
        )
    }
}

export const signup = (payload) => { // {email, password, portfolio}
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
                    history.push('/info')
                } else {
                    dispatch(signupFailure())
                    alert(result.error)
                }
            })
        )
    }
}

export const updatePortfolio = (portfolio, token) => {
    return dispatch => {
        dispatch(portfolioUpdateRequest())
        const request = {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
                Authorization: token
            },
            body: JSON.stringify(portfolio)
        }
        fetch(`/api/users/portfolio`, request).then(response =>
            response.json().then(result => {
                if (response.status === 201) {
                    dispatch(portfolioUpdateSuccess(result))
                    history.push('/portfolio')
                } else {
                    dispatch(portfolioUpdateFailure())
                    alert(result.error)
                }
            }))
    }
}

export const uploadProfilePicture = (image, token) => {
    return dispatch => {
        dispatch(profilePictureUploadRequest())
        const request = {
            method: "POST",
            headers: {
                Authorization: token
            },
            body: image
        }
        fetch('/api/users/profilePicture', request).then(response =>
            response.json().then(result => {
                if (response.status === 201) {
                    dispatch(profilePictureUploadSuccess(result))
                } else {
                    dispatch(profilePictureUploadFailure())
                    alert(result.error)
                }
            }))
    }
}
/**
 * update user avatar and update state
 * @param {File} form 
 * @param {String} token 
 * @param {Function} dispatch 
 */
export async function updateUserAvatar(form,token,dispatch) {
    const request = {
        method:"POST",
        headers:{
            Authorization:token
        },
        body:form
    }
    try {
        let res = await fetch('/api/users/uploadAvatar',request);
        if(res.status === 201){
            let result = await res.json();
            dispatch(updateUserAvatarSuccess(result))
        }
    } catch (e) {
        console.log(e)     
    }
}
/**
 * upload blog and update state
 * @param {File} form 
 * @param {String} token 
 * @param {Function} dispatch 
 */
export async function uploadBlog(form,token,dispatch) {
    const request = {
        method:"POST",
        headers:{
            Authorization:token
        },
        body:form
    }
    try {
        let res = await fetch('/api/users/uploadBlog',request);
        if(res.status === 201){
            let result = await res.json();
            dispatch(updateUserAvatarSuccess(result))
        }
    } catch (e) {
        console.log(e)
    }
}
/**
 *  delete blog and update state
 * @param {Object} form 
 * @param {String} token 
 * @param {Function} dispatch 
 */
export async function deleteBlog(form,token,dispatch) {
    const request = {
        method:"POST",
        headers:{
            Authorization:token,
            "Content-Type": 'application/json'
        },
        body:JSON.stringify(form)
    }
    try {
        let res = await fetch('/api/users/deleteBlog',request);
        if(res.status === 201){
            let result = await res.json();
            dispatch(updateUserAvatarSuccess(result))
        }
    } catch (e) {
        console.log(e)
    }
}

/**
 * update user info and update state
 * @param {Object} formData 
 * @param {String} token 
 */
export const updateUserInfo = (formData,token) => {
    return dispatch => {
        const request = {
            method:"POST",
            headers:{
                Authorization:token,
                "Content-Type": 'application/json'
            },
            body:JSON.stringify(formData)
        }
        fetch('/api/users/updateUserInfo',request).then((response) => {
            response.json().then(result => {
                if (response.status === 201) {
                    dispatch(profilePictureUploadSuccess(result))
                }
            })
        })
    }
}

export const logout = (token) => {
    return dispatch => {
        dispatch(logoutRequest())
        const request = {
            method: "POST",
            headers: {
                Authorization: token
            }
        }
        fetch('/api/users/logout', request)
        dispatch(logoutSuccess())
        history.push('/')
    }
}
