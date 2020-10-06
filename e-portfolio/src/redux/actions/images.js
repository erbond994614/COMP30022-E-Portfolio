import {
    IMAGE_UPLOAD_REQUEST,
    IMAGE_UPLOAD_SUCCESS,
    IMAGE_UPLOAD_FAILURE,
    IMAGE_DOWNLOAD_REQUEST,
    IMAGE_DOWNLOAD_SUCCESS,
    IMAGE_DOWNLOAD_FAILURE,
    IMAGE_CLEAR
} from '../constants/images'

export const imageUploadRequest = () => ({
    type: IMAGE_UPLOAD_REQUEST
})

export const imageUploadSuccess = (images) => ({
    type: IMAGE_UPLOAD_SUCCESS,
    images
})

export const imageUploadFailure = () => ({
    type: IMAGE_UPLOAD_FAILURE
})

export const imageDownloadRequest = () => ({
    type: IMAGE_DOWNLOAD_REQUEST
})

export const imageDownloadSuccess = (images) => ({
    type: IMAGE_DOWNLOAD_SUCCESS,
    images
})

export const imageDownloadFailure = () => ({
    type: IMAGE_DOWNLOAD_FAILURE
})

export const imageClear = () => ({
    type: IMAGE_CLEAR
})

export const uploadImage = (payload, images, path, token) => {
    return dispatch => {
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
                    images[result.id] = result.image
                    dispatch(imageUploadSuccess(images))
                    path(result.id)
                } else {
                    dispatch(imageUploadFailure())
                    alert(result.error)
                }
            }))
    }
}

export const downloadImage = (userEmail, imageId, images) => {
    return dispatch => {
        dispatch(imageDownloadRequest())
        const request = {
            method: 'GET'
        }
        fetch(`/api/images/${userEmail}/${imageId}`, request).then(response =>
            response.json().then(result => {
                if (response.status === 201) {
                    images[result.id] = result.image
                    dispatch(imageDownloadSuccess(images))
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
                    var imageStore = {}
                    for (const image of images) {
                        imageStore[image._id] = image
                    }
                    dispatch(imageDownloadSuccess(imageStore))
                } else {
                    dispatch(imageDownloadFailure())
                    alert(result.error)
                }
            }))
    }
}