import React, { Component } from 'react';
import Login from './Login';
import ImageUploadForm from './ImageUploadForm';
import FetchImage from '../FetchImage'

const TestPage = () => {
  return (

    <div className="container-fluid">
      <Login />
      <ImageUploadForm />
      <FetchImage imageName='Screenshot (1).png'/>
    </div>

  )
}

export default TestPage;