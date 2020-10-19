import {
    PORTFOLIO_DOWNLOAD_REQUEST,
    PORTFOLIO_DOWNLOAD_SUCCESS,
    PORTFOLIO_DOWNLOAD_FAILURE
} from '../constants/portfolio'

const initialState = {
        pending: false,
        portfolio: null
    }

const portfolio = (state = initialState, action) => {
    switch(action.type) {
        case PORTFOLIO_DOWNLOAD_REQUEST:
            return {
                pending: true,
                portfolio: state.portfolio
            }
        case PORTFOLIO_DOWNLOAD_SUCCESS:
            return {
                pending: false,
                portfolio: action.portfolio
            }
        case PORTFOLIO_DOWNLOAD_FAILURE:
            return {
                pending: false,
                portfolio: null
            }
        default:
            return state
    }
}

export default portfolio