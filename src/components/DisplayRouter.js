import { useDispatch } from 'react-redux'
import { downloadPortfolio } from '../redux/actions/portfolio'

const DisplayRouter = (props) => {
    const dispatch = useDispatch()
    dispatch(downloadPortfolio(props.params.id))
    return null
}

export default DisplayRouter