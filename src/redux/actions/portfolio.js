import {
    PORTFOLIO_DOWNLOAD_REQUEST,
    PORTFOLIO_DOWNLOAD_SUCCESS,
    PORTFOLIO_DOWNLOAD_FAILURE
} from '../constants/portfolio'

export const portfolioDownloadRequest = () => ({
    type: PORTFOLIO_DOWNLOAD_REQUEST
})

export const portfolioDownloadSuccess = (portfolio) => ({
    type: PORTFOLIO_DOWNLOAD_SUCCESS,
    portfolio
})

export const portfolioDownloadFailure = () => ({
    type: PORTFOLIO_DOWNLOAD_FAILURE
})

export const downloadPortfolio = (userEmail) => {
    return dispatch => {
        dispatch(portfolioDownloadRequest())
        const request = {
            method: 'GET'
        }
        fetch(`/api/users/${userEmail}/portfolio`, request).then(response => 
            response.json().then(result => {
                if (response.status === 201) {
                    dispatch(portfolioDownloadSuccess(result))
                } else {
                    dispatch(portfolioDownloadFailure())
                    alert(result.error)
                }
            })
        )
    }
}