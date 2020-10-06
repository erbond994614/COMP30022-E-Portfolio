import {
    FILE_UPLOAD_REQUEST,
    FILE_UPLOAD_SUCCESS,
    FILE_UPLOAD_FAILURE,
    FILE_DOWNLOAD_REQUEST,
    FILE_DOWNLOAD_SUCCESS,
    FILE_DOWNLOAD_FAILURE
} from '../constants/files'

const files = JSON.parse(localStorage.getItem("files"))
const initialState = files ? {pending: false, files} : {pending: false, files: {}}

const fileStore = (state = initialState, action) => {
    var newState = state
    switch(action.type) {
        case FILE_UPLOAD_REQUEST:
            return {
                pending: true,
                files: state.files
            }
        case FILE_UPLOAD_SUCCESS:
            newState.files[action.id] = action.file
            return {
                pending: false,
                files: newState.files
            }
        case FILE_UPLOAD_FAILURE:
            return {
                pending: false,
                files: state.files
            }
        case FILE_DOWNLOAD_REQUEST:
            return {
                pending: true,
                files: state.files
            }
        case FILE_DOWNLOAD_SUCCESS:
            newState.files[action.id] = action.file
            return {
                pending: false,
                files: newState.files
            }
        case FILE_DOWNLOAD_FAILURE:
            return {
                pending: false,
                files: state.files
            }
        default:
            return state
    }
}

export default fileStore
