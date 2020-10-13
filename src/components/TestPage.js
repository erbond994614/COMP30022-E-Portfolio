import React from 'react';
import { useSelector } from 'react-redux'
import Register from './Register'
import Login from './Login';
import ProfilePictureUpload from './ProfilePictureUpload';
import DisplayFile from './DisplayFile'

const TestPage = () => {
  const auth = useSelector(state => state.userAuth.token)
  const portfolio = useSelector(state => state.userAuth.user.portfolio)

  return (

    <div className="container-fluid">
      <Register />
      <Login />
      {auth ? <ProfilePictureUpload/> : null}
      {auth ? <DisplayFile file={portfolio.info.profilePicture}/> : null}
    </div>

  )
}

export default TestPage;