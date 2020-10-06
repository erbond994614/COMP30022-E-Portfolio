import {
    FILE_UPLOAD_REQUEST,
    FILE_UPLOAD_SUCCESS,
    FILE_UPLOAD_FAILURE,
    FILE_DOWNLOAD_REQUEST,
    FILE_DOWNLOAD_SUCCESS,
    FILE_DOWNLOAD_FAILURE,
    FILE_CLEAR
} from '../constants/files'

export const fileUploadRequest = () => ({
    type: FILE_UPLOAD_REQUEST
})

export const fileUploadSuccess = (id, file) => ({
    type: FILE_UPLOAD_SUCCESS,
    id,
    file
})

export const fileUploadFailure = () => ({
    type: FILE_UPLOAD_FAILURE
})

export const fileDownloadRequest = () => ({
    type: FILE_DOWNLOAD_REQUEST
})

export const fileDownloadSuccess = (id, file) => ({
    type: FILE_DOWNLOAD_SUCCESS,
    id,
    file
})

export const fileDownloadFailure = () => ({
    type: FILE_DOWNLOAD_FAILURE
})

export const fileClear = () => ({
    type: FILE_CLEAR
})

export const uploadFile = (payload, token) => {
    return dispatch => {
        console.log(token)
        dispatch(fileUploadRequest())
        const request = {
            method: 'POST',
            headers: {
                Authorization: token
            },
            body: payload
        }
        fetch('/api/files/upload', request).then(response => 
            response.json().then(result => {
                if (response.status === 201) {
                    dispatch(fileUploadSuccess(result.id, result.file))
                } else {
                    dispatch(fileUploadFailure())
                    alert(result.error)
                }
            }))
    }
}

export const downloadFile = (userEmail, fileId) => {
    return dispatch => {
        dispatch(fileDownloadRequest())
        const request = {
            method: 'GET'
        }
        fetch(`/api/files/${userEmail}/${fileId}`, request).then(response =>
            response.json().then(result => {
                if (response.status === 201) {
                    dispatch(fileDownloadSuccess(result.id, result.file))
                } else {
                    dispatch(fileDownloadFailure())
                    alert(result.error)
                }
            }))
    }
}

export const downloadUserFiles = (userEmail) => {
    return dispatch => {
        dispatch(fileDownloadRequest())
        const request = {
            method: 'GET'
        }
        fetch(`/api/files/${userEmail}`, request).then(response =>
            response.json().then(result => {
                if (response.status === 201) {
                    const files = result.values()
                    for (const file of files) {
                        dispatch(fileDownloadSuccess(file._id, file))
                    }
                } else {
                    dispatch(fileDownloadFailure())
                    alert(result.error)
                }
            }))
    }
}