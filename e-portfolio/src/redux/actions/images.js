import {
    IMAGE_UPLOAD_REQUEST,
    IMAGE_UPLOAD_SUCCESS,
    IMAGE_UPLOAD_FAILURE,
    IMAGE_DOWNLOAD_REQUEST,
    IMAGE_DOWNLOAD_SUCCESS,
    IMAGE_DOWNLOAD_FAILURE
} from '../constants/images'

export const imageUploadRequest = () => ({
    type: IMAGE_UPLOAD_REQUEST
})

export const imageUploadSuccess = (id, image) => ({
    type: IMAGE_UPLOAD_SUCCESS,
    id,
    image
})

export const imageUploadFailure = () => ({
    type: IMAGE_UPLOAD_FAILURE
})

export const imageDownloadRequest = () => ({
    type: IMAGE_DOWNLOAD_REQUEST
})

export const imageDownloadSuccess = (id, image) => ({
    type: IMAGE_DOWNLOAD_SUCCESS,
    id,
    image
})

export const imageDownloadFailure = () => ({
    type: IMAGE_DOWNLOAD_FAILURE
})

export const uploadImage = (payload, token) => {
    return dispatch => {
        console.log(token)
        dispatch(imageUploadRequest())
        const request = {
            method: 'POST',
            headers: {
                Authorization: token
            },
            body: payload
        }
        fetch('/api/images/upload', request).then(response => 
            response.json().then(result => {
                if (response.status === 201) {
                    dispatch(imageUploadSuccess(result.id, result.image))
                } else {
                    dispatch(imageUploadFailure())
                    alert(result.error)
                }
            }))
    }
}

export const downloadImage = (userEmail, imageId) => {
    return dispatch => {
        dispatch(imageDownloadRequest())
        const request = {
            method: 'GET'
        }
        fetch(`/api/images/${userEmail}/${imageId}`, request).then(response =>
            response.json().then(result => {
                if (response.status === 201) {
                    dispatch(imageDownloadSuccess(result.id, result.image))
                } else {
                    dispatch(imageDownloadFailure())
                    alert(result.error)
                }
            }))
    }
}

export const downloadUserImages = (userEmail) => {
    return dispatch => {
        dispatch(imageDownloadRequest())
        const request = {
            method: 'GET'
        }
        fetch(`/api/images/${userEmail}`, request).then(response =>
            response.json().then(result => {
                if (response.status === 201) {
                    const images = result.values()
                    for (const image of images) {
                        dispatch(imageDownloadSuccess(image._id, image))
                    }
                } else {
                    dispatch(imageDownloadFailure())
                    alert(result.error)
                }
            }))
    }
}