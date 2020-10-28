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
  FILE_UPLOAD_REQUEST,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAILURE
} from "../constants/users";

const initialState = {
        pending: false,
        user: {},
        token: "",
    }

const userAuth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST:
            return {
                pending: true,
                user: {},
                token: ''
            }
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                pending: false,
                user: action.user,
                token: action.token
            }
        case LOGIN_FAILURE:
        case SIGNUP_FAILURE:
        case LOGOUT_SUCCESS:
            return {
                pending: false,
                user: {},
                token: ""
            }
        case LOGOUT_REQUEST:
        case PORTFOLIO_UPDATE_REQUEST:
        case PROFILE_PICTURE_UPLOAD_REQUEST:
        case FILE_UPLOAD_REQUEST:
            return {
                pending: true,
                user: state.user,
                token: state.token
            }
        case PORTFOLIO_UPDATE_SUCCESS:
        case PROFILE_PICTURE_UPLOAD_SUCCESS:
        case FILE_UPLOAD_SUCCESS:
            return {
                pending: false,
                user: action.user,
                token: state.token
            }
        case PORTFOLIO_UPDATE_FAILURE:
        case PROFILE_PICTURE_UPLOAD_FAILURE:
        case FILE_UPLOAD_FAILURE:
            return {
                pending: false,
                user: state.user,
                token: state.token
            }
        default:
            return state
    }
}


export default userAuth;
