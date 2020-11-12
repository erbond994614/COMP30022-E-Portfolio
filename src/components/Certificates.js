import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Zmage from 'react-zmage'
import Upload from './Upload'
import { updatePortfolio, uploadCertificate } from '../redux/actions/users'

const Certificates = (props) => {
    const portfolio = useSelector((state) => {
        if (!props.display) {
            return state.userAuth.user.portfolio
        } else {
            return state.portfolioStore.portfolio
        }
    })
    const token = useSelector(state => state.userAuth.token)
    const dispatch = useDispatch()

    const handleRemoveCertificate = (item) => {
        const newPortfolio = JSON.parse(JSON.stringify(portfolio))
        const index = newPortfolio.certificates.indexOf(item)
        newPortfolio.certificates.splice(index, 1)
        dispatch(updatePortfolio(newPortfolio, token))
    }

    return (
        <div className="row">
            <div className="col-10 col-sm-12 mb-3">
              <div className="galley-box">
                <h3 className="mt-3 text-left">My Certificates</h3>
                <div className="d-flex flex-wrap justify-content-start">
                  {!portfolio.certificates ? null : portfolio.certificates.map((item, index) => (
                    <div className="galley-item mr-3 mb-1" key={index}>
                      <Zmage src={"data:image/jpg;base64," + item.data} />
                      {!props.display
                      ? <button
                          type="button"
                          className="btn btn-link"
                          onClick={() => handleRemoveCertificate(item)}
                        >
                        Delete
                        </button>
                        : null}
                    </div>
                  ))}
                  {!props.display
                    ? <Upload submit={uploadCertificate}/>
                    : null}
                </div>
              </div>
            </div>
          </div>
    )
}

export default Certificates
