import React from 'react';
import Register from './Register'
import Login from './Login';
import ImageUploadForm from './ImageUpload';
import FetchImage from './FetchImage'

const TestPage = () => {
  return (

    <div className="container-fluid">
      <Register />
      <Login />
      <ImageUploadForm />
      <FetchImage imageId='5f6ed114cc4e390708db2714'/>
    </div>

  )
}

export default TestPage;