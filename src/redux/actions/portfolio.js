import {
    PORTFOLIO_DOWNLOAD_REQUEST,
    PORTFOLIO_DOWNLOAD_SUCCESS,
    PORTFOLIO_DOWNLOAD_FAILURE
} from '../constants/portfolio'
import history from '../../history'

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

export const downloadPortfolio = (userId) => {
    return dispatch => {
        dispatch(portfolioDownloadRequest())
        const request = {
            method: 'GET'
        }
        fetch(`/api/users/${userId}/portfolio`, request).then(response => 
            response.json().then(result => {
                if (response.status === 201) {
                    dispatch(portfolioDownloadSuccess(result))
                    history.push('/display')
                } else {
                    dispatch(portfolioDownloadFailure())
                    alert(result.error)
                }
            })
        )
    }
}