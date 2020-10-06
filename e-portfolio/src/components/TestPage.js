import React from 'react';
import Register from './Register'
import Login from './Login';
import ImageUploadForm from './ImageUpload';
import DisplayImage from './DisplayImage';

const TestPage = () => {
  return (

    <div className="container-fluid">
      <Register />
      <Login />
      <ImageUploadForm />
      <DisplayImage imageId='5f76b2836399bd3bf8e12341'/>
    </div>

  )
}

export default TestPage;