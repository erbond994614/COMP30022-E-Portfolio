import {
    IMAGE_UPLOAD_REQUEST,
    IMAGE_UPLOAD_SUCCESS,
    IMAGE_UPLOAD_FAILURE,
    IMAGE_DOWNLOAD_REQUEST,
    IMAGE_DOWNLOAD_SUCCESS,
    IMAGE_DOWNLOAD_FAILURE,
    IMAGE_CLEAR
} from '../constants/images'

const images = JSON.parse(localStorage.getItem("images"))
const initialState = images ? {pending: false, images} : {pending: false, images: {}}

const imageStore = (state = initialState, action) => {
    switch(action.type) {
        case IMAGE_UPLOAD_REQUEST:
            return {
                pending: true,
                images: state.images
            }
        case IMAGE_UPLOAD_SUCCESS:
            return {
                pending: false,
                images: action.images
            }
        case IMAGE_UPLOAD_FAILURE:
            return {
                pending: false,
                images: state.images
            }
        case IMAGE_DOWNLOAD_REQUEST:
            return {
                pending: true,
                images: state.images
            }
        case IMAGE_DOWNLOAD_SUCCESS:
            return {
                pending: false,
                images: action.images
            }
        case IMAGE_DOWNLOAD_FAILURE:
            return {
                pending: false,
                images: state.images
            }
        case IMAGE_CLEAR:
            return {
                pending: false,
                images: {}
            }
        default:
            return state
    }
}

export default imageStore